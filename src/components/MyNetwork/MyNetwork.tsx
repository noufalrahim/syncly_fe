import { FilterIcon, SearchIcon } from 'lucide-react';
import { AppBar } from '../AppBar';
import { Modal } from '../Modal';
import { useModal } from '@/hooks/useModal';
import { Search } from '../Search';
import { useState, useEffect } from 'react';
import { LoadingSpinner } from '../LoadingSpinner';

// Hardcoded list of network people
const networkPeople = [
  {
    name: 'John Doe',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    skills: ['React', 'Node.js', 'JavaScript'],
    projects: ['Project Alpha', 'Project Beta'],
  },
  {
    name: 'Jane Smith',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    skills: ['Python', 'Django', 'API Development'],
    projects: ['Project Gamma', 'Project Delta'],
  },
  {
    name: 'Alice Johnson',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    skills: ['Machine Learning', 'Data Analysis'],
    projects: ['Project Epsilon', 'Project Zeta'],
  },
];

const MyNetwork = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [loading, setLoading] = useState(false);
  const [filteredPeople, setFilteredPeople] = useState(networkPeople); // State to hold filtered people
  const [searchTerm, setSearchTerm] = useState(''); // Search term for filtering

  // Filter options state
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedProject, setSelectedProject] = useState('');

  useEffect(() => {
    const fetchNetworks = async () => {
      setLoading(true);
      try {
        const response = await getNetworks(authUser._id);
        console.log("Networks: ", response);
        setNetworks(response.data.networks);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchNetworks();
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter people based on selected skills and projects
  const handleFilter = () => {
    let filtered = networkPeople;

    if (selectedSkill) {
      filtered = filtered.filter((person) => person.skills.some((skill) => skill.toLowerCase().includes(selectedSkill.toLowerCase())));
    }

    if (selectedProject) {
      filtered = filtered.filter((person) => person.projects.some((project) => project.toLowerCase().includes(selectedProject.toLowerCase())));
    }

    setFilteredPeople(filtered);
    closeModal();
  };

  // Filter network people based on search term (name, skill, or project)
  const filteredBySearch = filteredPeople.filter((person) => person.name.toLowerCase().includes(searchTerm.toLowerCase()) || person.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase())) || person.projects.some((project) => project.toLowerCase().includes(searchTerm.toLowerCase())));

  return (
    <div className="h-full w-full px-5">
      <AppBar
        title="My Networks"
        description="Create a network"
        buttons={[
          {
            title: 'Filter',
            onClick: () => openModal(),
            icon: <FilterIcon size={18} />,
          },
          {
            title: 'Find',
            onClick: () => openModal(),
            icon: <SearchIcon size={18} />,
          },
        ]}
      />

      {loading ? (
        <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Network People</h2>

          {/* Search Input */}
          <div className="mb-4">
            <input type="text" placeholder="Search by name, skill, or project..." className="w-full rounded-md border border-gray-300 p-2" value={searchTerm} onChange={handleSearchChange} />
          </div>

          {/* Grid of cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredBySearch.map((person, index) => (
              <div key={index} className="rounded-md border border-gray-200 bg-white p-4 shadow-md">
                {/* User Image */}
                <img src={person.image} alt={person.name} className="mb-4 h-16 w-16 rounded-full object-cover" />

                {/* User Info */}
                <h3 className="text-lg font-semibold text-gray-800">{person.name}</h3>
                <p className="text-sm text-gray-600">
                  <strong>Skills:</strong> {person.skills.join(', ')}
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  <strong>Projects:</strong> {person.projects.join(', ')}
                </p>
              </div>
            ))}
          </div>

          {/* Filter Modal */}
          <Modal title="Filter Network People" isOpen={isOpen} onClose={closeModal}>
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="skill" className="block text-sm font-medium text-gray-700">
                  Filter by Skill
                </label>
                <input id="skill" type="text" placeholder="Enter skill" value={selectedSkill} onChange={(e) => setSelectedSkill(e.target.value)} className="w-full rounded-md border border-gray-300 p-2" />
              </div>
              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-700">
                  Filter by Project
                </label>
                <input id="project" type="text" placeholder="Enter project" value={selectedProject} onChange={(e) => setSelectedProject(e.target.value)} className="w-full rounded-md border border-gray-300 p-2" />
              </div>
              <div className="mt-4 flex justify-end">
                <button onClick={handleFilter} className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                  Apply Filter
                </button>
              </div>
            </div>
          </Modal>
        </>
      )}
    </div>
  );
};

export default MyNetwork;

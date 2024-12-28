/* eslint-disable react/react-in-jsx-scope */
import { FilterIcon, SearchIcon } from 'lucide-react';
import { AppBar } from '../AppBar';
import { Modal } from '../Modal';
import { useModal } from '@/hooks/useModal';
import { useState, useEffect } from 'react';
import { LoadingSpinner } from '../LoadingSpinner';
import { getNetworks } from './api/getNetworks';
import { useSelector } from 'react-redux';
import { AppState } from '@/redux/store';
import GeneralCard from '../GeneralCard/GeneralCard';
import { Badge } from '../ui/badge';

const MyNetwork = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [loading, setLoading] = useState(false);
  const [filteredPeople, setFilteredPeople] = useState<Array<{
    _id: string;
    name: string;
    username: string;
    image: string;
    projects: string[];
    skills: Array<{
      skillId: string;
      skillName: string;
    }>
  }>>([]); // State to hold filtered people
  const [searchTerm, setSearchTerm] = useState(''); // Search term for filtering

  // Filter options state
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedProject, setSelectedProject] = useState('');

  const authUser = useSelector((state: AppState) => state.authUser);

  useEffect(() => {
    const fetchNetworks = async () => {
      setLoading(true);
      try {
        const response = await getNetworks(authUser._id);
        console.log("Networks: ", response);
        setFilteredPeople(response.data.networks);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchNetworks();
  }, []);

  console.log("Initital fileterd: ", filteredPeople);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter people based on selected skills and projects
  const handleFilter = () => {
    let filtered = [...filteredPeople];

    // if (selectedSkill) {
    //   filtered = filtered.filter((person) => person.skills.some((skill) => skill.toLowerCase().includes(selectedSkill.toLowerCase())));
    // }

    // if (selectedProject) {
    //   filtered = filtered.filter((person) => person.projects.some((project) => project.toLowerCase().includes(selectedProject.toLowerCase())));
    // }

    setFilteredPeople(filtered);
    closeModal();
  };

  // Filter network people based on search term (name, skill, or project)
  // const filteredBySearch = filteredPeople.filter((person) => person.name.toLowerCase().includes(searchTerm.toLowerCase()) || person.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase())) || person.projects.some((project) => project.toLowerCase().includes(searchTerm.toLowerCase())));

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

          {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPeople.map((person, index) => (
              <div key={index} className="rounded-md border border-gray-200 bg-white p-4 shadow-md">
                <img src={person.image} alt={person.name} className="mb-4 h-16 w-16 rounded-full object-cover" />
                <h3 className="text-lg font-semibold text-gray-800">{person.name}</h3>
                {
                  person.skills && person.skills.length > 0 && (
                    <p className="mt-2 text-sm text-gray-600">
                      <strong>Skills:</strong> {person.skills.map((skill) => skill.skillName).join(', ')}
                    </p>
                  )
                }
                <p className="mt-2 text-sm text-gray-600">
                  <strong>Projects:</strong> {person.projects.join(', ')}
                </p>
              </div>
            ))}
          </div> */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {
              filteredPeople.length > 0 && filteredPeople.map((person, index) => (
                <GeneralCard
                  key={index}
                  header={{
                    image: person.image,
                    title: person.name,
                    description: person.username,
                  }}
                  buttons={[
                    {
                      title: 'Projects',
                      onClick: () => {}
                    },
                    {
                      title: 'Campaigns',
                      onClick: () => {},
                    },
                    {
                      title: 'Message',
                      onClick: () => {},
                    }
                  ]}
                >
                  {
                    person.skills && person.skills.length > 0 && (
                      <div className="mt-2">
                        {person.skills.map((skill) => (
                          <Badge key={skill.skillId} className="mr-2">{skill.skillName}</Badge>
                        ))}
                      </div>
                    )
                  }
                </GeneralCard>
              ))
            }
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

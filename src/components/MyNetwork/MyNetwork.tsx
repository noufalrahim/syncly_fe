import { FilterIcon, SearchIcon } from 'lucide-react';
import { AppBar } from '../AppBar';
import { NetworkCard } from './components';
import { Modal } from '../Modal';
import { useModal } from '@/hooks/useModal';
import { Search } from '../Search';

const MyNetwork = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className="h-full w-full px-5">
      <AppBar
        title="My Network"
        description="Create a network"
        buttons={[
          {
            title: 'Filter',
            onClick: () => {},
            icon: <FilterIcon size={18} />,
          },
          {
            title: 'Find',
            onClick: () => openModal(),
            icon: <SearchIcon size={18} />,
          },
        ]}
      />
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <NetworkCard key={i} />
          ))}
      </div>
      <Modal title="Find a network" isOpen={isOpen} onClose={closeModal}>
        <Search />
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <NetworkCard key={i} />
            ))}
        </div>
      </Modal>
    </div>
  );
};

export default MyNetwork;

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar';
import { MenuItemsData } from './types';
import { IoHome, IoPeople } from 'react-icons/io5';
import { MdInbox, MdTask } from 'react-icons/md';
import { IoCalendarClear } from 'react-icons/io5';
import { useSidebar } from '../ui/sidebar';
import { BellIcon, BrainCircuitIcon, Calendar, KanbanIcon, MessageCircle, Notebook, PlusIcon, TableIcon, TagIcon } from 'lucide-react';
import SideBarHeader from './components/SideBarHeader';
import SideBarFooter from './components/SideBarFooter';
import { CollapsibleContents, ProjectForm, SubSideBar } from './components';
import { ProjectType } from './components/types';
import React from 'react';
import { Modal } from '../Modal';
import { getProjects } from './api/getProjects';
import { FaSearch } from 'react-icons/fa';

export default function AppSidebar() {
  const { open } = useSidebar();
  const [openProject, setOpenProject] = React.useState<string | null>('1');
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [projectsData, setProjectsData] = React.useState<ProjectType[]>([]);
  const subSideBarRoutes = ['messages'];
  const [showSubSidebar, setShowSubSidebar] = React.useState<boolean>(false);

  const today = new Date().getDate();

  const menuItems: MenuItemsData[] = [
    {
      title: 'Search',
      url: '/',
      icon: <FaSearch size={20} />,
    },
    {
      title: 'Inbox',
      url: '/inbox',
      icon: <MdInbox size={20} />,
    },
    {
      title: 'My Networks',
      url: '/my-network',
      icon: <IoPeople size={20} />
    },
    {
      title: 'Messages',
      url: '/messages',
      icon: <MessageCircle size={20} />
    },
    {
      title: 'Today',
      url: '/today',
      icon: <div className='border-black text-2xs p-[2px] border-2 font-semibold rounded-md'>
        {today.toString().length === 1 ? `0${today}` : today}
      </div>
    },
    {
      title: 'Upcoming',
      url: '/upcoming',
      icon: <Calendar size={20} />,
    },
    {
      title: 'Filters & Tags',
      url: '/filters',
      icon: <TagIcon size={20} />,
    },
    {
      title: 'Notifications',
      url: '/notifications',
      icon: <BellIcon size={20} />,
    },
    {
      title: 'My Tasks',
      url: '/tasks',
      icon: <MdTask size={20} />,
    },
  ];

  React.useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getProjects();
      setProjectsData(projects);
    };

    fetchProjects();
  }, []);

  React.useEffect(() => {
    const handleRouteChange = () => {
      if (subSideBarRoutes.includes(window.location.pathname.split('/')[1])) {
        setShowSubSidebar(true);
      } else {
        setShowSubSidebar(false);
      }
    };

    handleRouteChange();
  }, []);

  return (
    <>
      <Sidebar collapsible="icon" className="bg-white">
        <SideBarHeader title={'Syncly'} open={open} />
        <SidebarContent className="flex gap-0">
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              {menuItems.map((item, index) => (
                <SidebarMenuItem className="list-none rounded-md hover:bg-gray-200" key={index}>
                  <SidebarMenuButton variant={'default'}>
                    <a href={item.url} className="flex w-full flex-row items-center gap-5">
                      {item.icon}
                      {open && <span className="text-md">{item.title}</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center justify-between">
              <p>Projects</p>
              <PlusIcon onClick={() => setOpenModal(true)} size={20} className="rounded-md transition-colors hover:bg-gray-300" />
            </SidebarGroupLabel>
            <SidebarGroupContent>
              {projectsData.map((project, index) => (
                <CollapsibleContents key={index} project={project} defaultOpen={openProject === project.id} />
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SideBarFooter />
      </Sidebar>
      {
        showSubSidebar && <SubSideBar />
      }
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)} title="Create Project">
        <ProjectForm />
      </Modal>
    </>
  );
}

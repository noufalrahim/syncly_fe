/* eslint-disable react/react-in-jsx-scope */
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar';
import { MenuItemsData } from './types';
import { IoPeople } from 'react-icons/io5';
import { MdTask } from 'react-icons/md';
import { useSidebar } from '../ui/sidebar';
import { BellIcon, BrainCircuitIcon, MessageCircle, PlusIcon } from 'lucide-react';
import SideBarHeader from './components/SideBarHeader';
import SideBarFooter from './components/SideBarFooter';
import { CollapsibleContents, ProjectForm } from './components';
import { ProjectType } from './components/types';
import { useState, useEffect } from 'react';
import { Modal } from '../Modal';
import { getProjects } from './api/getProjects';
import { FaSearch, FaTachometerAlt, FaBullhorn, FaRss } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { AppState } from '@/redux/store';



export default function AppSidebar({ isAdmin = false }: { isAdmin?: boolean }) {
  const { open } = useSidebar();
  const [openProject,
    // setOpenProject
  ] = useState<string | null>('1');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [projectsData, setProjectsData] = useState<ProjectType[]>([]);

  const authUser = useSelector((state: AppState) => state.authUser);

  const today = new Date().getDate();
  const menuItems: MenuItemsData[] = [
    {
      title: 'Search',
      url: '/',
      icon: <FaSearch size={20} />,
    },
    {
      title: 'Feeds',
      url: '/feeds',
      icon: <FaRss size={20} />,
    },
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: <FaTachometerAlt size={20} />,
    },
    {
      title: 'Campaigns',
      url: '/Campaigns',
      icon: <FaBullhorn size={20} />,
    },
    // {
    //   title: 'Inbox',
    //   url: '/inbox',
    //   icon: <MdInbox size={20} />,
    // },
    {
      title: 'My Networks',
      url: '/my-network',
      icon: <IoPeople size={20} />,
    },
    {
      title: 'Messages',
      url: '/messages',
      icon: <MessageCircle size={20} />,
    },
    {
      title: 'Today',
      url: '/today',
      icon: <div className="rounded-md border-2 border-black p-[2px] text-2xs font-semibold">{today.toString().length === 1 ? `0${today}` : today}</div>,
    },
    // {
    //   title: 'Upcoming',
    //   url: '/upcoming',
    //   icon: <Calendar size={20} />,
    // },
    // {
    //   title: 'Filters & Tags',
    //   url: '/filters',
    //   icon: <TagIcon size={20} />,
    // },
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
    {
      title: 'Projects',
      url: '/projects',
      icon: <BrainCircuitIcon size={20} />,
    },
    {
      title: 'Disasters',
      url: '/disasters',
      icon: <MessageCircle size={20} />,
    },
  ];

  const adminMenuItems = [
    {
      title: 'Requests', // Only "Requests" item
      url: '/admin/requests', // URL for the Requests page
      icon: <MdTask size={20} />, // Icon for the Requests item
    },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getProjects(authUser._id);
      setProjectsData(projects);
    };

    fetchProjects();
  }, []);

  console.log('projectsData', projectsData);

  return (
    <>
      <Sidebar collapsible="icon" className="bg-white">
        <SideBarHeader title={'SustainLink'} open={open} />
        <SidebarContent className="flex gap-0">
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              {!isAdmin ? menuItems.map((item, index) => (
                <SidebarMenuItem className="list-none rounded-md hover:bg-gray-200" key={index}>
                  <SidebarMenuButton variant={'default'}>
                    <a href={item.url} className="flex w-full flex-row items-center gap-5">
                      {item.icon}
                      {open && <span className="text-md">{item.title}</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )) : (
                adminMenuItems.map((item, index) => (
                  <SidebarMenuItem className="list-none rounded-md hover:bg-gray-200" key={index}>
                    <SidebarMenuButton variant={'default'}>
                      <a href={item.url} className="flex w-full flex-row items-center gap-5">
                        {item.icon}
                        {open && <span className="text-md">{item.title}</span>}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              )}
            </SidebarGroupContent>
          </SidebarGroup>
          {!isAdmin && <SidebarGroup>
            <SidebarGroupLabel className="flex items-center justify-between">
              <p>Projects</p>
              <PlusIcon onClick={() => setOpenModal(true)} size={20} className="rounded-md transition-colors hover:bg-gray-300" />
            </SidebarGroupLabel>
            <SidebarGroupContent>
              {projectsData && projectsData.length > 0 && projectsData.map((project, index) => (
                <CollapsibleContents key={index} project={project} defaultOpen={openProject === project.id} />
              ))}
            </SidebarGroupContent>
          </SidebarGroup>}
        </SidebarContent>
        {!isAdmin && <SideBarFooter />}
      </Sidebar>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)} title="Create Project">
        <ProjectForm />
      </Modal>
    </>
  );
}

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar';
import { MenuItemsData } from './types';
import { IoHome } from 'react-icons/io5';
import { MdInbox, MdTask } from 'react-icons/md';
import { IoCalendarClear } from 'react-icons/io5';
import { useSidebar } from '../ui/sidebar';
import { BellIcon, BrainCircuitIcon, KanbanIcon, Notebook, PlusIcon, TableIcon } from 'lucide-react';
import SideBarHeader from './components/SideBarHeader';
import SideBarFooter from './components/SideBarFooter';
import { CollapsibleContents, ProjectForm } from './components';
import { ProjectType } from './components/types';
import React from 'react';
import { Modal } from '../Modal';
import { getProjects } from './api/getProjects';

export default function AppSidebar() {
  const { open } = useSidebar();
  const [openProject, setOpenProject] = React.useState<string | null>('1');
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [projectsData, setProjectsData] = React.useState<ProjectType[]>([]);

  const menuItems: MenuItemsData[] = [
    {
      title: 'Home',
      url: '/',
      icon: <IoHome size={20} />,
    },
    {
      title: 'My Tasks',
      url: '/tasks',
      icon: <MdTask size={20} />,
    },
    {
      title: 'Inbox',
      url: '/inbox',
      icon: <MdInbox size={20} />,
    },
    {
      title: 'Notifications',
      url: '/notifications',
      icon: <BellIcon size={20} />,
    },
  ];

  React.useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getProjects();
      setProjectsData(projects);
    };

    fetchProjects();
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
                <SidebarMenuItem className="list-none rounded-md hover:bg-gray-600 hover:text-white" key={index}>
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
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)} title="Create Project">
        <ProjectForm />
      </Modal>
    </>
  );
}

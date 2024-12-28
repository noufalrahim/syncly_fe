/* eslint-disable react/react-in-jsx-scope */
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar';
import { MdTask } from 'react-icons/md';
import { useSidebar } from '../ui/sidebar';
import { useState, useEffect } from 'react';
import { Modal } from '../Modal';
import { getProjects } from './api/getProjects';
import { ProjectType } from './components/types';
import SideBarHeader from './components/SideBarHeader';
import SideBarFooter from './components/SideBarFooter';

export default function AdminSidebar() {
  const { open } = useSidebar();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [projectsData, setProjectsData] = useState<ProjectType[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getProjects();
      setProjectsData(projects);
    };

    fetchProjects();
  }, []);

  const menuItems = [
    {
      title: 'Requests', // Only "Requests" item
      url: '/requests', // URL for the Requests page
      icon: <MdTask size={20} />, // Icon for the Requests item
    },
  ];

  return (
    <>
      <Sidebar collapsible="icon" className="bg-white">
        <SideBarHeader title={'Admin Sidebar'} open={open} />
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
            </SidebarGroupLabel>
            <SidebarGroupContent>
              {projectsData.map((project, index) => (
                <div key={index}>{project.name}</div> // You can customize how to display the project information
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SideBarFooter />
      </Sidebar>
    </>
  );
}

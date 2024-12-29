import * as React from 'react';
import AppSidebar from '../Sidebar/Sidebar';
import { LayoutProps } from './types';
import { SidebarProvider } from '../ui/sidebar';
const Layout: React.FC<LayoutProps> = ({ children, isAdmin = false }) => {
  console.log(isAdmin); 
  return (
    <SidebarProvider>
      <AppSidebar isAdmin={isAdmin}/>
      <main className="w-full">{children}</main>
    </SidebarProvider>
  );
};

export default Layout;

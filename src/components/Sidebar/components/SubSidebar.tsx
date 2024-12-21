import { SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { FaSearch } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { MdInbox } from "react-icons/md";
import { MenuItemsData } from "../types";


const SubSideBar = () => {
    const menuItems = [
        {
            id: 1,
            name: 'Harry Potter',
            username: 'harrypotter',
            avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
            messages: [
                {
                    id: 1,
                    message: 'Hello, how are you?',
                    time: '10:00 AM',
                    unread: false,
                    sender: 'Harry Potter',
                },
                {
                    id: 2,
                    message: 'I am fine, thank you.',
                    time: '10:01 AM',
                    unread: false,
                    sender: 'You',
                },
                {
                    id: 3,
                    message: 'What are you doing?',
                    time: '10:02 AM',
                    unread: true,
                    sender: 'Harry Potter',
                },
                {
                    id: 4,
                    message: 'I am working on a project.',
                    time: '10:03 AM',
                    unread: true,
                    sender: 'You',
                }
            ]
        },
        {
            id: 2,
            name: 'Hermione Granger',
            username: 'hermionegranger',
            avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
            messages: [
                {
                    id: 1,
                    message: 'Hello, how are you?',
                    time: '10:00 AM',
                    unread: false,
                    sender: 'Hermione Granger',
                },
                {
                    id: 2,
                    message: 'I am fine, thank you.',
                    time: '10:01 AM',
                    unread: false,
                    sender: 'You',
                },
                {
                    id: 3,
                    message: 'What are you doing?',
                    time: '10:02 AM',
                    unread: true,
                    sender: 'Hermione Granger',
                },
                {
                    id: 4,
                    message: 'I am working on a project.',
                    time: '10:03 AM',
                    unread: true,
                    sender: 'You',
                }
            ]
        },
        {
            id: 3,
            name: 'Ron Weasley',
            username: 'ronweasley',
            avatar: 'https://randomuser.me/api/portraits/men/73.jpg',
            messages: [
                {
                    id: 1,
                    message: 'Hello, how are you?',
                    time: '10:00 AM',
                    unread: false,
                    sender: 'Ron Weasley',
                },
                {
                    id: 2,
                    message: 'I am fine, thank you.',
                    time: '10:01 AM',
                    unread: false,
                    sender: 'You',
                },
                {
                    id: 3,
                    message: 'What are you doing?',
                    time: '10:02 AM',
                    unread: true,
                    sender: 'Ron Weasley',
                },
                {
                    id: 4,
                    message: 'I am working on a project.',
                    time: '10:03 AM',
                    unread: true,
                    sender: 'You',
                }
            ]
        }
    ];
    return (
        <div className="min-w-64 bg-gray-300">
            <SidebarContent className="flex gap-0">
                <SidebarGroup>
                    <SidebarGroupLabel>Messages</SidebarGroupLabel>
                    <SidebarGroupContent>
                        {menuItems.map((item, index) => (
                            <SidebarMenuItem className="list-none rounded-md hover:bg-gray-200 my-2" key={index}>
                                <SidebarMenuButton variant={'default'}>
                                    <a href={`/messages/${item.username}`} className="flex w-full flex-row items-center gap-5">
                                        <img src={item.avatar} alt={item.name} className="w-6 h-6 rounded-full" />
                                        <span className="text-md">{item.name}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </div>
    );
}

export default SubSideBar;
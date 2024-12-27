/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import 'react-chat-elements/dist/main.css';
import { MessageBox } from 'react-chat-elements';
import { ChatListComponent } from './components';
import { Input } from 'react-chat-elements';
import { Button } from '../ui/button';
import { Paperclip } from 'lucide-react';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';
import { AppState } from '@/redux/store';
import React, { useEffect, useState } from 'react';

const socket = io('http://localhost:5000');
const ChatScreen = () => {
  const currentUrl = window.location.href;
  const urlParams = new URLSearchParams(new URL(currentUrl).search);
  const usernameFromParam = urlParams.get('user');

  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [currentMessage, setCurrentMessage] = useState('');
  const [messagesList, setMessagesList] = useState<any[]>([]);

  const sendMessage = async () => {
    if (currentMessage !== '') {
      const messagesData = {
        room: room,
        author: username,
        message: currentMessage,
        time: new Date().toLocaleTimeString(),
      };

      // Add the message locally to the sender's chat
      setMessagesList((list) => [...list, messagesData]);

      // Emit the message to the server
      socket.emit('sendMessage', messagesData);

      // Clear the input field
      setCurrentMessage('');
    }
  };
  useEffect(() => {
    socket.on('receiveMessage', (data: any) => {
      setMessagesList((messagesList) => {
        if (!messagesList.some((msg) => msg.time === data.time && msg.author === data.author)) {
          return [...messagesList, data];
        }
        return messagesList;
      });
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, [socket]);
  const authUser = useSelector((state: AppState) => state.authUser);

  React.useEffect(() => {
    let joiningRoom = '';
    console.log('Auth user', authUser);
    if (usernameFromParam && authUser.username < usernameFromParam) {
      joiningRoom = `${authUser.username}-${usernameFromParam}`;
    } else {
      joiningRoom = `${usernameFromParam}-${authUser.username}`;
    }
    setRoom(joiningRoom);
    setUsername(authUser.username);
  }, [authUser, usernameFromParam]);

  React.useEffect(() => {
    socket.emit('joinRoom', room);
    console.log('Joining room', room);
  }, [room]);

  return (
    <div className="flex h-full flex-row">
      <ChatListComponent />
      <div className="flex w-full flex-col gap-2 py-5">
        {messagesList.map((message, index) => (
          <MessageBox key={index} id={index.toString()} position={message.author === username ? 'right' : 'left'} type={'text'} title={message.author} text={message.message} date={new Date()} titleColor={'#000'} focus={false} status={'sent'} notch={false} avatar="https://avatars.githubusercontent.com/u/80540635?v=4" forwarded={false} replyButton={false} removeButton={false} retracted={false} />
        ))}

        <div className="absolute bottom-10 mx-2 w-1/4 border border-gray-400">
          <Input placeholder="Type here..." multiline={true} maxHeight={100} />
          <div className="flex items-center justify-between">
            <Button>
              <Paperclip size={20} />
            </Button>
            <Button onClick={sendMessage}>Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;

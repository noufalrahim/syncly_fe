/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */

import React, { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'minnit-chat': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

const ChatScreen = () => {

  // const [messagesList, setMessagesList] = useState<any[]>([]);

  // const sendMessage = async () => {
  //   if (currentMessage !== '') {
  //     const messagesData = {
  //       room: room,
  //       author: username,
  //       message: currentMessage,
  //       time: new Date().toLocaleTimeString(),
  //     };

  //     // Add the message locally to the sender's chat
  //     setMessagesList((list) => [...list, messagesData]);

  //     // Emit the message to the server
  //     socket.emit('sendMessage', messagesData);

  //     // Clear the input field
  //     setCurrentMessage('');
  //   }
  // };
  // useEffect(() => {
  //   socket.on('receiveMessage', (data: any) => {
  //     setMessagesList((messagesList) => {
  //       if (!messagesList.some((msg) => msg.time === data.time && msg.author === data.author)) {
  //         return [...messagesList, data];
  //       }
  //       return messagesList;
  //     });
  //   });

  //   return () => {
  //     socket.off('receiveMessage');
  //   };
  // }, [socket]);
  // const authUser = useSelector((state: AppState) => state.authUser);

  // React.useEffect(() => {
  //   let joiningRoom = '';
  //   console.log('Auth user', authUser);
  //   if (usernameFromParam && authUser.username < usernameFromParam) {
  //     joiningRoom = `${authUser.username}-${usernameFromParam}`;
  //   } else {
  //     joiningRoom = `${usernameFromParam}-${authUser.username}`;
  //   }
  //   setRoom(joiningRoom);
  //   setUsername(authUser.username);
  // }, [authUser, usernameFromParam]);

  // React.useEffect(() => {
  //   socket.emit('joinRoom', room);
  //   console.log('Joining room', room);
  // }, [room]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://minnit.chat/js/embed.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <minnit-chat
        data-chatname="https://organizations.minnit.chat/458434686320590/Main?embed&nickname="
        data-style="width:100%;height:1000px;max-height:100vh;"
      ></minnit-chat>
    </div>
  );
};

export default ChatScreen;

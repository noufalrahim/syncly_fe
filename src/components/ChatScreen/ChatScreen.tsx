/* eslint-disable react/react-in-jsx-scope */
import 'react-chat-elements/dist/main.css';
import { MessageBox } from 'react-chat-elements';
import { ChatListComponent } from './components';
import { Input } from 'react-chat-elements';
import { Button } from '../ui/button';
import { Paperclip } from 'lucide-react';

const ChatScreen = () => {
  return (
    <div className="flex h-full flex-row">
      <ChatListComponent />
      <div className="flex w-full flex-col gap-2 py-5">
        <MessageBox id="1" position={'left'} type={'text'} title={'Kursat'} text="Why don't we go to the No Way Home movie this weekend ?" date={new Date()} titleColor={'#000'} focus={false} status={'sent'} notch={false} avatar="https://avatars.githubusercontent.com/u/80540635?v=4" forwarded={false} replyButton={false} removeButton={false} retracted={false} />
        <MessageBox id="1" position={'right'} type={'text'} title={'Kursat'} text="Why don't we go to the No Way Home movie this weekend ?" date={new Date()} titleColor={'#000'} focus={false} status={'sent'} notch={false} avatar="https://avatars.githubusercontent.com/u/80540635?v=4" forwarded={false} replyButton={false} removeButton={false} retracted={false} />
        <MessageBox id="1" position={'left'} type={'text'} title={'Kursat'} text="Why don't we go to the No Way Home movie this weekend ?" date={new Date()} titleColor={'#000'} focus={false} status={'sent'} notch={false} avatar="https://avatars.githubusercontent.com/u/80540635?v=4" forwarded={false} replyButton={false} removeButton={false} retracted={false} />
        <MessageBox id="1" position={'right'} type={'text'} title={'Kursat'} text="Why don't we go to the No Way Home movie this weekend ?" date={new Date()} titleColor={'#000'} focus={false} status={'sent'} notch={false} avatar="https://avatars.githubusercontent.com/u/80540635?v=4" forwarded={false} replyButton={false} removeButton={false} retracted={false} />
        <MessageBox id="1" position={'right'} type={'text'} title={'Kursat'} text="Why don't we go to the No Way Home movie this weekend ?" date={new Date()} titleColor={'#000'} focus={false} status={'sent'} notch={false} avatar="https://avatars.githubusercontent.com/u/80540635?v=4" forwarded={false} replyButton={false} removeButton={false} retracted={false} />
        <div className="absolute bottom-10 mx-2 w-1/4 border border-gray-400">
          <Input placeholder="Type here..." multiline={true} maxHeight={100} />
          <div className="flex items-center justify-between">
            <Button>
              <Paperclip size={20} />
            </Button>
            <Button>Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;

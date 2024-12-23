import "react-chat-elements/dist/main.css"
import { MessageBox } from "react-chat-elements";
import { ChatListComponent } from "./components";
import { Input } from 'react-chat-elements'
import { Button } from "../ui/button";
import { Paperclip, PinIcon } from "lucide-react";


const ChatScreen = () => {
    return (
        <div className="flex flex-row h-full">
            <ChatListComponent />
            <div className="py-5 flex gap-2 flex-col w-full">
                <MessageBox
                    id="1"
                    position={"left"}
                    type={"text"}
                    title={"Kursat"}
                    text="Why don't we go to the No Way Home movie this weekend ?"
                    date={new Date()}
                    titleColor={"#000"}
                    focus={false}
                    status={"sent"}
                    notch={false}
                    avatar="https://avatars.githubusercontent.com/u/80540635?v=4"
                />
                <MessageBox
                    id="1"
                    position={"right"}
                    type={"text"}
                    title={"Kursat"}
                    text="Why don't we go to the No Way Home movie this weekend ?"
                    date={new Date()}
                    titleColor={"#000"}
                    focus={false}
                    status={"sent"}
                    notch={false}
                    avatar="https://avatars.githubusercontent.com/u/80540635?v=4"
                />
                <MessageBox
                    id="1"
                    position={"left"}
                    type={"text"}
                    title={"Kursat"}
                    text="Why don't we go to the No Way Home movie this weekend ?"
                    date={new Date()}
                    titleColor={"#000"}
                    focus={false}
                    status={"sent"}
                    notch={false}
                    avatar="https://avatars.githubusercontent.com/u/80540635?v=4"
                />
                <MessageBox
                    id="1"
                    position={"right"}
                    type={"text"}
                    title={"Kursat"}
                    text="Why don't we go to the No Way Home movie this weekend ?"
                    date={new Date()}
                    titleColor={"#000"}
                    focus={false}
                    status={"sent"}
                    notch={false}
                    avatar="https://avatars.githubusercontent.com/u/80540635?v=4"
                />
                <MessageBox
                    id="1"
                    position={"right"}
                    type={"text"}
                    title={"Kursat"}
                    text="Why don't we go to the No Way Home movie this weekend ?"
                    date={new Date()}
                    titleColor={"#000"}
                    focus={false}
                    status={"sent"}
                    notch={false}
                    avatar="https://avatars.githubusercontent.com/u/80540635?v=4"
                />
                <div className="absolute bottom-10 w-1/4 border border-gray-400 mx-2">
                    <Input
                        placeholder="Type here..."
                        multiline={true}
                    />
                    <div className="flex justify-between items-center">
                        <Button>
                            <Paperclip size={20} />
                        </Button>
                        <Button>
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ChatScreen;
import { Modal } from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { Paperclip } from "lucide-react";
import { Input, MessageBox } from "react-chat-elements";

interface ChatScreenModalProps {
    isOpen: boolean;
    closeModal: () => void;
}

const ChatScreenModal = ({ isOpen, closeModal }: ChatScreenModalProps) => {

    return (
        <Modal
            title="Message"
            isOpen={isOpen}
            onClose={closeModal}
        >
            <div className="w-full flex flex-col gap-4">
                <MessageBox
                    id="1"
                    position={"right"}
                    type={"text"}
                    title={"Kursat"}
                    text="Why don't we go to "
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
                    text="Why don't we go to the No"
                    date={new Date()}
                    titleColor={"#000"}
                    focus={false}
                    status={"sent"}
                    notch={false}
                    avatar="https://avatars.githubusercontent.com/u/80540635?v=4"
                />
               
            </div>
            <div className="border border-gray-400 mx-2">
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
        </Modal>
    );
};

export default ChatScreenModal;
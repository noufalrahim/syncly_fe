import { Search } from "@/components/Search";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";


const badges = [
    'React JS',
    'Problem Solving',
    'Frontend Development',
];

const NetworkCard = () => {
    return (
        <div className="flex flex-col gap-2 items-center bg-gray-500 p-5 max-w-64 rounded-lg justify-center my-3 text-center">
            <div className="">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div>
                <h1 className="text-white">Name</h1>
                <p className="text-white">Description</p>
            </div>
            <div className="w-full flex flex-row justify-center items-center gap-2 bg-white p-1 rounded-lg cursor-pointer hover:bg-gray-100">
                <MessageCircle size={24} color="black" />
                <p className="text-black">Message</p>
            </div>
            <div className="w-full">
                {badges.map((badge, i) => (
                    <Badge key={i} className="m-1">
                        {badge}
                    </Badge>
                ))}
            </div>
        </div>
    )
};

export default NetworkCard;
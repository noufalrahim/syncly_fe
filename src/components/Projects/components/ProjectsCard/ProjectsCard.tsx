
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ProjectCardsProp } from "./types";
import { Avatar, AvatarImage } from "../../../ui/avatar";
import { Button } from "../../../ui/button";

const ProjectsCard = ({ project }: ProjectCardsProp) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-row">
                <div className="flex -space-x-3">
                    <Avatar className="h-7 w-7">
                        <AvatarImage src="https://randomuser.me/api/portraits/men/83.jpg" />
                    </Avatar>
                    <Avatar className="h-7 w-7">
                        <AvatarImage src="https://randomuser.me/api/portraits/women/5.jpg" />
                    </Avatar>
                    <Avatar className="h-7 w-7">
                        <AvatarImage src="https://randomuser.me/api/portraits/men/79.jpg" />
                    </Avatar>
                </div>
                <div className="flex items-center justify-center h-7 w-7 bg-gray-200 rounded-full">
                    <p>+3</p>
                </div>
            </CardContent>
            <CardFooter className="flex flex-row gap-2">
                <Button className="w-full bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded">
                    View Project
                </Button>
                <Button className="w-full bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded">
                    Request Enrollment
                </Button>
            </CardFooter>
        </Card>
    )
};

export default ProjectsCard;
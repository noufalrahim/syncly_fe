/* eslint-disable react/react-in-jsx-scope */
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

interface GeneralCardProps {
    header: {
        title: string;
        description: string;
        image: string;
        isImageBanner?: boolean;
    };
    children: React.ReactNode;
    buttons?: {
        title: string,
        onClick: () => void,
        className?: string,
    }[],
}

export default function GeneralCard({
    header,
    children,
    buttons,
}: GeneralCardProps) {
    return (
        <Card className="min-h-64 justify-between flex flex-col">
            <CardHeader>
                {
                    header.isImageBanner ?
                        <Avatar className="h-36 w-full rounded-none">
                            <AvatarImage src={header.image} />
                        </Avatar>
                        :
                        <Avatar className="h-20 w-20">
                            <AvatarImage src={header.image} />
                        </Avatar>
                }
                <CardTitle>{header.title}</CardTitle>
                <CardDescription>{header.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-row">
                {children}
            </CardContent>
            <CardFooter className="flex flex-row justify-between">
                {
                    buttons && buttons.length > 0 &&
                    buttons.map((button, index) => (
                        <Button key={index} onClick={button.onClick} className={`${button.className} bg-black hover:bg-gray-700 text-white w-full mx-1`} >{button.title}</Button>
                    ))
                }
            </CardFooter>
        </Card>
    )
}
/* eslint-disable react/react-in-jsx-scope */
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { DisasterCardsProp } from './types';
import { Avatar, AvatarImage } from '../../../ui/avatar';
import { Button } from '../../../ui/button';
import { useNavigate } from 'react-router-dom';
const DisastersCard = ({ disaster }: DisasterCardsProp) => {
  const navigation = useNavigate();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{disaster.disasterType}</CardTitle>
        <CardDescription>{disaster.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col">
        <div className='flex flex-row'>
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
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-200">
            <p>+3</p>
          </div>
        </div>
        <div className="flex flex-row gap-2 mt-5">
          <p className='text-sm font-semibold'>Emergency Contact No: {disaster.emergencyContactNumber}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => navigation(`/disasters/${disaster.id}`)}>View</Button>
      </CardFooter>
    </Card>
  );
};

export default DisastersCard;

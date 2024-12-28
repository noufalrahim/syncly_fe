/* eslint-disable react/react-in-jsx-scope */
import { AppBar } from '../AppBar';
import { DisastersCard } from './components/DisastersCard';
import { LoadingSpinner } from '../LoadingSpinner';
import { useEffect, useState } from 'react';
import { getDisaster } from './api/getDisaster';
import GeneralCard from '../GeneralCard/GeneralCard';

const Disasters = () => {
  const [disastersData, setDisastersData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDisasters = async () => {
      try {
        setLoading(true);
        const fetchDisasters = await getDisaster();
        if (fetchDisasters.status === 200) {
          console.log(fetchDisasters.data);
          setDisastersData(fetchDisasters.data);
        }
      }
      catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }

    fetchDisasters();
  }, [])

  return (
    <div className="mx-5">
      <AppBar title="Disasters" description="View all disaster volunteering opportunities here" />
      {loading ? (
        <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {disastersData && disastersData.map((disaster, index) => (
            <GeneralCard
              key={index}
              header={{
                title: disaster.disasterType,
                description: disaster.description,
                image: disaster.imageUrl,
                isImageBanner: true
              }}
              buttons={[
                {
                  title: 'View',
                  onClick: () => console.log('View')
                },
                {
                  title: 'Request Volunteering',
                  onClick: () => console.log('Request Volunteering')
                }
              ]}
            >
              <></>
            </GeneralCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Disasters;

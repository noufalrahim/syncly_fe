/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { getFeeds } from './api/getFeeds';
import { AppBar } from '../AppBar';

const Feeds = () => {
  const [feeds, setFeeds] = useState<
    Array<{
      id: string;
      title: string;
      description: string;
      image: string;
      author: string;
      date: string;
    }>
  >([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resp = await getFeeds();
        if (resp.status === 200) {
          setFeeds(resp.data);
        }
      } catch (error) {
        console.log('Error fetching feeds', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 px-8 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}

        <div>
          <AppBar title="Feeds" description="Stay connected on the latest updates on your projects here" />
        </div>

        {/* Feeds List */}
        <div className="space-y-8">
          {loading && (
            <div className="flex items-center justify-center">
              <div className="text-lg text-gray-500">Loading feeds...</div>
            </div>
          )}

          {feeds &&
            feeds.map((feed) => (
              <div key={feed.id} className="transform overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                {/* Feed Image */}
                <img src={feed.image} alt={feed.title} className="h-56 w-full rounded-t-lg object-cover" />
                {/* Feed Details */}
                <div className="p-6">
                  <h1 className="text-sm font-medium text-gray-600">{feed.author}</h1>
                  <h3 className="mt-2 text-xl font-semibold text-indigo-800">{feed.title}</h3>
                  <p className="mt-3 text-sm text-gray-700">{feed.description}</p>
                  <p className="mt-4 text-xs text-gray-500">{feed.date}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Feeds;

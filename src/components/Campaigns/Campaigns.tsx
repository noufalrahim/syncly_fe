// Import the Button component
import { AppBar } from "../AppBar";
import { PlusCircleIcon, CreditCardIcon, GiftIcon } from "lucide-react"; // Updated icons
import { useNavigate } from "react-router-dom";
import { Modal } from "../Modal";
import StartCampaigns from "./StartCampaigns";
const trendingCampaigns = [
  {
    id: "1",
    name: "Clean Water for All",
    description:
      "Help provide access to clean and safe drinking water for underprivileged communities worldwide.",
    link: "#",
  },
  {
    id: "2",
    name: "Education for Every Child",
    description:
      "Ensure every child has access to quality education and the resources they need to thrive.",
    link: "#",
  },
  {
    id: "3",
    name: "Green Planet Initiative",
    description:
      "Join us in combating climate change through tree-planting and sustainable practices.",
    link: "#",
  },
];

const Campaigns: React.FC = () => {
  const navigate = useNavigate()
  return (

    <div className="h-full w-full px-5">
      {/* AppBar with buttons */}
      <AppBar
        title="Campaigns"
        description="Welcome to Goals (SDGs), where you can create, manage, and contribute to impactful campaigns."
        buttons={[
          {
            title: "Start a Campaign",
            onClick: () => navigate('/Campaigns/StartCampaigns'),
            icon: <PlusCircleIcon size={18} />, // Icon for starting a campaign
          },
          {
            title: "View Transactions",
            onClick: () => navigate('/Campaigns/ViewTransactions'),
            icon: <CreditCardIcon size={18} />, // Icon for viewing transactions
          },
          {
            title: "Donate Now",
            onClick: () => navigate('/Campaigns/DonateNow'),
            icon: <GiftIcon size={18} />, // Icon for donations
          },
        ]}
      />

      {/* Additional description content */}
      <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-primary-dark">About Campaigns</h2>
        <p className="text-gray-700 mt-2">
          Campaigns are initiatives aimed at solving real-world problems, from education 
          to climate change. You can:
        </p>
        <ul className="list-disc pl-5 mt-2 text-gray-600">
          <li>Start your own campaign to raise awareness or funds for a cause you care about.</li>
          <li>View detailed transactions to track contributions and spending.</li>
          <li>Donate to active campaigns and make a tangible impact today.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Take the first step to drive change. Explore your options and contribute to a 
          sustainable future!
        </p>
      </div>

      {/* Trending Campaigns */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-primary-dark mb-4">
          Trending Campaigns
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingCampaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-white border border-gray-300 rounded-lg shadow-md p-4"
            >
              <h3 className="text-lg font-semibold text-primary-dark">
                {campaign.name}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">{campaign.description}</p>
              <a
                href={campaign.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-[#00df9a] text-white rounded-lg hover:bg-[#00bf85]"
              >
                View More Info
              </a>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={false} onClose={() => {}} title="Start a new campaign">
        <StartCampaigns />
      </Modal>
    </div>
  );
};

export default Campaigns;

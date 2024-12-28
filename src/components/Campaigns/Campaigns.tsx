
import { Button } from '../ui/button';  // Import the Button component

// Define an interface for the sidebar options
interface SidebarOption {
  label: string;
  onClick: () => void;
}

const Campaigns: React.FC = () => {
  // Define the sidebar options with catchy button labels
  const sidebarOptions: SidebarOption[] = [
    { label: '🚀 Start a Campaign', onClick: () => alert('Start a Campaign clicked') },
    { label: '💸 View Transactions', onClick: () => alert('Crowdfunding Transactions clicked') },
    { label: '🎁 Donate Now', onClick: () => alert('Donate for a Campaign clicked') },
  ];

  return (
    <div className="my-5 flex min-h-screen">
      {/* Main Content Area */}
      <div className="flex-1 p-6">
        <div>
          <h1 className="text-3xl font-bold">Campaigns for SDG Projects</h1>
          <p className="text-md italic text-mutedDark mt-2">
            Welcome to the Campaigns section! These campaigns are focused on the Sustainable Development Goals (SDGs),
            where we connect volunteers with the right skills to projects that need support.
          </p>
          <p className="text-md italic text-mutedDark mt-2">
            Whether you want to launch a campaign to fund a project, track ongoing fundraising activities, or donate to a cause
            that needs your help, you've come to the right place! These projects aim to solve global challenges while empowering
            people like you to get involved and make a difference.
          </p>
          <ul className="mt-4 space-y-4 text-sm italic text-mutedDark">
            <li>🚀 <strong>Start a Campaign</strong> - Start a campaign for an SDG project, rally volunteers, and fund a cause that’s making a real impact!</li>
            <li>💸 <strong>View Transactions</strong> - Monitor how funds are flowing into SDG projects and see how contributions are supporting sustainable development.</li>
            <li>🎁 <strong>Donate Now</strong> - Support SDG projects by contributing your resources to campaigns that are working towards building a better future.</li>
          </ul>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-1/4 bg-white shadow-lg border-l border-gray-200 p-6">
        <h2 className="font-bold text-xl text-gray-800 mb-4">Campaign Options</h2>
        <ul className="space-y-4">
          {sidebarOptions.map((option, index) => (
            <li key={index}>
              <Button
                onClick={option.onClick}
                className="w-full flex items-center justify-between gap-2 rounded-md bg-black px-4 py-2 text-white hover:bg-gray-500 transition duration-200"
              >
                <span className="text-lg font-medium">{option.label}</span>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Campaigns;


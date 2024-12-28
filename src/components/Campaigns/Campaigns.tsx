import { Button } from '../ui/button'; // Import the Button component

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
    <div className="my-6 flex min-h-screen">
      {/* Main Content Area */}
      <div className="flex-1 bg-gray-50 p-8">
        <div>
          <h1 className="text-primary-dark text-4xl font-extrabold">Campaigns for SDG Projects</h1>
          <p className="mt-4 text-lg text-gray-600">Welcome to the Campaigns section! These campaigns focus on the Sustainable Development Goals (SDGs), where we connect volunteers with the right skills to projects that need support.</p>
          <p className="mt-4 text-lg text-gray-600">Whether you want to launch a campaign to fund a project, track ongoing fundraising activities, or donate to a cause, you've come to the right place! These projects aim to solve global challenges while empowering people like you to make a difference.</p>
          <ul className="mt-6 space-y-4 text-md text-gray-600">
            <li>
              🚀 <strong>Start a Campaign</strong> - Rally volunteers and fund causes making an impact!
            </li>
            <li>
              💸 <strong>View Transactions</strong> - Monitor funds flowing into SDG projects and support sustainable development.
            </li>
            <li>
              🎁 <strong>Donate Now</strong> - Contribute your resources to projects aiming to build a better future.
            </li>
          </ul>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-1/3 rounded-lg border-l border-gray-200 bg-white p-8 shadow-xl">
        <h2 className="text-primary-dark mb-6 text-2xl font-semibold">Campaign Options</h2>
        <ul className="space-y-6">
          {sidebarOptions.map((option, index) => (
            <li key={index}>
              <Button onClick={option.onClick} className="hover:bg-primary-light flex w-full items-center justify-between gap-3 rounded-lg bg-primary-dark px-6 py-3 text-white transition duration-200">
                <span className="text-lg font-semibold">{option.label}</span>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Campaigns;

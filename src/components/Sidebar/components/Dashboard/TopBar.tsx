import { FaChartBar } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
      <div className="flex items-start justify-between p-0.5">
        <div>
          <span className="text-sm font-bold block">Welcome, Admin!</span>
          <span className="text-xs block text-stone-500">Monday, Dec 24th 2024</span>
        </div>
        <button className="flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-violet-100 hover:text-violet-700 px-3 py-1.5 rounded">
          <FaChartBar />
          <span>View Your Performance</span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;

/* eslint-disable react/react-in-jsx-scope */
import Single from '../../../public/single.png';
import Double from '../../../public/double.png';
import Triple from '../../../public/triple.png';

const Cards = () => {
  return (
    <div className="w-full bg-white px-4 py-[10rem]">
      <div className="mx-auto grid max-w-[1240px] gap-8 md:grid-cols-3">
        <div className="my-4 flex w-full flex-col rounded-lg p-4 shadow-xl duration-300 hover:scale-105">
          <h2 className="py-8 text-center text-2xl font-bold">AI Matching</h2>
          <p className="text-center text-lg font-medium">Connect professionals and volunteers to SDG projects through tailored, skill-based matching.</p>
        </div>
        <div className="my-8 flex w-full flex-col rounded-lg bg-gray-100 p-4 shadow-xl duration-300 hover:scale-105 md:my-0">
          <h2 className="py-8 text-center text-2xl font-bold">Skill Development</h2>
          <p className="text-center text-lg font-medium">Build expertise through our Learning Management System (LMS) designed for global professionals.</p>
        </div>
        <div className="my-4 flex w-full flex-col rounded-lg p-4 shadow-xl duration-300 hover:scale-105">
          <h2 className="py-8 text-center text-2xl font-bold">Crowdsourced Funding</h2>
          <p className="text-center text-lg font-medium">Support SDG projects financially via PayPal/Stripe-enabled crowdfunding.</p>
          <img className="mx-auto mt-[-3rem] w-20 bg-white" src={Single} alt="/" />
          <h2 className="py-8 text-center text-2xl font-bold">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="mx-8 mt-8 border-b py-2">500 GB Storage</p>
            <p className="mx-8 border-b py-2">1 Granted User</p>
            <p className="mx-8 border-b py-2">Send up to 2 GB</p>
          </div>
          <button className="mx-auto my-6 w-[200px] rounded-md bg-[#00df9a] px-6 py-3 font-medium">Start Trial</button>
        </div>
        <div className="my-8 flex w-full flex-col rounded-lg bg-gray-100 p-4 shadow-xl duration-300 hover:scale-105 md:my-0">
          <img className="mx-auto mt-[-3rem] w-20 bg-transparent" src={Double} alt="/" />
          <h2 className="py-8 text-center text-2xl font-bold">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="mx-8 mt-8 border-b py-2">500 GB Storage</p>
            <p className="mx-8 border-b py-2">1 Granted User</p>
            <p className="mx-8 border-b py-2">Send up to 2 GB</p>
          </div>
          <button className="mx-auto my-6 w-[200px] rounded-md bg-black px-6 py-3 font-medium text-[#00df9a]">Start Trial</button>
        </div>
        <div className="my-4 flex w-full flex-col rounded-lg p-4 shadow-xl duration-300 hover:scale-105">
          <img className="mx-auto mt-[-3rem] w-20 bg-white" src={Triple} alt="/" />
          <h2 className="py-8 text-center text-2xl font-bold">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="mx-8 mt-8 border-b py-2">500 GB Storage</p>
            <p className="mx-8 border-b py-2">1 Granted User</p>
            <p className="mx-8 border-b py-2">Send up to 2 GB</p>
          </div>
          <button className="mx-auto my-6 w-[200px] rounded-md bg-[#00df9a] px-6 py-3 font-medium">Start Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

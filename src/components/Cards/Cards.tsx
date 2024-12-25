/* eslint-disable react/react-in-jsx-scope */

const Cards = () => {
  return (
    <div className="w-full bg-white px-4 py-[10rem]">
      <h1 className="mb-10 text-center text-4xl font-bold">Our Services</h1>
      <div className="mx-auto grid max-w-[1240px] gap-8 md:grid-cols-3">
        <div className="my-4 flex min-h-[25rem] w-full flex-col items-center justify-center rounded-lg bg-appPrimary p-4 shadow-xl duration-300 hover:scale-105">
          <h2 className="py-8 text-center text-2xl font-bold">AI Matching</h2>
          <p className="text-center text-lg font-medium">Connect professionals and volunteers to SDG projects through tailored, skill-based matching.</p>
        </div>
        <div className="my-4 flex min-h-[25rem] w-full flex-col items-center justify-center rounded-lg bg-appPrimary p-4 shadow-xl duration-300 hover:scale-105">
          <h2 className="py-8 text-center text-2xl font-bold">Skill Development</h2>
          <p className="text-center text-lg font-medium">Build expertise through our Learning Management System (LMS) designed for global professionals.</p>
        </div>
        <div className="my-4 flex min-h-[25rem] w-full flex-col items-center justify-center rounded-lg bg-appPrimary p-4 shadow-xl duration-300 hover:scale-105">
          <h2 className="py-8 text-center text-2xl font-bold">Crowdsourced Funding</h2>
          <p className="text-center text-lg font-medium">Support SDG projects financially via PayPal/Stripe-enabled crowdfunding.</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;

/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  return (
    <div className="text-white">
      <div className="mx-auto mt-[-96px] flex h-screen w-full max-w-[800px] flex-col justify-center text-center">
        <p className="p-2 font-bold text-[#00df9a]">ADVANCING SDG COLLABORATION</p>
        <h1 className="text-4xl font-bold sm:text-6xl md:py-6 md:text-7xl">Global Impact Starts Here</h1>
        <p className="py-4 text-xl font-bold text-gray-500 md:text-2xl">Empowering professionals, volunteers, and organizations to drive SDG achievements.</p>
        <button className="mx-auto my-6 w-[200px] rounded-md bg-[#00df9a] py-3 font-medium text-black" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;

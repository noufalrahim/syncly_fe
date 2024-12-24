/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="mx-auto flex h-24 max-w-[1240px] items-center justify-between px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">SustainLink</h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer">Home</li>
        <li className="p-4 cursor-pointer">LogIn</li>
        <li className="p-4 cursor-pointer">SignUp</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] duration-500 ease-in-out' : 'fixed left-[-100%] duration-500 ease-in-out'}>
        <h1 className="m-4 w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <li className="border-b border-gray-600 p-4 cursor-pointer">Home</li>
        <li className="p-4 cursor-pointer">LogIn</li>
        <li className="p-4 cursor-pointer">SignUp</li>
      </ul>
    </div>
  );
};

export default Navbar;

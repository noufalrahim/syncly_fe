/* eslint-disable react/react-in-jsx-scope */
import { Navbar } from '../Navbar';

const Signup = () => {
  return (
    <>
      <Navbar className="bg-black" />
      <div className="flex h-screen items-center justify-center bg-black">
        <div className="w-[400px] rounded-lg bg-white p-8 shadow-lg">
          <h2 className="text-primary-dark mb-4 text-center text-2xl font-bold">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label className="text-secondary-dark block text-sm font-medium">Name</label>
              <input type="text" className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark" placeholder="Enter your name" />
            </div>
            <div className="mb-4">
              <label className="text-secondary-dark block text-sm font-medium">Email</label>
              <input type="email" className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <label className="text-secondary-dark block text-sm font-medium">Password</label>
              <input type="password" className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark" placeholder="Enter your password" />
            </div>
            <button type="submit" className="w-full rounded-lg bg-[#00df9a] py-2 text-white hover:bg-[#00bf85] focus:outline-none">
              Sign Up
            </button>
          </form>
          <p className="text-secondary-dark mt-4 text-center text-sm">
            Already have an account?{' '}
            <a href="/login" className="text-[#00df9a] underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;

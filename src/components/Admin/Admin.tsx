/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';
import { LoadingSpinner } from '../LoadingSpinner';

const AdminLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLoginForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating a login process for admin
    setTimeout(() => {
      setIsLoading(false);
      alert('Admin login submitted');
    }, 1000);
  };

  return (
    <>
      <div className="flex h-[calc(100vh)] items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="w-[380px] rounded-xl bg-white/10 p-8 shadow-2xl backdrop-blur-md">
          <h2 className="mb-6 text-center text-3xl font-extrabold tracking-tight text-gray-100">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label htmlFor="username" className="mb-2 block text-sm font-medium text-gray-300">
                Admin Username
              </label>
              <Input id="username" type="text" placeholder="Enter admin username" value={loginForm.username} onChange={handleInputChange} className="rounded-lg border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:border-[#00df9a] focus:ring-[#00df9a]" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-300">
                Admin Password
              </label>
              <Input id="password" type="password" placeholder="Enter admin password" value={loginForm.password} onChange={handleInputChange} className="rounded-lg border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:border-[#00df9a] focus:ring-[#00df9a]" />
            </div>
            <Button type="submit" className="flex w-full items-center justify-center rounded-lg bg-[#00df9a] py-3 text-lg font-medium text-black transition-all hover:bg-[#00bf85] focus:ring focus:ring-[#00df9a]/50">
              {isLoading ? <LoadingSpinner /> : 'Login'}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;

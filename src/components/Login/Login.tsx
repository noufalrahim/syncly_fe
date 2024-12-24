/* eslint-disable react/react-in-jsx-scope */
import { Navbar } from '../Navbar';
import { useState } from 'react';
import { postLogin } from './api/Login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from '../LoadingSpinner';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await postLogin(loginForm);

      if (response.status === 204) {
        console.log('Login failed');
      } else if (response.status === 200) {
        dispatch({
          type: 'auth/user',
          payload: {
            _id: response.data.data._id,
            username: response.data.data.username,
            name: response.data.data.name,
            image: response.data.data.image,
          },
        });
        navigate('/dashboard');
      }
      setIsLoading(false);
    } catch (error) {
      console.log('Login failed', error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar className="bg-black" />
      <div className="flex h-screen items-center justify-center bg-black">
        <div className="w-[400px] rounded-lg bg-white p-8 shadow-lg">
          <h2 className="text-primary-dark mb-4 text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="username" className="text-secondary-dark block text-sm font-medium">
                Username
              </label>
              <input id="username" type="text" className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark" placeholder="Enter your username" value={loginForm.username} onChange={handleInputChange} />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-secondary-dark block text-sm font-medium">
                Password
              </label>
              <input id="password" type="password" className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark" placeholder="Enter your password" value={loginForm.password} onChange={handleInputChange} />
            </div>
            <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-[#00df9a] py-2 text-center text-white hover:bg-[#00bf85] focus:outline-none">
              {isLoading ? <LoadingSpinner /> : 'Login'}
            </button>
          </form>
          <p className="text-secondary-dark mt-4 text-center text-sm">
            Don’t have an account?{' '}
            <a href="/signup" className="text-[#00df9a] underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

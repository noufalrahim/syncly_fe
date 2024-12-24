import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Navbar } from "../Navbar";
import { useState } from "react";
import { postLogin } from "./api/Login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../LoadingSpinner";
const Login = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);


  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e: { target: { id: any; value: any; }; }) => {
    const { id, value } = e.target;
    setLoginForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const response = await postLogin(loginForm);
      if (response.status === 204) {
        console.log("Login failed");
      }
      else if (response.status === 200) {
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
    }
    catch (error) {
      console.log("Login failed", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        <Tabs defaultValue="account" className="w-[400px] border border-gray-300 p-2 rounded-md">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">SignIn</TabsTrigger>
            <TabsTrigger value="password">SignUp</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>SustainLink</CardTitle>
                <CardDescription>Login to your account</CardDescription>
              </CardHeader>
              <form onSubmit={(e) => e.preventDefault()}>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      value={loginForm.username}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={loginForm.password}
                      onChange={handleInputChange}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="bg-black hover:bg-gray-800 text-white w-full"
                    onClick={handleLogin}
                  >
                    {isLoading ? <LoadingSpinner /> : 'Login'}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            {/* Add SignUp form here if needed */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { Navbar } from "../Navbar";
import axios from "axios";
import { BASE_URL } from "@/constants";
import { postUser } from "./api/postUser";

const Signup = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const image = "https://randomuser.me/api/portraits/men/83.jpg";
  
  const [primarySkills, setPrimarySkills] = useState<string[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      name,
      username,
      password,
      image,
      skills: selectedSkills.map((skill: { _id: string; title: string }) => {
        return {
          skillId: skill._id,
          skillName: skill.title
        };
      })
    };
    console.log("Form submitted:", formData);

    const postResp = await postUser(formData);
    console.log(postResp);
    
  };

  React.useEffect(() => {
    const fetchSkills = async () => {
      const response = await axios.get(`${BASE_URL}/skills`);
      console.log(response.data.data);
      if (response.status === 200) {
        setPrimarySkills(response.data.data);
      }
      
    };
    fetchSkills();
  }, [])

  return (
    <>
      <Navbar className="bg-white" />
      <div className="flex h-screen items-center justify-center bg-white">
        <div className="w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg border border-gray-600">
          <h2 className="text-primary-dark mb-4 text-center text-2xl font-bold">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            {/* Basic Information Tab */}
            {currentTab === 0 && (
              <div className="mb-4 flex gap-2 flex-col">
                <label className="text-secondary-dark block text-sm font-medium">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark"
                  placeholder="Enter your name"
                  required
                />
                <label className="text-secondary-dark block text-sm font-medium">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark"
                  placeholder="Enter your username"
                  required
                />
              </div>
            )}
            {currentTab === 0 && (
              <div className="mb-4">
                <label className="text-secondary-dark block text-sm font-medium">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark"
                  placeholder="Enter your password"
                  required
                />
              </div>
            )}

            {/* Primary Skills Tab */}
            {currentTab === 1 && (
              <div className="mb-4">
                <h3 className="text-primary-dark mb-2 text-lg font-bold">Choose Your Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-2">
                  {primarySkills.map((skill) => (
                    <button
                      key={skill._id}
                      type="button"
                      onClick={() =>
                        setSelectedSkills((prev) =>
                          prev.includes(skill)
                            ? prev.filter((s) => s !== skill)
                            : [...prev, skill]
                        )
                      }
                      className={`py-2 text-sm font-semibold px-2 text-center rounded-lg transition duration-300 ease-in-out ${selectedSkills.includes(skill)
                        ? "bg-[#00df9a] text-white shadow-lg transform scale-105"
                        : "bg-gray-300 text-black hover:bg-gray-400"
                        }`}
                    >
                      {skill.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-between mt-6">
              {currentTab > 0 && (
                <button
                  type="button"
                  onClick={() => setCurrentTab((prev) => prev - 1)}
                  className="px-4 py-2 rounded-lg bg-[#00df9a] text-white hover:bg-[#00bf85]"
                >
                  Previous
                </button>
              )}
              {currentTab < 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentTab((prev) => prev + 1)}
                  className="px-4 py-2 rounded-lg bg-[#00df9a] text-white hover:bg-[#00bf85]"
                >
                  Next
                </button>
              )}
              {currentTab === 1 && (
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#00df9a] text-white hover:bg-[#00bf85]"
                >
                  Sign Up
                </button>
              )}
            </div>
          </form>
          <p className="text-secondary-dark mt-4 text-center text-sm">
            Already have an account?{" "}
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
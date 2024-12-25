/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';

const ProjectDescription = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const requests = [
    {
      name: 'John Doe',
      username: 'johndoe',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      skills: ['Plumbing', 'Construction'],
      projects: ['Clean Water Project', 'Solar Panel Initiative'],
    },
    {
      name: 'Jane Smith',
      username: 'janesmith',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      skills: ['Community Outreach', 'Teaching'],
      projects: ['School Improvement Drive', 'Health Awareness Program'],
    },
  ];

  const documents = [
    { title: 'Project Plan', img: 'https://via.placeholder.com/150' },
    { title: 'Budget Breakdown', img: 'https://via.placeholder.com/150' },
    { title: 'Volunteer Guidelines', img: 'https://via.placeholder.com/150' },
  ];

  const totalReceived = 5000;
  const totalRequested = 10000;

  const handleApprove = (user: any) => {
    alert(`Approved ${user.name}`);
  };

  const handleDecline = (user: any) => {
    alert(`Declined ${user.name}`);
  };

  const handleView = (user: any) => {
    alert(`Viewing details for ${user.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header Section */}
      <div className="mb-8 flex items-center justify-between">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800">SDG Volunteering Project</h1>

        {/* Funding Section */}
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-lg text-gray-600">Total Received: ${totalReceived}</p>
            <p className="text-lg text-gray-600">Total Requested: ${totalRequested}</p>
          </div>
          <button className="rounded-md bg-green-500 px-4 py-2 text-white shadow-md hover:bg-green-600">Donate</button>
        </div>
      </div>

      {/* Tabs Section */}
      <div>
        {/* Tabs Navigation */}
        <div className="flex border-b border-gray-300">
          <button className={`px-6 py-2 text-lg font-medium ${activeTab === 'overview' ? 'border-b-4 border-green-500 text-green-600' : 'text-gray-600'}`} onClick={() => setActiveTab('overview')}>
            Overview
          </button>
          <button className={`px-6 py-2 text-lg font-medium ${activeTab === 'faqs' ? 'border-b-4 border-green-500 text-green-600' : 'text-gray-600'}`} onClick={() => setActiveTab('faqs')}>
            FAQs
          </button>
          <button className={`px-6 py-2 text-lg font-medium ${activeTab === 'requests' ? 'border-b-4 border-green-500 text-green-600' : 'text-gray-600'}`} onClick={() => setActiveTab('requests')}>
            Requests
          </button>
          {/* New Resources Tab */}
          <button className={`px-6 py-2 text-lg font-medium ${activeTab === 'resources' ? 'border-b-4 border-green-500 text-green-600' : 'text-gray-600'}`} onClick={() => setActiveTab('resources')}>
            Resources
          </button>
        </div>

        {/* Tabs Content */}
        <div className="mt-6">
          {/* Overview Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-10">
              {/* Project Overview */}
              <div>
                <h2 className="mb-4 text-3xl font-semibold text-gray-800">Project Overview</h2>
                <p className="text-gray-600">
                  This project focuses on providing clean water access to underprivileged communities in rural areas. Volunteers will work on-site to build wells, install water purification systems, and conduct community awareness sessions.
                  <br />
                  <br />
                  Our goal is to create lasting change in the lives of those who are often overlooked, with a focus on sustainability and long-term impact. Volunteers will gain hands-on experience and contribute to the fulfillment of the United Nations&apos; SDGs.
                </p>
              </div>

              {/* Skills Required */}
              <div>
                <h2 className="mb-4 text-3xl font-semibold text-gray-800">Skills Required</h2>
                <ul className="list-inside list-disc space-y-2 text-gray-600">
                  <li>Basic plumbing and construction skills</li>
                  <li>Strong communication skills for community outreach</li>
                  <li>Teamwork and adaptability in rural settings</li>
                  <li>Leadership and project management abilities</li>
                  <li>Problem-solving skills for on-site challenges</li>
                  <li>Physical stamina and commitment to the project</li>
                </ul>
              </div>

              {/* Timeline and Location */}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <h2 className="mb-2 text-2xl font-semibold text-gray-800">Project Timeline</h2>
                  <p className="text-gray-600">April 15, 2024 - June 30, 2024</p>
                </div>
                <div>
                  <h2 className="mb-2 text-2xl font-semibold text-gray-800">Location</h2>
                  <p className="text-gray-600">Village Name, Country (On-Site)</p>
                </div>
              </div>

              {/* Posted By */}
              <div className="flex items-center space-x-6">
                <img src="https://randomuser.me/api/portraits/men/5.jpg" alt="Admin" className="h-20 w-20 rounded-full object-cover" />
                <div>
                  <h2 className="text-3xl font-semibold text-gray-800">Posted By</h2>
                  <p className="text-gray-600">Green Earth Organization</p>
                  <p className="text-sm text-gray-600">Admin: John Doe (Project Manager)</p>
                </div>
              </div>

              {/* Additional Details */}
              <div>
                <h2 className="mb-4 text-3xl font-semibold text-gray-800">Additional Details</h2>
                <p className="text-gray-600">Volunteers will be provided with accommodation and meals during the project duration. Transportation to and from the project site will also be arranged. Volunteers are expected to undergo a training program before embarking on the project to ensure safety and project success. After completing the project, all volunteers will receive a certificate recognizing their contribution to global sustainability efforts.</p>
              </div>
            </div>
          )}

          {/* FAQs Tab Content */}
          {activeTab === 'faqs' && (
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Do I need to pay to volunteer?</h3>
                  <p className="text-gray-600">No, all accommodation, meals, and transport costs will be covered by the Green Earth Organization.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">What is the application process?</h3>
                  <p className="text-gray-600">Simply click on the &quot;Apply Now&quot; button, fill out the form, and submit your application. Our team will review it and contact you for further steps.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Can I volunteer if I have no prior experience?</h3>
                  <p className="text-gray-600">Yes! No prior experience is required. We&apos;ll provide training to help you get prepared for the project.</p>
                </div>
              </div>
            </div>
          )}

          {/* Requests Tab Content */}
          {activeTab === 'requests' && (
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">Volunteer Requests</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {requests.map((request, index) => (
                  <div key={index} className="rounded-md border border-gray-200 bg-white p-4 shadow-md">
                    {/* User Image */}
                    <img src={request.image} alt={request.name} className="mb-4 h-16 w-16 rounded-full object-cover" />

                    {/* User Info */}
                    <h3 className="text-lg font-semibold text-gray-800">{request.name}</h3>
                    <p className="text-sm text-gray-600">@{request.username}</p>
                    <p className="mt-2 text-sm text-gray-600">
                      <strong>Skills:</strong> {request.skills.join(', ')}
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      <strong>Previous Projects:</strong> {request.projects.join(', ')}
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-4 flex space-x-2">
                      <button onClick={() => handleApprove(request)} className="rounded-md bg-green-500 px-4 py-2 text-sm text-white hover:bg-green-600">
                        Approve
                      </button>
                      <button onClick={() => handleDecline(request)} className="rounded-md bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600">
                        Decline
                      </button>
                      <button onClick={() => handleView(request)} className="rounded-md bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600">
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Resources Tab Content */}
          {activeTab === 'resources' && (
            <div>
              <div className="mb-6">
                {/* Wrap button in a div with flex and justify-between */}
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-gray-800">Videos</h2>
                  <button className="rounded-md bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-600">Create</button>
                </div>
                <div className="space-y-4">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Example YouTube video
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  {/* Add more videos here */}
                </div>
              </div>

              {/* Documents Section */}
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-gray-800">Documents</h2>
                <button className="rounded-md bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-600">Upload</button>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {documents.map((doc, index) => (
                  <div key={index} className="rounded-md border border-gray-200 bg-white p-4 shadow-md">
                    <img src={doc.img} alt={doc.title} className="mb-4 h-24 w-full object-cover" />
                    <h3 className="text-lg font-semibold text-gray-800">{doc.title}</h3>
                    <button className="mt-2 rounded-md bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600">View</button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;

/* eslint-disable react/react-in-jsx-scope */
// import React, { useState } from 'react';
// import { Grid, Card, CardContent, CardActions, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Chip, Stack, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

import { AppBar } from "@/components/AppBar";
import GeneralCard from "@/components/GeneralCard/GeneralCard";
import { useState } from "react";

interface Request {
  id: string;
  licenseNumber: string;
  name: string;
  website: string;
  feature: string;
  registrationLink: string;
  verificationWebsite: string;
  featuredLinks: string[];
  image: string,
}

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#4A90E2',
//     },
//     secondary: {
//       main: '#50E3C2',
//     },
//     error: {
//       main: '#FF6F61',
//     },
//     background: {
//       default: '#F7F9FC',
//       paper: '#FFFFFF',
//     },
//     text: {
//       primary: '#333333',
//       secondary: '#666666',
//     },
//   },
//   typography: {
//     fontFamily: "'Roboto', 'Arial', sans-serif",
//   },
// });

const Requests: React.FC = () => {
  const [requests] = useState<Request[]>([
    {
      id: 'ORG-A001',
      licenseNumber: 'LIC-123456',
      name: 'Organization A',
      website: 'https://org-a.com',
      feature: 'Education',
      registrationLink: 'https://org-a.com/registration',
      verificationWebsite: 'https://reg-verification.com/org-a',
      featuredLinks: ['https://news-site.com/org-a-feature', 'https://blog.com/org-a-interview'],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_UNESCO.svg/220px-Flag_of_UNESCO.svg.png"
    },
    {
      id: 'ORG-B002',
      licenseNumber: 'LIC-789012',
      name: 'Organization B',
      website: 'https://org-b.com',
      feature: 'Health',
      registrationLink: 'https://org-b.com/registration',
      verificationWebsite: 'https://reg-verification.com/org-b',
      featuredLinks: ['https://media-site.com/org-b-health-feature'],
      image: "https://www.un.org/youthenvoy/wp-content/uploads/2014/09/unicef_twitter1.png"
    },
    {
      id: 'ORG-C003',
      licenseNumber: 'LIC-345678',
      name: 'Organization C',
      website: 'https://org-c.com',
      feature: 'Environment',
      registrationLink: 'https://org-c.com/registration',
      verificationWebsite: 'https://reg-verification.com/org-c',
      featuredLinks: ['https://environment-site.com/org-c-feature'],
      image: "https://logos-world.net/wp-content/uploads/2020/11/World-Wide-Fund-for-Nature-Logo-700x394.png"
    },
  ]);
  return (
    <div className="mx-5">
      <AppBar title="Requets" description="Manage all requests here" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {
          requests.map((item, index) => (
            <GeneralCard
              key={index}
              header={{
                title: item.name,
                description: item.licenseNumber,
                image: item.image,
                isImageBanner: true
              }}
              buttons={[
                {
                  title: 'View',
                  onClick: () => console.log('View')
                },
                {
                  title: 'Verify',
                  onClick: () => console.log('Verify')
                }
              ]}
            >
              <div className="flex flex-col">
                <p className="flex gap-2">
                  <strong>Website:</strong> <a href={item.website}>{item.website}</a>
                </p>
                <p className="flex gap-2">
                  <strong>Feature:</strong> {item.feature}
                </p>
                <p className="flex gap-2">
                  <strong>Registration Link:</strong>
                  <a href={item.registrationLink}>{item.registrationLink}</a>
                </p>
                <p className="flex gap-2">
                  <strong>licenseNumber:</strong> {item.licenseNumber}
                </p>
                {
                  item.featuredLinks.map((link, index) => (
                    <p key={index} className="flex gap-2">
                      <strong>Featured Link:</strong>
                      <a href={link}>{link}</a>
                    </p>
                  ))
                }
              </div>
            </GeneralCard>
          ))
        }
      </div>
    </div>
  );
};

export default Requests;

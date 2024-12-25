import React from 'react';
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="mx-auto grid max-w-[1240px] gap-8 px-4 py-16 text-gray-300 lg:grid-cols-3">
      {/* First Column: About SustainLink */}
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">SustainLink</h1>
        <p className="py-4 text-sm">SustainLink is an innovative platform designed to accelerate the achievement of the United Nations Sustainable Development Goals (SDGs) by connecting skilled professionals, volunteers, and impactful projects globally. Using AI-driven algorithms, SustainLink matches volunteers to SDG projects based on expertise and interests, fostering global collaboration.</p>
        <div className="my-6 flex justify-between md:w-[75%]">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>

      {/* Second Column: Solutions */}
      <div>
        <h6 className="font-medium text-gray-400">Solutions</h6>
        <ul>
          <li className="py-2 text-sm">AI-Driven Skill Matching</li>
          <li className="py-2 text-sm">Real-Time Collaboration Tools</li>
          <li className="py-2 text-sm">Global Resource Pool</li>
          <li className="py-2 text-sm">Impact Tracking & Analytics</li>
          <li className="py-2 text-sm">Skill Development Hub</li>
          <li className="py-2 text-sm">Crowdsourced Funding</li>
        </ul>
      </div>

      {/* Third Column: SDG Alignment & Legal */}
      <div>
        <h6 className="font-medium text-gray-400">SDG Alignment</h6>
        <ul>
          <li className="py-2 text-sm">SDG 8 – Decent Work & Economic Growth</li>
          <li className="py-2 text-sm">SDG 9 – Industry, Innovation & Infrastructure</li>
          <li className="py-2 text-sm">SDG 17 – Partnerships for the Goals</li>
        </ul>
        <h6 className="mt-6 font-medium text-gray-400">Legal</h6>
        <ul>
          <li className="py-2 text-sm">Privacy Policy</li>
          <li className="py-2 text-sm">Terms of Service</li>
          <li className="py-2 text-sm">Cookie Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

'use client';

import { link } from 'framer-motion/client';
import img1 from '../assets/joha.png';
import React from 'react';
const styles = `
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
    opacity: 0;
  }
`;
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

const teamMembers = [
  {
    name: 'Khaled Bin Joha',
    role: 'Project Lead',
    imageUrl: img1,
    githubUrl: 'https://github.com/joha546',
    linkedinUrl: 'https://www.linkedin.com/in/mdkhaledbinjoha/',
    facebookUrl: '#',


  },
  {
    name: 'Abdullah All Moneem',
    role: 'Software Engineer',
    imageUrl: 'https://i.pinimg.com/736x/8c/6d/db/8c6ddb5fe6600fcc4b183cb2ee228eb7.jpg',
    githubUrl: 'https://github.com/Moneemabdullah',
    linkedinUrl: 'https://www.linkedin.com/in/moneem-all-abdullah-4b07a9288/',
    facebookUrl: '#',


  },
  {
    name: 'Md Rifat Hossain',
    role: 'Full Stack Developer',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQE3mU5cZu9Ogg/profile-displayphoto-crop_800_800/B56ZhcGGSdHQAU-/0/1753891759988?e=1758758400&v=beta&t=4gv4lQftseSI5d2SPB6vKaf5IbYNI6JTnoGRLnXo8WY',
    githubUrl: 'https://github.com/rifatbroh',
    linkedinUrl: 'https://www.linkedin.com/in/rifat-hossain-6b21741b3/',
    facebookUrl: '#',


  },
  {
    name: 'Sirat Ahmed',
    role: 'Frontend Developer',
    imageUrl: 'https://i.pinimg.com/1200x/c2/4e/27/c24e271f2f992fd7e62e8c1e8d9b3e2f.jpg',
    githubUrl: 'https://github.com/sirat2001',
    linkedinUrl: 'https://www.linkedin.com/in/sirat-ahmed-94b298353/',
    facebookUrl: '#',


  },
];

// GitHub Icon
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38
    0-.19-.01-.82-.01-1.49-2 .37-2.69-.49-2.85-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
    0-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
    0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09
    2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15
    0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48
    0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.001 8.001 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

// LinkedIn Icon
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 1.146C0 .513.526 0 1.175 
    0h13.65C15.474 0 16 .513 16 1.146v13.708c0 
    .633-.526 1.146-1.175 1.146H1.175C.526 
    16 0 15.487 0 14.854V1.146zM4.943 
    13.5V6H2.542v7.5h2.401zM3.742 
    5.06c.837 0 1.356-.554 1.356-1.248-.015-.709-.52-1.248-1.342-1.248-.822 
    0-1.356.54-1.356 1.248 0 
    .694.519 1.248 1.326 1.248h.016zm4.709 
    8.44V9.359c0-.221.016-.442.081-.599.178-.441.585-.898 
    1.268-.898.894 0 1.25.678 1.25 
    1.671V13.5h2.401V9.25c0-2.27-1.214-3.326-2.835-3.326-1.311 
    0-1.888.728-2.212 1.239h.016V6h-2.4c.03.728 
    0 7.5 0 7.5h2.401z"/>
  </svg>
);

// Facebook Icon
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 
    0 0 3.603 0 8.05c0 4.017 2.926 7.347 
    6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 
    1.195-3.131 3.022-3.131.876 0 
    1.791.157 1.791.157v1.98h-1.009c-.993 
    0-1.303.621-1.303 1.258v1.51h2.218l-.354 
    2.326H11.25V16c3.824-.604 6.75-3.934 
    6.75-7.951z"/>
  </svg>
);

const TeamMemberCard = ({ member }) => {
  return (
    <div className="group flex flex-col items-center text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-xl dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40 transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:-translate-y-1">
      <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        <img
          className="relative w-full h-full rounded-full object-cover ring-4 ring-white dark:ring-gray-800 group-hover:ring-gray-100 dark:group-hover:ring-gray-700 transition-all duration-300"
          src={member.imageUrl}
          alt={`Portrait of ${member.name}`}
          onError={(e) => {
            const target = e.target;
            target.onerror = null;
            target.src = `https://placehold.co/200x200/E2E8F0/4A5568?text=${member.name
              .split(' ')
              .map((n) => n[0])
              .join('')}`;
          }}
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {member.name}
      </h3>
      <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4 px-3 py-1 bg-gray-50 dark:bg-gray-800 rounded-full">
        {member.role}
      </p>
      <div className="flex space-x-3">
        <a
          href={member.githubUrl}
          target="_blank"
          rel="noopener noreferrer"

          className="p-2 text-gray-400 hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-900 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
          aria-label={`${member.name}'s GitHub profile`}
        >
          <GitHubIcon />
        </a>
        <a
          href={member.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-400 hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-blue-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
          aria-label={`${member.name}'s LinkedIn profile`}
        >
          <LinkedInIcon />
        </a>
        <a
          href={member.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-400 hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
          aria-label={`${member.name}'s Facebook profile`}
        >
          <FacebookIcon />
        </a>
      </div>
    </div>
  );
};

const TeamMemberSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-black dark:via-gray-900 dark:to-black font-sans transition-colors overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:20px_20px]"></div>

      <div className="relative w-full px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="w-full text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            Meet New_Folder
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent mb-6">
            Our Exceptional Team
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Meet our outstanding team - a synergy of talent, creativity, and dedication, crafting
            success together with passion and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 w-full">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMemberSection;

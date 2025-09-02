"use client";

import { Tabs } from "../Components/ui/Tabs";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

export function TabsDemo() {
  const tabs = [
    {
      title: "Admin",
      value: "Admin",
      content: <TabContent title="Admin Section" image={img2} />,
    },
    {
      title: "Home",
      value: "Home",
      content: <TabContent title="Hero Section" image={img1} />,
    },
    {
      title: "Doctors",
      value: "Doctors",
      content: <TabContent title="Doctors Section" image={img3} />,
    },
    {
      title: "Vaccine",
      value: "Vaccine",
      content: <TabContent title="Vaccine Section" image={img4} />,
    },
    {
      title: "Profile",
      value: "Profile",
      content: <TabContent title="Profile Section" image={img5} />,
    },
  ];

  return (
    <div className="flex flex-col max-w-5xl mx-auto w-full">
      {/* Title above tabs */}
<div className="flex justify-center mb-6">
  <div className="flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
    {/* Briefcase / Work SVG */}
    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M10 2H14V4H19C20.1 4 21 4.9 21 6V20C21 21.1 20.1 22 19 22H5C3.9 22 3 21.1 3 20V6C3 4.9 3.9 4 5 4H10V2ZM5 6V20H19V6H5ZM10 6H14V8H10V6Z" />
    </svg>
    Recently Worked
  </div>
</div>


      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-blue-400">
        Vaccination Management
      </h1>

      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative z-1 flex flex-col items-start justify-start">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

// ✅ Reusable tab content component
const TabContent = ({ title, image }) => {
  return (
    <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
      <p>{title}</p>
      <img
        src={image}
        alt={title}
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    </div>
  );
};

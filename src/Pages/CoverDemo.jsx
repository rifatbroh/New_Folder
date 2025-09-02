import React from "react";
import { Cover } from "../Components/ui/Cover";
import Card from "./Card";

export function CoverDemo() {
  return (
    <div className="bg-[#171c2a] min-h-screen flex flex-col items-center justify-center">
      <h1
        className="text-4xl pb-10 md:text-4xl lg:text-6xl font-semibold max-w-7xl text-center 
        relative z-20 
        bg-clip-text text-transparent bg-gradient-to-b 
        from-neutral-800 via-neutral-700 to-neutral-700 
        dark:from-neutral-800 dark:via-white dark:to-white"
      >
        Hackathons fuel my code <br /> <Cover>speed</Cover> fuels my soul
      </h1>
      <Card />
    </div>
  );
}

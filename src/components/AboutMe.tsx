"use client";
import { useEffect, useState } from "react";

export default function AboutMe() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <article className="p-4 space-y-3">
      <div className="border-t w-full md:w-[900px] border-dotted border-gray-400 space-y-1 mx-auto"></div>
      <div className="flex flex-col md:flex-row md:justify-around items-center space-y-2 md:space-y-0">
        <h1 className="font-light text-sm text-center md:text-left">
          Crafted by Pawan Pandey
        </h1>
        <h1 suppressHydrationWarning className="text-center md:text-right">
          Bangalore: {currentTime.toLocaleTimeString()}
        </h1>
      </div>
    </article>
  );
}

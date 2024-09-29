"use client";
import { useEffect, useState } from "react";

export default function AboutMe() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 10000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <article id="">
      <div className="border-t w-[900px] border-dotted  border-gray-400 space-y-1"></div>
      <div className="flex justify-around">
        <h1 className="font-light text-sm  ">Crafted by Pawan Pandey</h1>
        <h1 suppressHydrationWarning>
          Banglore: {currentTime.toLocaleTimeString()}
        </h1>
      </div>
    </article>
  );
}

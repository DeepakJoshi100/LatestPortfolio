import React, { useEffect, useState } from "react";
import { borderArray, textArray } from "./models";
import MyPhoto from "./MyPhoto.png";

function Header() {
  const [colors, setColors] = useState("violet-500");

  useEffect(() => {
    const interval = setInterval(() => {
      setColors(() => textArray[Math.floor(Math.random() * textArray.length)]);
    }, 950);

    return () => clearInterval(interval);
  }, [colors]);

  return (
    <>
      <div className="flex bg-gray-400 ">
        <img
          className="w-20 border-4 border-blue-500 rounded-full aspect-square"
          src={MyPhoto}
        />
        <h1
          className={
            "py-4 text-2xl font-black animate-bounce tracking-widest " + colors
          }
        >
          Deepak
        </h1>
      </div>
    </>
  );
}
export default Header;
//  const [seconds, setSeconds] = useState(0);

//  useEffect(() => {
//    const interval = setInterval(() => {
//      setSeconds(() => seconds + 1);
//    }, 1000);
//    return () => clearInterval(interval);
//  }, [seconds]);

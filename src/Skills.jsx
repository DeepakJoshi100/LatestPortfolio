import React from "react";
import { MySkills } from "./AllApiData";
function Skills() {
  return (
    <>
      <div className="flex flex-col gap-8 p-8 mt-20 " id="Skills">
        <h1 className="mx-auto text-4xl font-black tracking-widest text-white">
          My Skills
        </h1>
        <div className="grid grid-cols-4 gap-4 mx-auto">
          {MySkills.map((r) => (
            <div className="flex flex-col items-center w-full">
              <div className="object-center overflow-hidden duration-1000 border-2 border-gray-700 rounded-full w-28 aspect-square hover:w-40 hover:translate-x-2">
                <img src={r.image} />
              </div>
              <div>{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Skills;
//  <div>
//    <img src="" />
//    <p></p>
//  </div>;

import React from "react";
function About() {
  return (
    <>
      <div className="flex flex-col py-1  my-1 rounded-md gap-5" id="About">
        <h1 className="flex-col font-mono text-6xl font-black text-white">
          Hello, I Am <span className="text-blue-300">Deepak Joshi.</span>
        </h1>
        <span className="font-serif text-3xl font-bold text-white">
          I Worked As A{" "}
          <span className="text-blue-300"> FrontEnd WebDeveloper.</span>
        </span>
        <span className="font-serif text-2xl font-bold text-white">
          I Am Very Passionated To My{" "}
          <span className="text-blue-300">Work.</span>
        </span>
      </div>
    </>
  );
}
export default About;

import React from "react";
import { Link } from "react-router-dom";

import Resumee from "./Resume2022.pdf";
function Resume() {
  return (
    <>
      <div
        id="Resume"
        className="px-16 py-2 font-black tracking-widest text-black bg-blue-300 rounded-lg hover:text-white hover:bg-blue-600"
      >
        <a href={Resumee} target="_blank">
          Resume
        </a>
      </div>
    </>
  );
}
export default Resume;

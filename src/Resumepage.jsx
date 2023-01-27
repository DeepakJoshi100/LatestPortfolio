import React from "react";
import { Link } from "react-router-dom";

function Resumepage() {
  return (
    <>
      <Link to="/resumepage"></Link>
      <div className="flex items-center justify-center h-screen py-12 text-6xl font-black bg-red-400 ">
        {/* <a href={LatestProject} target="_blank">
          <span>
            Click Here{" "}
            <span className="p-2 text-blue-700 rounded-md hover:bg-blue-200 hover:underline">
              Open Pdf
            </span>
          </span>
        </a> */}
      </div>
    </>
  );
}
export default Resumepage;

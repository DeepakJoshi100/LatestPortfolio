import React, { useState } from "react";
import { extraProjects, ProjectApi } from "./AllApiData";
function Projects() {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      id="Projects"
      className="flex flex-col p-2 border-2 shadow-lg rounded-t-xl shadow-gray-300"
    >
      <div className="flex items-center justify-center w-full gap-4 py-4 m-2 text-5xl font-black text-blue-600">
        Some Projects
      </div>
      <div className="grid w-full gap-5 md:grid-cols-2 ">
        {ProjectApi.map((r) => (
          <div className="flex flex-col gap-2 p-5 mx-auto border-2 border-black shadow-sm shadow-gray-100 rounded-2xl w-80">
            <div className="object-cover overflow-hidden rounded-lg aspect-video w-72">
              <img src={r.image} />
            </div>
            <span className="grow"></span>
            <h1 className="flex flex-wrap font-mono text-lg w-60">{r.name}</h1>
            <h3 className="text-xs">{r.description}</h3>

            <div className="flex items-center justify-between">
              <a
                className="px-8 py-1 duration-500 bg-indigo-400 rounded-md hover:bg-indigo-600 hover:translate-x-2"
                href={r.replit_webview}
                target="_blank"
              >
                View
              </a>
              <a
                className="px-8 py-1 duration-500 bg-blue-400 rounded-md hover:bg-blue-600 hover:-translate-x-2"
                href={r.github_link}
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}

        {!toggle && (
          <button
            className="flex flex-col items-center justify-center gap-2 p-5 mx-auto text-4xl font-black duration-700 border-2 border-black shadow-sm hover:text-gray-700 shadow-gray-100 rounded-2xl w-80"
            onClick={() => setToggle(!toggle)}
          >
            View More +
          </button>
        )}
        {toggle &&
          extraProjects.map((r, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 p-5 mx-auto border-2 border-black shadow-sm shadow-gray-100 rounded-2xl w-80"
            >
              <div className="object-cover overflow-hidden rounded-lg aspect-video w-72">
                <img src={r.image} />
              </div>
              <span className="grow"></span>
              <h1 className="flex flex-wrap font-mono text-lg w-60">
                {r.name}
              </h1>
              <h3 className="text-xs">{r.description}</h3>

              <div className="flex items-center justify-between">
                <a
                  className="px-8 py-1 duration-500 bg-indigo-400 rounded-md hover:bg-indigo-600 hover:translate-x-2"
                  href={r.replit_webview}
                  target="_blank"
                >
                  View
                </a>
                <a
                  className="px-8 py-1 duration-500 bg-blue-400 rounded-md hover:bg-blue-600 hover:-translate-x-2"
                  href={r.github_link}
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
              <button
                onClick={() => setToggle(!toggle)}
                className="px-8 py-1 duration-300 bg-red-500 rounded-lg hover:bg-red-700"
              >
                Close
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
export default Projects;

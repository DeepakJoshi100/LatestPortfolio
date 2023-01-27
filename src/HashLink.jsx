import React from "react";
// import { HashLink as Link } from "react-router-hash-link";
import { Link } from "react-scroll";

function HashLinks() {
  return (
    <>
      <div className="hidden md:block">
        <div className="max-w-6xl mx-auto flex justify-end gap-4 my-4">
          <div>
            <Link
              smooth={true}
              duration={1000}
              to="About"
              className="font-black text-lg text-blue-500 hover:text-white"
            >
              HOME
            </Link>
          </div>

          <div>
            <Link
              smooth={true}
              duration={1000}
              to="Resume"
              className="font-black text-lg text-blue-500 hover:text-white"
            >
              RESUME
            </Link>
          </div>

          <div>
            <Link
              smooth={true}
              duration={1000}
              to="Skills"
              className="font-black text-lg text-blue-500 hover:text-white"
            >
              SKILLS
            </Link>
          </div>

          <div>
            <Link
              smooth={true}
              duration={1000}
              to="Projects"
              className="font-black text-lg text-blue-500 hover:text-white"
            >
              PROJECTS
            </Link>
          </div>

          <div>
            <Link
              smooth={true}
              duration={1000}
              to="Contact"
              className="font-black text-lg text-blue-500 hover:text-white"
            >
              CONTACT US
            </Link>
          </div>

          <div>
            <Link
              smooth={true}
              duration={1000}
              to="Social"
              className="font-black text-lg text-blue-500 hover:text-white"
            >
              SOCIAL SITES
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default HashLinks;

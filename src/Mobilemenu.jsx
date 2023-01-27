import React from "react";
import { Link } from "react-scroll";
function Mobilemenu() {
  return (
    <>
      <div className="flex flex-col font-black rounded-md text-xm text-inherit">
        <Link
          smooth={true}
          duration={1000}
          to="About"
          className="text-lg font-black text-blue-500"
        >
          HOME
        </Link>

        <Link
          smooth={true}
          duration={1000}
          to="Resume"
          className="text-lg font-black text-blue-500"
        >
          RESUME
        </Link>

        <Link
          smooth={true}
          duration={1000}
          to="Skills"
          className="text-lg font-black text-blue-500"
        >
          SKILLS
        </Link>

        <Link
          smooth={true}
          duration={1000}
          to="Projects"
          className="text-lg font-black text-blue-500"
        >
          PROJECTS
        </Link>

        <Link
          smooth={true}
          duration={1000}
          to="Contact"
          className="text-lg font-black text-blue-500"
        >
          CONTACT US
        </Link>

        <Link
          smooth={true}
          duration={1000}
          to="Social"
          className="text-lg font-black text-blue-500 "
        >
          SOCIAL SITES
        </Link>
      </div>
    </>
  );
}
export default Mobilemenu;

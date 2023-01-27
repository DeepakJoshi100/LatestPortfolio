import React, { useState } from "react";
import About from "./About";
import Contacts from "./Contacts";
import Footer from "./Footer";
import HashLinks from "./HashLink";
import Header from "./Header";
import Mobilemenu from "./Mobilemenu";
import Photo from "./Photo";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";
import Social from "./Social";
import { GiHamburgerMenu } from "react-icons/gi";

function Alldata() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function handleMenuChange() {
    setMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <div className="bg-gray-400 ">
        <div className="flex justify-between max-w-4xl mx-auto rounded-md">
          <Header />

          <HashLinks />
        </div>
      </div>
      <div className="fixed flex flex-col items-start justify-start md:hidden">
        <GiHamburgerMenu
          onClick={handleMenuChange}
          className="text-4xl font-black text-inherit"
        />
        {isMenuOpen && <Mobilemenu className="" />}
      </div>
      <div className="m-2 md:m-0">
        {" "}
        {/* ess wale line m garbar h*/}
        <div className="h-full max-w-4xl mx-auto ">
          <div className="flex flex-col items-center justify-center ">
            <div className="flex flex-col-reverse items-center justify-center mx-auto md:flex-row">
              <About />
              <Photo />
            </div>
            <div className="flex flex-col items-center justify-center py-2 mt-8">
              <Resume />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-Coding">
            <Skills />
          </div>

          <div>
            <Projects />
          </div>

          <div>
            <Contacts />
          </div>
          <div>
            <Social />
          </div>
        </div>
      </div>
      <div className="bg-gray-400">
        <div className="max-w-4xl mx-auto rounded-md">
          <Footer />
        </div>
      </div>
    </>
  );
}
export default Alldata;

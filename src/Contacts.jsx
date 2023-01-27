import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";

function Contacts() {
  return (
    <>
      <div className="pb-20 mt-16" id="Contact">
        <h1 className="flex flex-col items-center justify-center mt-8 mb-4 text-4xl font-black tracking-widest text-blue-500">
          Reach Us
        </h1>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex items-center justify-center gap-4 font-mono text-3xl font-medium text-white">
            <h4 className="flex flex-col items-center justify-center text-4xl font-bold text-blue-400">
              <h5>
                <BiPhoneCall />
              </h5>
              Call
            </h4>
            <p className="animate-pulse"> +91 883722 3626 </p>
          </div>

          <a href="https://mail.google.com/" target="_blank">
            <div className="flex items-center justify-center gap-4 font-mono text-xl md:text-3xl font-medium text-white">
              <h4 className="flex flex-col items-center justify-center text-4xl font-bold text-blue-400">
                <h5>
                  <HiOutlineMailOpen />
                </h5>
                E-Mail
              </h4>
              <p className="animate-pulse">deepakjoshi982001@gmail.com</p>
            </div>
          </a>

          <a href="https://goo.gl/maps/viawgZ4aKBzGM46J6" target="_blank">
            <div className="flex items-center justify-center gap-4 font-mono text-3xl font-medium text-white">
              <h4 className="flex flex-col items-center justify-center text-4xl font-bold text-blue-400">
                <h5>
                  <AiOutlineHome />
                </h5>
                Address
              </h4>
              <p className="animate-pulse">Khatima, Uttarakhand</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
export default Contacts;

import React from "react";
function Footer() {
  return (
    <>
      <div className="flex justify-between bg-gray-400 " id="Footer">
        <h1 className="py-4 text-2xl font-black text-black flex gap-2">
          Made With
          <span className="text-red-700 text-xl animate-ping ">❤</span>
          Love At CodeYogi
        </h1>
        <h1 className="py-4 text-2xl font-black text-black">
          Copyrights © 2022 Deepak Joshi
        </h1>
      </div>
    </>
  );
}
export default Footer;

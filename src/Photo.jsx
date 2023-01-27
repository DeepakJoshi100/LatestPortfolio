import React from "react";
import MyPhoto from "./MyPhoto.png";

function Photo() {
  return (
    <>
      <div className="w-60 ">
        <img className="w-full aspect-square rounded-full" src={MyPhoto} />
      </div>
    </>
  );
}
export default Photo;

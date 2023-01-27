import React from "react";

import { SocialApi } from "./AllApiData";
function Social() {
  const imageClass =
    "object-cover overflow-hidden duration-700 rounded-full shadow-sm hover:shadow-md hover:translate-y-2 hover:translate-x-2 shadow-white w-14 aspect-square";

  return (
    <>
      <div className="flex items-center justify-center gap-5 mb-5" id="Social">
        {SocialApi.map((r, index) => (
          <div key={index}>
            <div>
              <a href={r.link} target="_blank">
                <div className={imageClass}>
                  <img src={r.image} />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Social;

//  <div>
//    <a href={r.facebook.link} target="_blank">
//      <div className="object-cover rounded-full w-14 aspect-square">
//        <img src={r.facebook.image} />
//      </div>
//    </a>
//  </div>;

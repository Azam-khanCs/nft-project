import React from "react";

const User = () => {
  return (
    <>
     <div className="flex justify-center items-center my-12 p-6 text-[#2B2828]">
     <div className="flex flex-wrap w-[100%] space-y-12 md:space-y-0 mt-5" style={{fontFamily:"Space Grotesk"}}>
        <div className="md:w-[25%] w-[100%] text-center">
          <b className="text-5xl font-bold" >100</b>
          <p className="font-medium	text-base pl-5" >user</p>
        </div>

        <div className="md:w-[25%] w-[100%] text-center">
          <b className="text-5xl font-bold" >33k</b>
          <p className="font-medium	text-base pl-1" >download</p>
        </div>

        <div className="md:w-[25%] w-[100%] text-center">
          <b className="text-5xl font-bold" >10k</b>
          <p className="font-medium	text-base pl-2" >customer</p>
        </div>

        <div className="md:w-[25%] w-[100%] text-center">
          <b className="text-5xl font-bold" >20k</b>
          <p className="font-medium	text-base pl-1" >developer</p>
        </div>
      </div>
     </div>

  
    </>
  );
};

export default User;

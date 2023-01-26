import React from "react";

const Header = () => {
  return ( 
    <div>
    <div className="flex justify-center  ">
      <div
        className="mx-3 flex flex-wrap justify-center px-5 md:items-center w-[100%]"
        
      >
        <div className="md:w-[50%] w-[100%] text-[#2B2828]">
          <p className="font-bold md:text-5xl md:text-3xl text-2xl md:w-[640px] w-[300px] mb-3 md:leading-[67.2px]" >
            Discover How Trending
            
            Apps Can Benefit You
          </p>
          <p
            className="text-lg font-normal gap-x-10 md:w-[620px] w-[300px]"
            
          >
            Boost your productivity with a simple to-do app. A mobile
            application Budgeting for your personal life
          </p>
          <div className="md:flex  py-5 md:space-x-5 space-y-3 md:space-y-0 ">
            <img src="../googleplay.svg" className=" " />
            <img src="../appstore.svg" />
          </div>
        </div>


        <div className="w-[50%] w-[100%] ">
         <img src="../hero1.svg" className="w-[563px] " />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;

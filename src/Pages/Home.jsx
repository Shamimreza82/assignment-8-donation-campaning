import React from "react";
import Bg from "../assets/girl-1822480_1280.jpg";
import Cards from "../Component/Cards/Cards";

const Home = () => {
  return (
    <div>
      <div className="lg:min-h-screen">
        <div className="hero lg:min-h-screen">
          <img className="opacity-10 object-cover w-full " src={Bg} alt="" />
          <div className=" bg-opacity-60"></div>
          <div className="flex justify-center items-center">
            <div className="text-center ">
            <h1 className="mb-9 text-3xl lg:text-5xl font-bold">I Grow By Helping People In Need</h1>
            <div className="relative lg:w-[70%] px-3 m-auto">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn  bg-[#FF444A] hover:bg-[#0052FF] text-white absolute top-0 right-0 rounded-l-none">
                Search
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Cards></Cards>
    </div>
  );
};

export default Home;

import React from "react";

function Background() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className="w-full py-10 flex justify-center text-zinc-600 font-semibold text-xl absolute top-[5%]">
          Documents
        </div>
        <h1 className="text-[150px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-zinc-600 leading-none tracking-tighter font-semibold ">
          Docs
        </h1>
      </div>
    </>
  );
}

export default Background;

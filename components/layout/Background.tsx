import React from "react";

export default function Background() {
  return (
    <div className="fixed left-0 top-0 z-0 h-[100dvh] w-[100dvw]">
      <div className="absolute left-0 top-1/2 z-0 h-[150px] w-[150px] rounded-full bg-gradient-to-r from-sky-400 to-transparent opacity-90 blur-[150px] md:h-[300px] md:w-[300px]"></div>
      {/* <div className="absolute right-0 top-0 z-0 h-[200px] w-[200px] rounded-full bg-gradient-to-r from-sky-400 to-transparent opacity-90 blur-[150px] md:h-[300px] md:w-[300px]"></div> */}
      <div className="absolute bottom-0 right-0 z-0 h-[200px] w-[200px] rounded-full bg-gradient-to-r from-sky-400 to-transparent opacity-90 blur-[150px] md:h-[200px] md:w-[200px]"></div>
    </div>
  );
}

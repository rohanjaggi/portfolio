import React from "react";
import Image from "next/image";

const HomeComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center space-y-4">
        <Image 
          src="/profile-pic.png" 
          alt="Profile Picture" 
          width={300} 
          height={300} 
          className="rounded-full"
        />
        <div className="text-center space-y-2">
          <h2 className="text-xl">Hello, I'm</h2>
          <h1 className="text-4xl font-bold">Rohan Jaggi</h1>
          <p className="text-xl">Aspiring ML Engineer</p>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
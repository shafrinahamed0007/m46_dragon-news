import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center flex-col">
      <h2 className="font-bold text-xl md:text-5xl text-purple-500">
        This page not found
      </h2>
      <Link className="mt-10" href="/">
        <button className="btn btn-natural">back to home</button>
      </Link>
    </div>
  );
};

export default NotFound;

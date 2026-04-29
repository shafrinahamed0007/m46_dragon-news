import Image from "next/image";
import React from "react";
import Link from "next/link";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="container mx-auto items-center flex justify-between  mt-[34px]">
      <div></div>
      <ul className="flex gap-4  justify-center text-gray-700">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about-us"}>About</NavLink>
        </li>
        <li>
          <NavLink className={"text-yellow-600"} href={"/carrer"}>Career</NavLink>
        </li>
      </ul>
      <div className="flex justify-between gap-4">
        <Image src={userAvatar} alt="User avatar" width={40} height={40} />
        <button className="btn btn-neutral text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

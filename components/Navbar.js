"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="bg-gray-950 flex flex-col md:flex-row justify-between items-center px-4 py-2">
      <div className="logo font-bold text-lg">
        <Link href={"/"}>FundMySamosa!</Link>
      </div>
      {/* <ul className='flex gap-2'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Login</li>
        </ul> */}
      <div className="flex gap-2 items-center">
        {session && (
          <Link href={"/dashboard"} className="relative group">
            <div className="relative">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="flex gap-0.5 items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Dashboard
                  <FaAngleDown />
                </span>
              </button>

              {/* Dropdown on hover */}
              <div className="absolute hidden group-hover:flex flex-col min-w-[130px] bg-white text-gray-800 rounded-md shadow-lg border border-gray-200 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 origin-top transform z-10">
                <Link href={"/dashboard"}>
                  <button className="px-4 py-2 hover:bg-blue-100 w-full text-left">
                    Dashboard
                  </button>
                </Link>
                <Link href={`/${session.user.name}`}>
                  <button className="px-4 py-2 hover:bg-blue-100 w-full text-left">
                    My Profile
                  </button>
                </Link>
              </div>
            </div>
          </Link>
        )}
        {
          session && (
            // <Link>
            <button
              onClick={() => {
                signOut();
              }}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Sign Out
              </span>
            </button>
          )
          // </Link>
        }
        {!session && (
          <Link href={"/login"}>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Login
              </span>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

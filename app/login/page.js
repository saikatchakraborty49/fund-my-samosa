"use client";
import React, { useEffect } from 'react';
import { useSession, signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';

const Login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  return (
    <div className='py-14 mx-auto'>
      <h1 className='text-3xl text-center font-bold'>Login To Get Your Fans Support You</h1>
      <div className="flex flex-col gap-2 min-h-screen p-10 items-center">
        <button
          onClick={() => signIn("google")}
          className="flex w-64 items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 48 48" version="1.1">
            {/* SVG code */}
          </svg>
          <span>Continue with Google</span>
        </button>

        <button
          onClick={() => signIn("github")}
          className="flex w-64 items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 73" version="1.1">
            {/* SVG code */}
          </svg>
          <span>Continue with Github</span>
        </button>
      </div>
    </div>
  );
};

export default Login;

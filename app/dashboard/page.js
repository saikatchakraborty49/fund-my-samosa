"use client";

import { MdEdit } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { apiConnector } from "@/services/apiConnector";

const Dashboard = () => {
  const { data: session, status } = useSession();
  console.log(session);
  const router = useRouter();

  const [dataLoaded, setDataLoaded] = useState(false);
  const [editpp, setEditpp] = useState(false);
  const [editrid, setEditrid] = useState(false);
  const [editrs, setEditrs] = useState(false);
  const [editbio, setEditBio] = useState(false);
  const [editBanner, setEditBanner] = useState(false);
  const [hasEdited, setHasEdited] = useState(false);
  const [userData, setUserData] = useState();

  const { register, setValue, getValues } = useForm({});

  async function getUserData() {
    const response = await apiConnector("GET", `api/user/getData/${session.user.name}`);
    const user = response.data.currUser;
    setUserData(user);
    setValue("name", user.name || "");
    setValue("email", user.email || "");
    setValue("userName", user.userName || "");
    setValue("razorpayId", user.razorpayId || "");
    setValue("razorpaySecret", user.razorpaySecret || "");
    setValue("profilePicture", user.profilePicture || "");
    setValue("bio", user.bio || "");
    setValue("profileBanner", user.profileBanner || "");
    setDataLoaded(true);
  }

  async function handleSave() {
    try {
      if (editpp) {
        await apiConnector("PUT", "api/user/update", {
          email: userData.email,
          field: "profilePicture",
          value: getValues("profilePicture"),
        });
      }
      if (editrid) {
        await apiConnector("PUT", "api/user/update", {
          email: userData.email,
          field: "razorpayId",
          value: getValues("razorpayId"),
        });
      }
      if (editrs) {
        await apiConnector("PUT", "api/user/update", {
          email: userData.email,
          field: "razorpaySecret",
          value: getValues("razorpaySecret"),
        });
      }
      if (editbio) {
        await apiConnector("PUT", "api/user/update", {
          email: userData.email,
          field: "bio",
          value: getValues("bio"),
        });
      }
      if (editBanner) {
        await apiConnector("PUT", "api/user/update", {
          email: userData.email,
          field: "profileBanner",
          value: getValues("profileBanner"),
        });
      }

      await getUserData();
      setEditpp(false);
      setEditrid(false);
      setEditrs(false);
      setEditBio(false);
      setEditBanner(false);
      setHasEdited(false);
    } catch (err) {
      console.error("Error saving data:", err);
    }
  }

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/login");
    } else if (!dataLoaded) {
      getUserData();
    }
  }, [session, status]);

  if (!userData) {
    return <div className="w-screen h-screen flex justify-center items-center">Loading...</div>;
  }

  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Welcome to Dashboard</h2>
      <form className="space-y-6 flex flex-col items-center w-full max-w-xl relative">
        {/* Name */}
        <div>
          <label className="text-sm font-medium mb-1 block">Name</label>
          <input disabled {...register("name")} className="border p-2 rounded w-[500px]" />
        </div>

        {/* Username */}
        <div>
          <label className="text-sm font-medium mb-1 block">Username</label>
          <input disabled {...register("userName")} className="border p-2 rounded w-[500px]" />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium mb-1 block">Email</label>
          <input disabled {...register("email")} className="border p-2 rounded w-[500px]" />
        </div>

        {/* Profile Picture */}
        <div className="relative w-[500px]">
          <label className="text-sm font-medium mb-1 block">Profile Picture</label>
          <input
            disabled={!editpp}
            {...register("profilePicture")}
            className={`border p-2 rounded w-full outline-none ${
              editpp ? "border-blue-500 cursor-text" : "border-gray-300 cursor-not-allowed"
            }`}
          />
          <button
            type="button"
            onClick={() => {
              setEditpp(true);
              setHasEdited(true);
            }}
            className="absolute top-9 right-2 text-lg text-gray-600 cursor-pointer"
          >
            <MdEdit />
          </button>
        </div>

        {/* Profile Banner */}
        <div className="relative w-[500px]">
          <label className="text-sm font-medium mb-1 block">Profile Banner</label>
          <input
            disabled={!editBanner}
            {...register("profileBanner")}
            className={`border p-2 rounded w-full outline-none ${
              editBanner ? "border-blue-500 cursor-text" : "border-gray-300 cursor-not-allowed"
            }`}
          />
          <button
            type="button"
            onClick={() => {
              setEditBanner(true);
              setHasEdited(true);
            }}
            className="absolute top-9 right-2 text-lg text-gray-600 cursor-pointer"
          >
            <MdEdit />
          </button>
        </div>

        {/* Razorpay ID */}
        <div className="relative w-[500px]">
          <label className="text-sm font-medium mb-1 block">Razorpay ID</label>
          <input
            disabled={!editrid}
            {...register("razorpayId")}
            className={`border p-2 rounded w-full outline-none ${
              editrid ? "border-blue-500 cursor-text" : "border-gray-300 cursor-not-allowed"
            }`}
          />
          <button
            type="button"
            onClick={() => {
              setEditrid(true);
              setHasEdited(true);
            }}
            className="absolute top-9 right-2 text-lg text-gray-600 cursor-pointer"
          >
            <MdEdit />
          </button>
        </div>

        {/* Razorpay Secret */}
        <div className="relative w-[500px]">
          <label className="text-sm font-medium mb-1 block">Razorpay Secret</label>
          <input
            disabled={!editrs}
            {...register("razorpaySecret")}
            className={`border p-2 rounded w-full outline-none ${
              editrs ? "border-blue-500 cursor-text" : "border-gray-300 cursor-not-allowed"
            }`}
          />
          <button
            type="button"
            onClick={() => {
              setEditrs(true);
              setHasEdited(true);
            }}
            className="absolute top-9 right-2 text-lg text-gray-600 cursor-pointer"
          >
            <MdEdit />
          </button>
        </div>

        {/* Bio */}
        <div className="relative w-[500px]">
          <label className="text-sm font-medium mb-1 block">Bio</label>
          <textarea
            rows={3}
            disabled={!editbio}
            {...register("bio")}
            className={`border p-2 rounded w-full outline-none resize-none ${
              editbio ? "border-blue-500 cursor-text" : "border-gray-300 cursor-not-allowed"
            }`}
          />
          <button
            type="button"
            onClick={() => {
              setEditBio(true);
              setHasEdited(true);
            }}
            className="absolute top-9 right-2 text-lg text-gray-600 cursor-pointer"
          >
            <MdEdit />
          </button>
        </div>

        

        {/* Save Button */}
        <button
          type="button"
          disabled={!hasEdited}
          onClick={handleSave}
          className={`mt-6 px-4 py-2 rounded text-white font-semibold ${
            hasEdited ? "bg-blue-500 hover:bg-blue-600" : "bg-black cursor-not-allowed"
          }`}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Dashboard;

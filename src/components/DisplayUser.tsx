"use client";

import React from "react";
import Image from "next/image";
import type { Session } from "next-auth";
import { signOut } from "next-auth/react";

const DisplayUser = ({ session }: { session: Session }) => {
  return (
    <div className="grid min-h-screen">
      <div className="self-center max-w-md w-full mx-auto bg-white rounded-md shadow-md border-t-2 border-blue-500 px-8 py-3 space-y-6">
        <div className="flex gap-4 items-center">
          <Image
            src={session.user?.image!}
            alt="profilePic"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1 className="">{session.user?.name}</h1>
        </div>
        <button
          className="px-8 py-3 bg-slate-900 rounded-md cursor-pointer font-bold text-white w-fit"
          onClick={() => signOut({ redirectTo: "/" })}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default DisplayUser;

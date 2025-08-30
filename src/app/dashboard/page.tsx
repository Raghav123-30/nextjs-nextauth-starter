import { auth } from "@/auth";
import DisplayUser from "@/components/DisplayUser";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const Dashboard = async () => {
  const session = await auth();
  if (!session) {
    redirect("/");
  } else {
    return <DisplayUser session={session} />;
  }
};

export default Dashboard;

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const Dashboard = async () => {
  const session = await auth();
  if (!session) {
    redirect("/");
  } else {
    return <div>{JSON.stringify(session)}</div>;
  }
};

export default Dashboard;

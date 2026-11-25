import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import SignOutButton from "./components/sign-out-button";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/authentication");
  }

  return (
    <>
      <h1>Dashboard Page</h1>
      <h2>{session?.user?.name}</h2>
      <h2>{session?.user?.email}</h2>
      <SignOutButton />
    </>
  );
};

export default DashboardPage;

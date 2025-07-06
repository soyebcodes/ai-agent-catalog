"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function LogoutBtn() {
  return (
    <Button className="cursor-pointer" onClick={() => signOut()}>
      Logout
    </Button>
  );
}

"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store";
import { setUser } from "@/store/userSlice";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      dispatch(
        setUser({
          name: session.user.name || "",
          email: session.user.email || "",
          image: session.user.image || "",
        })
      );

      router.push("/catalog");
    }
  }, [session, dispatch, router]);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Login to View AI Agents</h1>
        <Button className="cursor-pointer" onClick={() => signIn("google")}>
          Login with Google
        </Button>
      </div>
    </main>
  );
}

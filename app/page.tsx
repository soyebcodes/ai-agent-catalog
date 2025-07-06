"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store";
import { setUser } from "@/store/userSlice";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

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

  // Handle login click
  const handleLogin = async () => {
    setLoading(true);
    await signIn("google");
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Login to View AI Agents</h1>

        {loading ? (
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm text-gray-600">Redirecting to Google...</p>
          </div>
        ) : (
          <Button className="cursor-pointer" onClick={handleLogin}>
            Login with Google
          </Button>
        )}
      </div>
    </main>
  );
}

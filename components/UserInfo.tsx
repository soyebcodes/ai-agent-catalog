"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function UserInfo() {
  const { data: session } = useSession();

  if (!session?.user) return null;

  const { name, email, image } = session.user;

  return (
    <div className="flex items-center gap-3">
      {image && (
        <Image
          src={image}
          alt="User Avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
      )}
      <div className="text-sm">
        <p className="font-semibold">{name}</p>
        <p className="text-gray-500 text-xs">{email}</p>
      </div>
    </div>
  );
}

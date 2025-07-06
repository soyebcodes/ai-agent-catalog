import React from "react";
import CatalogClient from "./CatelogClient";
import agents from "@/lib/data/mock-agents.json";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export const generateMetadata = (): Metadata => {
  return {
    title: "ArkLab AI Agent Catalog",
    description:
      "Explore powerful AI agents for customer service, marketing, development, and more.",
  };
};

export default async function CatalogPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }
  // ssr api delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <main className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">AI Agent Catalog</h1>
      <CatalogClient agents={agents} />
    </main>
  );
}

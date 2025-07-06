import React from "react";
import CatalogClient from "./CatelogClient";
import agents from "@/lib/data/mock-agents.json";

export const metadata = {
  title: "ArkLab AI Agent Catalog",
  description:
    "Browse and filter through AI agents for different categories and use cases.",
};

export default async function CatalogPage() {
  // ssr api delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <main className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">AI Agent Catalog</h1>
      <CatalogClient agents={agents} />
    </main>
  );
}

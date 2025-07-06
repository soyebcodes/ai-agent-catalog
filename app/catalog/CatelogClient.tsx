"use client";
import AgentCard from "@/components/AgentCard";

type Agent = {
  id: string;
  name: string;
  description: string;
  status: string;
  category: string;
  pricingModel: string;
};

export default function CatalogClient({ agents }: { agents: Agent[] }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search agents..."
        className="w-full p-2 border rounded mb-4"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
}

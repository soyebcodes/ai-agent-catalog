"use client";
import AgentCard from "@/components/AgentCard";
import {
  setSearchQuery,
  toggleStatus,
  toggleCategory,
  setPricingModel,
  clearAllFilters,
} from "@/store/filterSlice";
import { useAppSelector, useAppDispatch } from "@/store";
import { useMemo } from "react";
import Filters from "@/components/Filters";

type Agent = {
  id: string;
  name: string;
  description: string;
  status: string;
  category: string;
  pricingModel: string;
  imageUrl: string;
};

export default function CatalogClient({ agents }: { agents: Agent[] }) {
  const dispatch = useAppDispatch();

  const { searchQuery, status, category, pricingModel } = useAppSelector(
    (state) => state.filters
  );

  const filteredAgents = useMemo(() => {
    return agents.filter((agent) => {
      const matchesSearch =
        agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        status.length === 0 || status.includes(agent.status);

      const matchesCategory =
        category.length === 0 || category.includes(agent.category);

      const matchesPricing =
        pricingModel === null || agent.pricingModel === pricingModel;

      return (
        matchesSearch && matchesStatus && matchesCategory && matchesPricing
      );
    });
  }, [agents, searchQuery, status, category, pricingModel]);

  return (
    <div>
      <Filters />
      <input
        type="text"
        placeholder="Search agents..."
        className="w-full p-2 border rounded mb-4"
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />

      <button
        onClick={() => dispatch(clearAllFilters())}
        className="text-sm text-blue-600 underline mb-4 block cursor-pointer"
      >
        Clear filter
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredAgents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
}

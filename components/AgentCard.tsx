"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Agent = {
  id: string;
  name: string;
  description: string;
  status: string;
  category: string;
  pricingModel: string;
  imageUrl?: string;
};

function getInitials(name: string) {
  const words = name.split(" ");
  return words
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() || "")
    .join("");
}

export default function AgentCard({ agent }: { agent: Agent }) {
  const statusColorMap = {
    Active: "bg-green-100 text-green-700",
    Beta: "bg-yellow-100 text-yellow-700",
    Archived: "bg-gray-200 text-gray-700",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="shadow-sm border dark:border-zinc-700 dark:bg-zinc-900 transition hover:shadow-lg">
        <CardContent className="p-5 space-y-4">
          {/* Header with avatar + name + status */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                {agent.imageUrl ? (
                  <AvatarImage src={agent.imageUrl} alt={agent.name} />
                ) : (
                  <AvatarFallback>{getInitials(agent.name)}</AvatarFallback>
                )}
              </Avatar>
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {agent.name}
              </h2>
            </div>

            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                statusColorMap[agent.status as keyof typeof statusColorMap]
              }`}
            >
              {agent.status}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            {agent.description}
          </p>

          {/* Metadata: Category + Pricing */}
          <div className="flex justify-between text-xs text-muted-foreground pt-2 border-t border-zinc-200 dark:border-zinc-700">
            <span>{agent.category}</span>
            <span>{agent.pricingModel}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

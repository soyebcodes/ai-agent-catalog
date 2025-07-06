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
  const initials = words
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() || "");
  return initials.join("");
}

export default function AgentCard({ agent }: { agent: Agent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.03 }}
    >
      <Card className="shadow-md transition hover:shadow-xl">
        <CardContent className="p-4 space-y-3">
          <div className="flex items-center space-x-3">
            <Avatar>
              {agent.imageUrl ? (
                <AvatarImage src={agent.imageUrl} alt={agent.name} />
              ) : (
                <AvatarFallback>{getInitials(agent.name)}</AvatarFallback>
              )}
            </Avatar>
            <h2 className="text-lg font-semibold">{agent.name}</h2>
          </div>

          <p className="text-sm text-gray-600">{agent.description}</p>

          <div className="text-xs text-gray-500 space-y-1">
            <div>Status: {agent.status}</div>
            <div>Category: {agent.category}</div>
            <div>Pricing: {agent.pricingModel}</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

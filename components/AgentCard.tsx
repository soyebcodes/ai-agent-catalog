import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Agent = {
  id: string;
  name: string;
  description: string;
  status: string;
  category: string;
  pricingModel: string;
  imageUrl: string;
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
    <Card className="shadow-md transition hover:shadow-xl">
      <CardContent className="p-4 space-y-2">
        {/* Avatar */}
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
        <h2 className="text-xl font-semibold">{agent.name}</h2>
        <p className="text-sm text-gray-600">{agent.description}</p>
        <div className="text-xs text-gray-500 space-x-2 mt-2">
          <span>Status: {agent.status}</span>
          <span>• Category: {agent.category}</span>
          <span>• Pricing: {agent.pricingModel}</span>
        </div>
      </CardContent>
    </Card>
  );
}

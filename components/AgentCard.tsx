import { Card, CardContent } from "@/components/ui/card";

type Agent = {
  id: string;
  name: string;
  description: string;
  status: string;
  category: string;
  pricingModel: string;
};

export default function AgentCard({ agent }: { agent: Agent }) {
  return (
    <Card className="shadow-md transition hover:shadow-xl">
      <CardContent className="p-4 space-y-2">
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

"use client";

import {
  toggleStatus,
  toggleCategory,
  setPricingModel,
  clearAllFilters,
} from "@/store/filterSlice";
import { useAppDispatch, useAppSelector } from "@/store";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const statusOptions = ["Active", "Beta", "Archived"];
const categoryOptions = [
  "Customer Service",
  "Operations",
  "Marketing",
  "Data Analysis",
  "Development",
  "Human Resources",
  "Finance",
  "Legal",
];
const pricingOptions = ["Free Tier", "Subscription", "Per-Use"];

export default function Filters() {
  const dispatch = useAppDispatch();
  const { status, category, pricingModel } = useAppSelector(
    (state) => state.filters
  );

  return (
    <div className="space-y-6 mb-6 p-4 border rounded-lg shadow-sm">
      {/* Status Filter */}
      <div>
        <h3 className="font-medium mb-2">Status</h3>
        <div className="flex flex-wrap gap-3">
          {statusOptions.map((option) => (
            <label key={option} className="flex items-center gap-2 text-sm">
              <Checkbox
                checked={status.includes(option)}
                onCheckedChange={() => dispatch(toggleStatus(option))}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="font-medium mb-2">Category</h3>
        <div className="flex flex-wrap gap-3">
          {categoryOptions.map((option) => (
            <label key={option} className="flex items-center gap-2 text-sm">
              <Checkbox
                checked={category.includes(option)}
                onCheckedChange={() => dispatch(toggleCategory(option))}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Pricing Model */}
      <div>
        <h3 className="font-medium mb-2">Pricing Model</h3>
        <RadioGroup
          value={pricingModel || ""}
          onValueChange={(value) => dispatch(setPricingModel(value))}
          className="flex flex-wrap gap-4"
        >
          {pricingOptions.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <RadioGroupItem value={option} id={option} />
              <label htmlFor={option} className="text-sm">
                {option}
              </label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Clear Button */}
      <Button
        variant="outline"
        className="text-sm"
        onClick={() => dispatch(clearAllFilters())}
      >
        Clear All Filters
      </Button>
    </div>
  );
}

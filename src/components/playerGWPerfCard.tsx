
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import React from "react";

interface DataCardProps {
  largeNumber: string | number;
  goals: string | number;
  assist: string | number;
  bonus: string | number;
}

const DataCard: React.FC<DataCardProps> = ({ largeNumber, goals, assist, bonus }) => {
  return (
    <div className="bg-white mt-[-75px]">
      <div className="text-5xl font-bold text-gray-800 text-center mb-4">
        {largeNumber}
      </div>
      <div className="flex justify-between">
          <div
            className="text-sm ml-1 font-medium text-gray-600 text-center"
          >
            {goals}G
          </div>
          <div
            className="text-sm ml-1 font-medium text-gray-600 text-center"
          >
            {assist}A
          </div>
          <div
            className="text-sm ml-1 font-medium text-gray-600 text-center"
          >
            {bonus}B
          </div>
      </div>
    </div>
  );
};

export default DataCard;

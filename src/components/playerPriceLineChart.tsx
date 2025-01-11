"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, LabelList, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Data: Price changes over 20 gameweeks
const chartData = [
  { gameweek: 1, price: 8.5 },
  { gameweek: 2, price: 8.6 },
  { gameweek: 3, price: 8.6 },
  { gameweek: 4, price: 8.7 },
  { gameweek: 5, price: 8.2 },
  { gameweek: 6, price: 8.8 },
  { gameweek: 7, price: 8.9 },
  { gameweek: 8, price: 9.0 },
  { gameweek: 9, price: 9.0 },
  { gameweek: 10, price: 9.1 },
  { gameweek: 11, price: 9.1 },
  { gameweek: 12, price: 9.1 },
  { gameweek: 13, price: 9.2 },
  { gameweek: 14, price: 9.2 },
  { gameweek: 15, price: 9.3 },
  { gameweek: 16, price: 9.3 },
  { gameweek: 17, price: 9.4 },
  { gameweek: 18, price: 9.4 },
  { gameweek: 19, price: 9.5 },
  { gameweek: 20, price: 9.5 },
];

const chartConfig = {
  price: {
    label: "Value",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function PlayerPriceLineChart() {
  return (

        <ChartContainer className="aspect-auto h-[275px] w-full" config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="gameweek"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${value}`}
            />
            <YAxis
              domain={[7.5, "dataMax + 1"]}
              hide
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" 
                labelFormatter={(value, payload) => {
                const gw = payload?.[0]?.payload?.gameweek;
                return `GW${gw}`;
              }}/>}
            />
            <Area
              dataKey="price"
              type="linear"
              fill="var(--color-price)"
              stroke="var(--color-price"
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 4,
              }}
            >
            </Area>
          </AreaChart>
        </ChartContainer>
  );
}

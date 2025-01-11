"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { gameweek: "GW1", avgPoints: 56, top10kAvgPoints: 60 },
  { gameweek: "GW2", avgPoints: 48, top10kAvgPoints: 58 },
  { gameweek: "GW3", avgPoints: 62, top10kAvgPoints: 65 },
  { gameweek: "GW4", avgPoints: 70, top10kAvgPoints: 72 },
  { gameweek: "GW5", avgPoints: 66, top10kAvgPoints: 70 },
  { gameweek: "GW6", avgPoints: 59, top10kAvgPoints: 62 },
];

const chartConfig = {
  avgPoints: {
    label: "All Managers",
    color: "hsl(var(--chart-1))",
  },
  top10kAvgPoints: {
    label: "Top 10k",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function AveragePtsLineChart() {
  return (
    <Card>
      <CardHeader>
        {/* <CardTitle>Average Points</CardTitle> */}
        <CardDescription>Average Points</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
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
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="avgPoints"
              type="linear"
              stroke="var(--color-avgPoints)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-avgPoints)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              {/* <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              /> */}
            </Line>
            <Line
              dataKey="top10kAvgPoints"
              type="linear"
              stroke="var(--color-top10kAvgPoints)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-top10kAvgPoints)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              {/* <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              /> */}
            </Line>
            <ChartLegend content={<ChartLegendContent />} />
          </LineChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this week <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing average points per gameweek completed
        </div>
      </CardFooter> */}
    </Card>
  );
}

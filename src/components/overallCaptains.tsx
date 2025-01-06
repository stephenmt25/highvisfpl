"use client"

import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  {
    player_name: "M_Salah",
    value: 55.76,
    fill: "#1f77b4"
  },
  {
    player_name: "Haaland",
    value: 18.33,
    fill: "#ff7f0e"
  },
  {
    player_name: "Palmer",
    value: 8.14,
    fill: "#2ca02c"
  },
  {
    player_name: "Other",
    value: 12.20,
    fill: "#8c564b"
  },
  {
    player_name: "Isak",
    value: 3.36,
    fill: "#d62728"
  },
  {
    player_name: "Watkins",
    value: 2.21,
    fill: "#9467bd"
  }
]



const chartConfig = {
  value: {
    label: "Value",
  },
  M_Salah: {
    label: "M.Salah",
    color: "hsl(var(--chart-1))",
  },
  Haaland: {
    label: "Haaland",
    color: "hsl(var(--chart-2))",
  },
  Palmer: {
    label: "Palmer",
    color: "hsl(var(--chart-3))",
  },
  Other: {
    label: "Other",
    color: "hsl(var(--chart-4))",
  },
  Isak: {
    label: "Isak",
    color: "hsl(var(--chart-5))",
  },
  Watkins: {
    label: "Watkins",
    color: "hsl(var(--chart-6))",
  },
} satisfies ChartConfig

export function OverallCaptains() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="pb-4">
        <CardDescription>Overall Captaincy Selection</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="player_name"
              innerRadius={60}
              label={({ payload, ...props }) => {
                return (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill="hsla(var(--foreground))"
                  >
                    {payload.player_name}
                  </text>
                )
              }}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
      </CardFooter>
    </Card>
  )
}
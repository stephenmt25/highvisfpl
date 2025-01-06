"use client"

import * as React from "react"
import { Label, Pie, PieChart, PolarGrid, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const chartData = [
  {
    player_name: "M_Salah",
    value: 55.76,
    fill: "hsl(224.4 64.3% 32.9%)",
  },
  {
    player_name: "Haaland",
    value: 18.33,
    fill: "hsl(224.3 76.3% 48%)"
  },
  {
    player_name: "Palmer",
    value: 8.14,
    fill: "hsl(217.2 91.2% 59.8%)"
  },
  {
    player_name: "Other",
    value: 12.20,
    fill: "hsl(211.7 96.4% 78.4%)"
  },
  {
    player_name: "Isak",
    value: 3.36,
    fill: "hsl(213.3 96.9% 87.3%)"
  },
  {
    player_name: "Watkins",
    value: 2.21,
    fill: "hsl(213.8 100% 96.9%)"
  }
]



const chartConfig = {
  value: {
    label: "Value",
  },
  M_Salah: {
    label: "M.Salah",
    color: "hsl(224.4 64.3% 32.9%)",
  },
  Haaland: {
    label: "Haaland",
    color: "hsl(224.3 76.3% 48%)",
  },
  Palmer: {
    label: "Palmer",
    color: "hsl(217.2 91.2% 59.8%)",
  },
  Other: {
    label: "Other",
    color: "hsl(211.7 96.4% 78.4%)",
  },
  Isak: {
    label: "Isak",
    color: "hsl(213.3 96.9% 87.3%)",
  },
  Watkins: {
    label: "Watkins",
    color: "hsl(213.8 100% 96.9%)",
  },
} satisfies ChartConfig

export function OverallCaptains() {
  const id = "pie-interactive"
  const [activePlayer, setActivePlayer] = React.useState(chartData[0].player_name)

  const activeIndex = React.useMemo(
    () => chartData.findIndex((item) => item.player_name === activePlayer),
    [activePlayer]
  )
  const player_names = React.useMemo(() => chartData.map((item) => item.player_name), [])
  return (
    <Card data-chart={id} className="flex flex-col">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardDescription>Overall Captaincy</CardDescription>
        </div>
        <Select value={activePlayer} onValueChange={setActivePlayer}>
          <SelectTrigger
            className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Select player_name" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {player_names.map((key) => {
              const config = chartConfig[key as keyof typeof chartConfig]

              if (!config) {
                return null
              }

              return (
                <SelectItem
                  key={key}
                  value={key}
                  className="rounded-lg [&_span]:flex"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-sm"
                      style={{
                        backgroundColor: `var(--color-${key})`,
                      }}
                    />
                    {config?.label}
                  </div>
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[300px]"
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
              innerRadius={80}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-xl font-bold"
                        >
                          {chartData[activeIndex].player_name.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          {chartData[activeIndex].value.toLocaleString()}%
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

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
import { useState } from "react";
import { PlayerPriceLineChart } from "./playerPriceLineChart";

const chartData = [
  { gameweek: 1, fplPoints: 10, goals: 1, assists: 0, xG: 0.8, xA: 0.2, xGi: 1.0, vs: "ARS (H)" },
  { gameweek: 2, fplPoints: 6, goals: 0, assists: 1, xG: 0.3, xA: 0.6, xGi: 0.9, vs: "MUN (A)" },
  { gameweek: 3, fplPoints: 12, goals: 2, assists: 0, xG: 1.5, xA: 0.3, xGi: 1.8, vs: "CHE (H)" },
  { gameweek: 4, fplPoints: 5, goals: 0, assists: 1, xG: 0.2, xA: 0.8, xGi: 1.0, vs: "TOT (A)" },
  { gameweek: 5, fplPoints: 8, goals: 1, assists: 1, xG: 1.2, xA: 0.5, xGi: 1.7, vs: "LIV (H)" },
  { gameweek: 6, fplPoints: 7, goals: 1, assists: 0, xG: 0.9, xA: 0.4, xGi: 1.3, vs: "NEW (A)" },
  { gameweek: 7, fplPoints: 9, goals: 0, assists: 2, xG: 0.4, xA: 1.1, xGi: 1.5, vs: "MCI (H)" },
  { gameweek: 8, fplPoints: 11, goals: 1, assists: 1, xG: 1.3, xA: 0.7, xGi: 2.0, vs: "EVE (A)" },
  { gameweek: 9, fplPoints: 4, goals: 0, assists: 0, xG: 0.2, xA: 0.1, xGi: 0.3, vs: "AVL (H)" },
  { gameweek: 10, fplPoints: 13, goals: 2, assists: 0, xG: 1.7, xA: 0.3, xGi: 2.0, vs: "WOL (A)" },
  { gameweek: 11, fplPoints: 6, goals: 1, assists: 0, xG: 0.8, xA: 0.4, xGi: 1.2, vs: "WHU (H)" },
  { gameweek: 12, fplPoints: 3, goals: 0, assists: 0, xG: 0.1, xA: 0.0, xGi: 0.1, vs: "SOU (A)" },
  { gameweek: 13, fplPoints: 10, goals: 1, assists: 0, xG: 1.0, xA: 0.5, xGi: 1.5, vs: "CRY (H)" },
  { gameweek: 14, fplPoints: 8, goals: 0, assists: 2, xG: 0.6, xA: 1.1, xGi: 1.7, vs: "BHA (A)" },
  { gameweek: 15, fplPoints: 5, goals: 0, assists: 1, xG: 0.3, xA: 0.7, xGi: 1.0, vs: "BRE (H)" },
  { gameweek: 16, fplPoints: 12, goals: 2, assists: 0, xG: 1.4, xA: 0.3, xGi: 1.7, vs: "LEI (A)" },
  { gameweek: 17, fplPoints: 9, goals: 1, assists: 1, xG: 1.0, xA: 0.6, xGi: 1.6, vs: "FUL (H)" },
  { gameweek: 18, fplPoints: 6, goals: 0, assists: 1, xG: 0.5, xA: 0.8, xGi: 1.3, vs: "BOU (A)" },
  { gameweek: 19, fplPoints: 15, goals: 2, assists: 1, xG: 1.8, xA: 1.0, xGi: 2.8, vs: "SHU (H)" },
  { gameweek: 20, fplPoints: 4, goals: 0, assists: 0, xG: 0.2, xA: 0.2, xGi: 0.4, vs: "LUT (A)" },
];



const chartConfig = {
  fplPoints: { label: "Points", color: "hsl(var(--chart-4))" },
  goals: { label: "Goals", color: "hsl(var(--chart-4))" },
  assists: { label: "Assists", color: "hsl(var(--chart-4))" },
  xG: { label: "xG", color: "hsl(var(--chart-4))" },
  xA: { label: "xA", color: "hsl(var(--chart-4))" },
  xGi: { label: "xGi", color: "hsl(var(--chart-4))" },
} satisfies ChartConfig;

export function PlayerStatsBarChart() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("fplPoints");
  const [priceChart, setPriceChart] = useState(false)

  const totals = React.useMemo(() => {
    const keys = Object.keys(chartConfig) as (keyof typeof chartConfig)[];
    const calculatedTotals = keys.reduce((acc, key) => {
      acc[key] = chartData.reduce((sum, curr) => sum + curr[key], 0);
      return acc;
    }, {} as Record<keyof typeof chartConfig, number>);
    return calculatedTotals;
  }, []);

  return (
    <Card className="h-full ">
      <CardHeader className="flex flex-row items-stretch space-y-0 border-b p-0 ">
        <div className="flex flex-1 flex-col justify-center px-6  ">
          {/* <CardTitle>Bar Chart - Interactive</CardTitle> */}
          <CardDescription>
            M. Salah
          </CardDescription>
        </div>
        <div className="flex">
          {Object.keys(chartConfig).map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-3 py-2 text-left border-l data-[active=true]:bg-muted/100"
                onClick={() => { setActiveChart(chart); setPriceChart(false) }}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-sm font-bold">
                  {totals[chart].toLocaleString(undefined, {
                    minimumFractionDigits: chart === "price" ? 1 : 0,
                  })}
                </span>
              </button>
            );
          })}
          <button
            // key={chart}
            data-active={priceChart}
            className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-3 py-2 text-left border-l data-[active=true]:bg-muted/100"
            onClick={() => { setPriceChart(true); }}
          >
            <span className="text-xs text-muted-foreground">
              Price
            </span>
            <span className="text-sm font-bold">
              11.2
            </span>
          </button>
        </div>
      </CardHeader>
      <CardContent className="pb-0 px-2">
        {
          priceChart ?
            <PlayerPriceLineChart />
            :
            <ChartContainer
              config={chartConfig}
              className="aspect-auto h-[275px] w-full"
            >
              <BarChart
                accessibilityLayer
                data={chartData}
                margin={{
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
                  minTickGap={16}

                />
                <YAxis
                  hide
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  domain={[0, "dataMax + 1"]}
                  label={{
                    value: chartConfig[activeChart].label,
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      className="w-[150px]"
                      nameKey="views"
                      labelFormatter={(value, payload) => {
                        const opponent = payload?.[0]?.payload?.vs;
                        return opponent ? `Opponent: ${opponent}` : `Gameweek ${value}`;
                      }}
                    />
                  }
                />

                <Bar
                  dataKey={activeChart}
                  fill={`var(--color-${activeChart})`}
                  name={chartConfig[activeChart].label}
                />
              </BarChart>
            </ChartContainer>
        }
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground justify-center">
        Gameweeks
      </CardFooter>
    </Card>
  );
}
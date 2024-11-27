"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An interactive bar chart";

const chartData = [
  { date: "2024-04-01", Active: 222, Inactive: 150 },
  { date: "2024-04-02", Active: 97, Inactive: 180 },
  { date: "2024-04-03", Active: 167, Inactive: 120 },
  { date: "2024-04-04", Active: 242, Inactive: 260 },
  { date: "2024-04-05", Active: 373, Inactive: 290 },
  { date: "2024-04-06", Active: 301, Inactive: 340 },
  { date: "2024-04-07", Active: 245, Inactive: 180 },
  { date: "2024-04-08", Active: 409, Inactive: 320 },
  { date: "2024-04-09", Active: 59, Inactive: 110 },
  { date: "2024-04-10", Active: 261, Inactive: 190 },
  { date: "2024-04-11", Active: 327, Inactive: 350 },
  { date: "2024-04-12", Active: 292, Inactive: 210 },
  { date: "2024-04-13", Active: 342, Inactive: 380 },
  { date: "2024-04-14", Active: 137, Inactive: 220 },
  { date: "2024-04-15", Active: 120, Inactive: 170 },
  { date: "2024-04-16", Active: 138, Inactive: 190 },
  { date: "2024-04-17", Active: 446, Inactive: 360 },
  { date: "2024-04-18", Active: 364, Inactive: 410 },
  { date: "2024-04-19", Active: 243, Inactive: 180 },
  { date: "2024-04-20", Active: 89, Inactive: 150 },
  { date: "2024-04-21", Active: 137, Inactive: 200 },
  { date: "2024-04-22", Active: 224, Inactive: 170 },
  { date: "2024-04-23", Active: 138, Inactive: 230 },
  { date: "2024-04-24", Active: 387, Inactive: 290 },
  { date: "2024-04-25", Active: 215, Inactive: 250 },
  { date: "2024-04-26", Active: 75, Inactive: 130 },
  { date: "2024-04-27", Active: 383, Inactive: 420 },
  { date: "2024-04-28", Active: 122, Inactive: 180 },
  { date: "2024-04-29", Active: 315, Inactive: 240 },
  { date: "2024-04-30", Active: 454, Inactive: 380 },
  { date: "2024-05-01", Active: 165, Inactive: 220 },
  { date: "2024-05-02", Active: 293, Inactive: 310 },
  { date: "2024-05-03", Active: 247, Inactive: 190 },
  { date: "2024-05-04", Active: 385, Inactive: 420 },
  { date: "2024-05-05", Active: 481, Inactive: 390 },
  { date: "2024-05-06", Active: 498, Inactive: 520 },
  { date: "2024-05-07", Active: 388, Inactive: 300 },
  { date: "2024-05-08", Active: 149, Inactive: 210 },
  { date: "2024-05-09", Active: 227, Inactive: 180 },
  { date: "2024-05-10", Active: 293, Inactive: 330 },
  { date: "2024-05-11", Active: 335, Inactive: 270 },
  { date: "2024-05-12", Active: 197, Inactive: 240 },
  { date: "2024-05-13", Active: 197, Inactive: 160 },
  { date: "2024-05-14", Active: 448, Inactive: 490 },
  { date: "2024-05-15", Active: 473, Inactive: 380 },
  { date: "2024-05-16", Active: 338, Inactive: 400 },
  { date: "2024-05-17", Active: 499, Inactive: 420 },
  { date: "2024-05-18", Active: 315, Inactive: 350 },
  { date: "2024-05-19", Active: 235, Inactive: 180 },
  { date: "2024-05-20", Active: 177, Inactive: 230 },
  { date: "2024-05-21", Active: 82, Inactive: 140 },
  { date: "2024-05-22", Active: 81, Inactive: 120 },
  { date: "2024-05-23", Active: 252, Inactive: 290 },
  { date: "2024-05-24", Active: 294, Inactive: 220 },
  { date: "2024-05-25", Active: 201, Inactive: 250 },
  { date: "2024-05-26", Active: 213, Inactive: 170 },
  { date: "2024-05-27", Active: 420, Inactive: 460 },
  { date: "2024-05-28", Active: 233, Inactive: 190 },
  { date: "2024-05-29", Active: 78, Inactive: 130 },
  { date: "2024-05-30", Active: 340, Inactive: 280 },
  { date: "2024-05-31", Active: 178, Inactive: 230 },
  { date: "2024-06-01", Active: 178, Inactive: 200 },
  { date: "2024-06-02", Active: 470, Inactive: 410 },
  { date: "2024-06-03", Active: 103, Inactive: 160 },
  { date: "2024-06-04", Active: 439, Inactive: 380 },
  { date: "2024-06-05", Active: 88, Inactive: 140 },
  { date: "2024-06-06", Active: 294, Inactive: 250 },
  { date: "2024-06-07", Active: 323, Inactive: 370 },
  { date: "2024-06-08", Active: 385, Inactive: 320 },
  { date: "2024-06-09", Active: 438, Inactive: 480 },
  { date: "2024-06-10", Active: 155, Inactive: 200 },
  { date: "2024-06-11", Active: 92, Inactive: 150 },
  { date: "2024-06-12", Active: 492, Inactive: 420 },
  { date: "2024-06-13", Active: 81, Inactive: 130 },
  { date: "2024-06-14", Active: 426, Inactive: 380 },
  { date: "2024-06-15", Active: 307, Inactive: 350 },
  { date: "2024-06-16", Active: 371, Inactive: 310 },
  { date: "2024-06-17", Active: 475, Inactive: 520 },
  { date: "2024-06-18", Active: 107, Inactive: 170 },
  { date: "2024-06-19", Active: 341, Inactive: 290 },
  { date: "2024-06-20", Active: 408, Inactive: 450 },
  { date: "2024-06-21", Active: 169, Inactive: 210 },
  { date: "2024-06-22", Active: 317, Inactive: 270 },
  { date: "2024-06-23", Active: 480, Inactive: 530 },
  { date: "2024-06-24", Active: 132, Inactive: 180 },
  { date: "2024-06-25", Active: 141, Inactive: 190 },
  { date: "2024-06-26", Active: 434, Inactive: 380 },
  { date: "2024-06-27", Active: 448, Inactive: 490 },
  { date: "2024-06-28", Active: 149, Inactive: 200 },
  { date: "2024-06-29", Active: 103, Inactive: 160 },
  { date: "2024-06-30", Active: 446, Inactive: 400 },
];

const chartConfig = {
  views: {
    label: "Acivity Views",
  },
  Active: {
    label: "Active",
    color: "hsl(20.5 90.2% 48.2%)",
  },
  Inactive: {
    label: "Inactive",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Charts() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("Active");

  const total = React.useMemo(
    () => ({
      Active: chartData.reduce((acc, curr) => acc + curr.Active, 0),
      Inactive: chartData.reduce((acc, curr) => acc + curr.Inactive, 0),
    }),
    []
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Bar Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total active and inactive users from last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["Active", "Inactive"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
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
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

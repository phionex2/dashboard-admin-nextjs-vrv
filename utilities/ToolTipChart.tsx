"use client"

import { Bar, BarChart, XAxis, ResponsiveContainer } from "recharts"
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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { date: "2024-07-15", running: 450, swimming: 300 },
  { date: "2024-07-16", running: 380, swimming: 420 },
  { date: "2024-07-17", running: 520, swimming: 120 },
  { date: "2024-07-18", running: 140, swimming: 550 },
  { date: "2024-07-19", running: 600, swimming: 350 },
  { date: "2024-07-20", running: 480, swimming: 400 },
]

const chartConfig = {
  running: {
    label: "Active",
    color: "#E21D48",
  },
  swimming: {
    label: "Inactive",
    color: "#FBD5DA",
  },
} satisfies ChartConfig

export function TooltipChartDemo() {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader>
        <CardTitle>Status Per Day</CardTitle>
        <CardDescription>
          Graph of the status of user per day
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData}>
              <XAxis
                dataKey="date"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => {
                  return new Date(value).toLocaleDateString("en-US", {
                    weekday: "short",
                  })
                }}
              />
              <Bar
                dataKey="running"
                stackId="a"
                fill={chartConfig.running.color}
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="swimming"
                stackId="a"
                fill={chartConfig.swimming.color}
                radius={[4, 4, 0, 0]}
              />
              <ChartTooltip
                content={<ChartTooltipContent />}
                cursor={false}
                defaultIndex={1}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

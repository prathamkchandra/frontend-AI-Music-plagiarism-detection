"use client"

import { LabelList, Pie, PieChart } from "recharts"

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

export const description = "A pie chart with a label list"

const chartConfig = {
  value: {
    label: "Percentage",
  },
  Similarity: {
    label: "Similarity",
    color: "var(--chart-1)",
  },
  Unique: {
    label: "Unique",
    color: "var(--chart-2)",
  },
  } satisfies ChartConfig

export function ChartPieLabelList({chartData}:{chartData: Record<string, string | number>[]}) {
    console.log("Whats in recevied Data", chartData)
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Representation of Similarity Result</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-text]:fill-background shawdow-3xl mx-auto aspect-square max-h-[250px] w-140"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="name" hideLabel />}
            />
            <Pie data={chartData} dataKey="value">
              <LabelList
                dataKey="name"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
           Total Similarity with our dataset.
        </div>
      </CardFooter>
    </Card>
  )
}

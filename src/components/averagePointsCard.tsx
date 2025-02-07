import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TrendingDown } from "lucide-react"

interface AveragePointsCardProps {
  avgpts: number;
}

export function AveragePointsCard({ avgpts }: AveragePointsCardProps) {
  return (
        <Card className="">
          <CardHeader className="pb-1" >
            <CardDescription className="">Average GW Points</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <h1 className=" text-3xl">{avgpts || 0}</h1>
          </CardContent> 
          <CardFooter className="flex text-sm  gap-2 leading-none">
            down by 8.3% <TrendingDown className="h-4 w-4" />
          </CardFooter>
        </Card>
  )
}
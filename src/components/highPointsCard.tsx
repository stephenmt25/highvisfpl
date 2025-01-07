import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

interface HighPointsCardProps {
  highpts: number;
}

export function HighPointsCard({ highpts }: HighPointsCardProps) {
  return (
        <Card className="">
          <CardHeader className="pb-1" >
            <CardDescription className="">Highest GW Points</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <h1 className=" text-3xl">{highpts || 0}</h1>
          </CardContent> 
          <CardFooter className="flex text-sm gap-2 leading-none">
            up by 5.2% <TrendingUp className="h-4 w-4" />
          </CardFooter>
        </Card>
  )
}
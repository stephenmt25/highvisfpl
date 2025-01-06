import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"


export function GameWeekCard() {
  return (
        <Card className="">
          <CardHeader className="pb-1" >
            <CardDescription className="">Live Gameweek</CardDescription>
          </CardHeader>
          <CardContent className="pb-3">
            <h1 className=" text-3xl">20</h1>
          </CardContent>
          <CardFooter className="flex  leading-none ">
              <Progress value={67}/>
          </CardFooter>
        </Card>
  )
}
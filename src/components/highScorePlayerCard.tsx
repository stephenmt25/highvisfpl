import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export function HighestScoringPlayer() {
  return (
        <Card className="pb-0">
          <CardHeader className="pb-1" >
            <CardDescription className="text-xs">Highest Scoring Player</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <h1 className="text-xl whitespace-nowrap">Mbuemo</h1>
          </CardContent>
          <CardFooter className=" ">
            BRE v BHA
          </CardFooter>
        </Card>
  )
}
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface MostCaptCardProps {
  playername: string;
}

export function MostCaptCard({ playername }: MostCaptCardProps) {
  return (
    <Card className="">
      <CardHeader className="pb-1" >
        <CardDescription className="">Most Captained</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <h1
          className="text-xl whitespace"
        >
          {playername}
        </h1>
      </CardContent>
      <CardFooter className="flex text-sm  gap-2 leading-none">
        MUN v LIV
      </CardFooter>
    </Card>
  )
}
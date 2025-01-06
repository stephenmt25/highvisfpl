import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export function MostCaptCard() {
  return (
    <Card className="">
      <CardHeader className="pb-1" >
        <CardDescription className="">Most Captained</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <h1
          className="text-xl whitespace"
        >
          B. Fernandes
        </h1>
      </CardContent>
      <CardFooter className="flex text-sm  gap-2 leading-none">
        MUN v LIV
      </CardFooter>
    </Card>
  )
}
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export function ScafCard() {
  return (
        <Card className="">
          <CardHeader className="pb-1" >
            <CardDescription className="">Title</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <h1 className=" text-3xl">Content</h1>
          </CardContent>
          <CardFooter className="flex justify-between">
          </CardFooter>
        </Card>
  )
}
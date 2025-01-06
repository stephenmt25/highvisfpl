import { AveragePointsCard } from "@/components/averagePointsCard"
import { HighPointsCard } from "@/components/highPointsCard"
import { HighestScoringPlayer } from "@/components/highScorePlayerCard"
import { MostCaptCard } from "@/components/mostCaptCard"
import { OverallCaptains } from "@/components/overallCaptains"
import { OverallPointsDist } from "@/components/overallPointsDist"
import { PaginationDemo } from "@/components/pagination1"
import { TableDemo } from "@/components/tempTable"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'
import highVisFPL from "../../public/highVisFPL.png"


export default function Page() {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b">
        <Image src={highVisFPL} alt="Logo" width={75} height={25} />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <div className="ml-auto flex items-center gap-2">
          <Input type="managerId" placeholder="Manager Id" />
          <Button variant="secondary">Get Data</Button>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className=" p-4 grid auto-rows-min col-span-2  gap-4 aspect-video rounded-xl bg-muted/50">
            <div className="flex">
              <h1 className="text-3xl">Gameweek 20</h1>
              <div className="ml-auto">
                <PaginationDemo />
              </div>
            </div>
            <Separator />
            <div className=" grid auto-rows-min gap-4 md:grid-cols-4 ">
              {/* <GameWeekCard /> */}
              <HighPointsCard />
              <AveragePointsCard />
              <MostCaptCard />
              <HighestScoringPlayer />
              <div className="col-span-2 ">
                <OverallPointsDist />
              </div>
              <div className="col-span-2 ">
                <OverallCaptains />
              </div>
            </div>
          </div>
          <div className="aspect-video rounded-xl bg-muted/50">
            <TableDemo />
          </div>
        </div>
        {/* <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}
      </div>
    </>
  )
}

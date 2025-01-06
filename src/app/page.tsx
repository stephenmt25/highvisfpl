import { AppSidebar } from "@/components/app-sidebar"
import { AveragePointsCard } from "@/components/averagePointsCard"
import { GameWeekCard } from "@/components/gwCard"
import { HighPointsCard } from "@/components/highPointsCard"
import { HighestScoringPlayer } from "@/components/highScorePlayerCard"
import { MostCaptCard } from "@/components/mostCaptCard"
import { OverallCaptains } from "@/components/overallCaptains"
import { OverallPointsDist } from "@/components/overallPointsDist"
import { PaginationDemo } from "@/components/pagination1"
import { ScafCard } from "@/components/scaf-card"
import { TableDemo } from "@/components/tempTable"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Table } from "lucide-react"
import { Separator } from "@/components/ui/separator"


export default function Page() {
  return (
    <SidebarProvider>
      {/* <AppSidebar /> */}
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            {/* <SidebarTrigger /> */}
            highVisFPL
            <Separator orientation="vertical" className="mr-2 h-4" />
            {/* <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb> */}
            <div className="ml-auto flex items-center gap-2">
              <Input type="managerId" placeholder="Manager Id" />
              <Button variant="secondary">Get Data</Button>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div> */}
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div  className=" p-4 grid auto-rows-min col-span-2  gap-4 aspect-video rounded-xl bg-muted/50">
              <div  className="flex">
                <h1 className="text-3xl">Gameweek 20</h1>
                <div className="ml-auto">
                  <PaginationDemo  />
                </div>
              </div>
              <Separator />
              <div className=" grid auto-rows-min gap-4 md:grid-cols-5 ">
                <GameWeekCard />
                <HighPointsCard />
                <AveragePointsCard />
                <MostCaptCard />
                <HighestScoringPlayer />
                <div className="col-span-2 ">
                  <OverallPointsDist />
                </div>
                <div className="col-span-3 ">
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
      </SidebarInset>
    </SidebarProvider>
  )
}

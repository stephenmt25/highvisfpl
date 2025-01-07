'use client'

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
import { useState } from "react"
import { managerService } from "./services/api/manager.service"
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { ErrorBoundary } from "@/components/ErrorBoundary"
import { ManagerStats } from "@/components/managerStats"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 300000, // 5 minutes
    },
  },
});

export default function Page() {
  const [managerId, setManagerId] = useState<number | null>(null);
  const [manager, setManager] = useState<any | null>(null);

  const handleEnterClick = () => {
    if (managerId !== null) {
      setManager(managerId);
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <Image src={highVisFPL} alt="Logo" width={75} height={25} />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="p-4 ml-auto flex items-center gap-2">
            <Input onChange={(e) => setManagerId(parseInt(e.target.value))} type="managerId" placeholder="Manager Id" />
            <Button onClick={handleEnterClick} variant="secondary">Get Data</Button>
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
              {manager ? <ManagerStats managerId={manager} /> :
              <div className=" grid auto-rows-min gap-4 md:grid-cols-4 ">
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
}
            </div>
            <div className="aspect-video rounded-xl bg-muted/50">
              <TableDemo />
            </div>
          </div>
        </div>
      </ErrorBoundary>
    </QueryClientProvider>
  )
}

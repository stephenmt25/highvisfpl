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
import { useState, useEffect } from "react"
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { ErrorBoundary } from "@/components/ErrorBoundary"
import { ManagerStats } from "@/components/managerStats"
import { createClient } from '@/utils/supabase/client'
import { Skeleton } from "@/components/ui/skeleton"
import { TempBarChart } from "@/components/templateBarChart"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 300000, // 5 minutes
    },
  },
});

export default function Page1() {
  const [managerId, setManagerId] = useState<number | null>(null);
  const [manager, setManager] = useState<any | null>(null);
  const [gameweekData, setGameweekData] = useState<any[] | null>(null)
  const [highScorePlayer, setHighScorePlayer] = useState<any | null>(null)
  const [mostCaptPlayer, setMostCaptPlayer] = useState<any | null>(null)
  const supabase = createClient()
  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('fploveralldata').select()
      setGameweekData(data)
    }
    getData()
  }, [])

  const handleEnterClick = () => {
    if (managerId !== null) {
      setManager(managerId);
    }
  };

  const currentGW = gameweekData?.filter((gw) => gw.is_current === "true")[0]

  useEffect(() => {
    const getHighScorePlayer = async () => {
      const { data } = await supabase.from('plplayerdata')
        .select()
        .eq('id', currentGW?.top_element);

      setHighScorePlayer(data)
    }
    getHighScorePlayer()
  }, [currentGW])

  useEffect(() => {
    const getMostCaptPlayer = async () => {
      const { data } = await supabase.from('plplayerdata')
        .select()
        .eq('id', currentGW?.most_captained);
      console.log(data)
      setMostCaptPlayer(data)
    }
    getMostCaptPlayer()
  }, [currentGW])




  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <header className="flex h-16 shrink-0 items-center gap-4">
          <span className="text-black text-5xl mt-5 ml-7">Overall Data</span>
          <div className="p-8 mt-5 ml-auto flex items-center gap-2">
            <Input className="bg-gray-200" onChange={(e) => setManagerId(parseInt(e.target.value))} type="managerId" placeholder="Manager Id" />
            <Button onClick={handleEnterClick} variant="secondary">Get Data</Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className=" p-4 grid auto-rows-min col-span-2  gap-2 aspect-video rounded-xl text-black">
              <div className="flex">
                <h1 className="text-3xl">{currentGW?.name || 'Current Gameweek'} / 38</h1>
                <div className="ml-auto">
                  <PaginationDemo />
                </div>
              </div>
              <Separator className="h-[0.5px] bg-purple-900" />
              {manager ? <ManagerStats managerId={manager} /> :
                <div className="grid auto-rows-min gap-4 md:grid-cols-4 ">
                  <div className="col-span-2 ">

                      <OverallCaptains />

                  </div>
                  <div className="col-span-2 grid gap-2 md:grid-cols-2">

                    <HighPointsCard highpts={currentGW?.highest_score} />
                    <AveragePointsCard avgpts={currentGW?.average_entry_score} />
                    {mostCaptPlayer ? <MostCaptCard playername={mostCaptPlayer[0].web_name} /> : <Skeleton className=" rounded-xl" />}
                    {highScorePlayer ? <HighestScoringPlayer playername={highScorePlayer[0].web_name} /> : <Skeleton className=" rounded-xl" />}
                  </div>
                  <div className="col-span-2 ">
                    <OverallPointsDist />
                  </div>
                  <div className="col-span-2 ">
                    <TempBarChart />
                  </div>

                </div>
              }
            </div>
            <div className="p-4">
              <TableDemo />
            </div>
          </div>
        </div>
      </ErrorBoundary>
    </QueryClientProvider>
  )
}

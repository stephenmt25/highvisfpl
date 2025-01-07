import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TrendingDown } from "lucide-react"
import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'



export function AveragePointsCard() {
  const [week, setWeek] = useState<any[] | null>(null)
  const supabase = createClient()
  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('fploveralldata').select()
      setWeek(data)
    }
    getData()
  }, [])

  return (
        <Card className="">
          <CardHeader className="pb-1" >
            <CardDescription className="">Average GW Points</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <h1 className=" text-3xl">{week?.[19]?.average_entry_score || 0}</h1>
          </CardContent> 
          <CardFooter className="flex text-sm  gap-2 leading-none">
            down by 8.3% <TrendingDown className="h-4 w-4" />
          </CardFooter>
        </Card>
  )
}
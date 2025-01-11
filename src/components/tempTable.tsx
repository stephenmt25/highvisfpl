import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Separator } from "./ui/separator"

const data = [
  {
    rank: "1",
    teamName: "The Invincibles",
    managerName: "Alex Ferguson",
    gwPoints: "85",
    totalPoints: "1020"
  },
  {
    rank: "2",
    teamName: "Goal Diggers",
    managerName: "Pep Guardiola",
    gwPoints: "78",
    totalPoints: "1012"
  },
  {
    rank: "3",
    teamName: "Penalty Kings",
    managerName: "Jurgen Klopp",
    gwPoints: "80",
    totalPoints: "1008"
  },
  {
    rank: "4",
    teamName: "Clean Sheet Warriors",
    managerName: "Jose Mourinho",
    gwPoints: "72",
    totalPoints: "995"
  },
  {
    rank: "5",
    teamName: "The Flying Dutchmen",
    managerName: "Louis van Gaal",
    gwPoints: "67",
    totalPoints: "980"
  },
  {
    rank: "6",
    teamName: "Tactical Masters",
    managerName: "Antonio Conte",
    gwPoints: "75",
    totalPoints: "970"
  },
  {
    rank: "7",
    teamName: "Striker’s Army",
    managerName: "Carlo Ancelotti",
    gwPoints: "65",
    totalPoints: "950"
  },
  {
    rank: "8",
    teamName: "Midfield Magicians",
    managerName: "Zinedine Zidane",
    gwPoints: "69",
    totalPoints: "920"
  },
  {
    rank: "9",
    teamName: "Defensive Masters",
    managerName: "Rafael Benitez",
    gwPoints: "60",
    totalPoints: "900"
  },
  {
    rank: "10",
    teamName: "Super Strikers",
    managerName: "Mauricio Pochettino",
    gwPoints: "63",
    totalPoints: "880"
  }
];


export function TableDemo() {
  return (
    <Table className='text-black p-4 rounded-xl bg-white bg-opacity-80'>
      <TableCaption className="text-purple-900 text-xl">Overall Top 10 Managers</TableCaption>
      <TableHeader className="bg-purple-900 rounded-xl">
        <TableRow>
          <TableHead className='text-center text-white '>Rank</TableHead>
          <TableHead className="w-[300px] text-white">Team & Manager</TableHead>
          <TableHead className="text-center text-white">GW </TableHead>
          <TableHead className="text-right text-white">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((team, index) => (
          <TableRow key={index} className='border-0'>
            <TableCell className="font-medium text-center">{team.rank}</TableCell>
            <TableCell className="text-left">
              <div className="font-medium">{team.teamName}</div>
              <div className="text-gray-600 text-xs">{team.managerName}</div>
            </TableCell>
            <TableCell className="text-center">{team.gwPoints}</TableCell>
            <TableCell className="text-right">{team.totalPoints}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

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

const invoices = [
  {
    invoice: "1",
    paymentStatus: "Paid",
    totalAmount: "250",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "2",
    paymentStatus: "Pending",
    totalAmount: "150",
    paymentMethod: "PayPal",
  },
  {
    invoice: "3",
    paymentStatus: "Unpaid",
    totalAmount: "350",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "4",
    paymentStatus: "Paid",
    totalAmount: "450",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "5",
    paymentStatus: "Paid",
    totalAmount: "550",
    paymentMethod: "PayPal",
  },
  {
    invoice: "6",
    paymentStatus: "Pending",
    totalAmount: "200",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "7",
    paymentStatus: "Unpaid",
    totalAmount: "300",
    paymentMethod: "Credit Card",
  },
]

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
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice} className='border-0'>
            <TableCell className="font-medium text-center">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell className="text-center">{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

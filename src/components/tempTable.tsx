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
  {
    invoice: "8",
    paymentStatus: "Unpaid",
    totalAmount: "300",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "9",
    paymentStatus: "Unpaid",
    totalAmount: "300",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "10",
    paymentStatus: "Unpaid",
    totalAmount: "300",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "11",
    paymentStatus: "Unpaid",
    totalAmount: "300",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "12",
    paymentStatus: "Unpaid",
    totalAmount: "300",
    paymentMethod: "Credit Card",
  },
]

export function TableDemo() {
  return (

    <div className="p-4">
      <h1 className="text-2xl">Overall League Table</h1>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Rank</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>Manager</TableHead>
            <TableHead className="text-right">GW Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
      <TableRow>
        <TableCell colSpan={3}>Total</TableCell>
        <TableCell className="text-right">$2,500.00</TableCell>
      </TableRow>
    </TableFooter> */}
      </Table>
    </div>
  )
}

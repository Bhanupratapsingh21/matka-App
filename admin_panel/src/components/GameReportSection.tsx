import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const reportData = [
  { label: "Total Bid Amount", amount: "54263 ₹", color: "bg-white" },
  { label: "Withdraw Request", amount: "17900 ₹", color: "bg-white" },
  { label: "Total Winning Amount", amount: "44020 ₹", color: "bg-white" },
  { label: "Total Deposit ( UPI )", amount: "19689 ₹", color: "bg-white" },
  {
    label: "Total Profit Amount",
    amount: "10243 ₹",
    color: "bg-green-600 text-white",
  },
  { label: "Add Funds ( Manually )", amount: "3700 ₹", color: "bg-white" },
];

export default function GameReportSection() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Game Report</h3>

      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date
          </label>
          <Input type="date" defaultValue="2025-07-15" />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Game Name
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="kalyan">Kalyan</SelectItem>
              <SelectItem value="mumbai">Mumbai</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end gap-2">
          <Button className="bg-blue-600 hover:bg-blue-700">Get Report</Button>
          <Button variant="destructive">CLEAR</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reportData.map((item, index) => (
          <Card key={index} className={item.color}>
            <CardContent className="p-4 flex justify-between items-center">
              <span className="font-medium">{item.label}</span>
              <div className="flex items-center gap-2">
                <span className="font-bold">{item.amount}</span>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-blue-600 bg-transparent"
                >
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

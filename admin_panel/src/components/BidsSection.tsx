import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const bidCards = [
  { ank: 0, bids: 0, amount: 0, color: "bg-blue-500" },
  { ank: 1, bids: 0, amount: 0, color: "bg-green-500" },
  { ank: 2, bids: 0, amount: 0, color: "bg-blue-400" },
  { ank: 3, bids: 0, amount: 0, color: "bg-orange-500" },
  { ank: 4, bids: 0, amount: 0, color: "bg-purple-500" },
  { ank: 5, bids: 0, amount: 0, color: "bg-red-500" },
  { ank: 6, bids: 0, amount: 0, color: "bg-pink-500" },
  { ank: 7, bids: 0, amount: 0, color: "bg-indigo-500" },
  { ank: 8, bids: 0, amount: 0, color: "bg-pink-600" },
  { ank: 9, bids: 0, amount: 0, color: "bg-teal-500" },
];

export default function BidsSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          Total Bids On Single Ank Of Date 15 Jul 2025
        </h3>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Game Name
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="-Select Game Name-" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="kalyan">Kalyan</SelectItem>
              <SelectItem value="mumbai">Mumbai</SelectItem>
              <SelectItem value="rajdhani">Rajdhani</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Market Time
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="-Select Market Time-" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="close">Close</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end">
          <Button className="bg-blue-600 hover:bg-blue-700">Get</Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {bidCards.map((card) => (
          <Card key={card.ank} className="text-center">
            <CardContent className="p-4">
              <div className="text-sm text-blue-600 mb-2">
                Total Bids {card.bids}
              </div>
              <div className="text-2xl font-bold mb-2">{card.bids}</div>
              <div className="text-sm text-gray-600 mb-3">Total Bid Amount</div>
              <div
                className={`${card.color} text-white py-2 rounded font-medium`}
              >
                Ank {card.ank}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

export default function WithdrawReport() {
  const withdrawRequests = [
    {
      id: 1,
      name: "Dnyanes",
      mobile: "9834410945",
      amount: 1000,
      date: "17 Jul 2025",
      time: "08:40 AM",
      remark: "Withdraw Amount From 9834410945 ( PhonePe )",
      status: "success",
    },
    {
      id: 2,
      name: "Sudhaka",
      mobile: "8978083044",
      amount: 2300,
      date: "17 Jul 2025",
      time: "05:51 AM",
      remark: "Withdraw Amount From 8978083044 ( PhonePe )",
      status: "success",
    },
    {
      id: 3,
      name: "mnagesh",
      mobile: "9618767132",
      amount: 2000,
      date: "16 Jul 2025",
      time: "18:05 PM",
      remark: "Withdraw Amount From NAGESH MADIGA 425753257709 SIBIN0002725",
      status: "success",
    },
    {
      id: 4,
      name: "rajan",
      mobile: "7020237017",
      amount: 1000,
      date: "16 Jul 2025",
      time: "17:19 PM",
      remark:
        "Withdraw Amount From RAJAN ASHOK MAYEKAR 026305300002510 SIBL0000263",
      status: "success",
    },
    {
      id: 5,
      name: "chetan",
      mobile: "7096479788",
      amount: 1500,
      date: "16 Jul 2025",
      time: "09:21 AM",
      remark: "Withdraw Amount From 7096479788 ( PhonePe )",
      status: "success",
    },
    {
      id: 6,
      name: "pappu",
      mobile: "9021840738",
      amount: 5000,
      date: "16 Jul 2025",
      time: "09:10 AM",
      remark: "Withdraw Amount From 9021840738 ( Google Pay )",
      status: "success",
    },
    {
      id: 7,
      name: "laxman",
      mobile: "9301371642",
      amount: 2000,
      date: "15 Jul 2025",
      time: "18:24 PM",
      remark: "Withdraw Amount From LAKSHMAN SINGH YADAV 930137642 ALSP0000001",
      status: "success",
    },
    {
      id: 8,
      name: "ramesh",
      mobile: "7471107331",
      amount: 1300,
      date: "15 Jul 2025",
      time: "17:32 PM",
      remark: "Withdraw Amount From RAMESH GOND 273011004401B UCBA0002713",
      status: "success",
    },
    {
      id: 9,
      name: "Mallapp",
      mobile: "8970056648",
      amount: 2500,
      date: "15 Jul 2025",
      time: "15:42 PM",
      remark: "Withdraw Amount From 8970056648 ( PhonePe )",
      status: "success",
    },
    {
      id: 10,
      name: "RajuBeg",
      mobile: "8116169620",
      amount: 1100,
      date: "15 Jul 2025",
      time: "15:33 PM",
      remark: "Withdraw Amount From 8116169620 ( PhonePe )",
      status: "success",
    },
    {
      id: 11,
      name: "Dnyanes",
      mobile: "9834410945",
      amount: 1000,
      date: "15 Jul 2025",
      time: "13:10 PM",
      remark: "Withdraw Amount From 9834410945 ( PhonePe )",
      status: "success",
    },
    {
      id: 12,
      name: "thippes",
      mobile: "8197308558",
      amount: 2000,
      date: "15 Jul 2025",
      time: "12:00 PM",
      remark: "Withdraw Amount From 8197308558 ( PhonePe )",
      status: "success",
    },
    {
      id: 13,
      name: "mathesh",
      mobile: "7488491262",
      amount: 1000,
      date: "15 Jul 2025",
      time: "",
      remark: "Withdraw Amount From 7488491262",
      status: "success",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Withdraw Report Form */}
      <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Withdraw Report
        </h2>
        <div className="flex gap-4 items-end">
          <div className="flex-1 max-w-xs">
            <Label htmlFor="date" className="text-sm text-gray-600 mb-2 block">
              Date
            </Label>
            <div className="relative">
              <Input
                id="date"
                type="text"
                defaultValue="07/17/2025"
                className="pr-10"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600 px-8">Submit</Button>
        </div>
      </div>

      {/* Withdraw Request List */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            Withdraw Request List
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mobile
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Remark
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {withdrawRequests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {request.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
                      {request.name}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                    {request.mobile}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {request.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div>
                      <div>{request.date}</div>
                      {request.time && (
                        <div className="text-xs text-gray-500">
                          {request.time}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">
                    <div className="truncate" title={request.remark}>
                      {request.remark}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800 hover:bg-green-100"
                    >
                      success
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button
                      size="sm"
                      className="bg-green-500 hover:bg-green-600 text-white"
                    >
                      Success
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

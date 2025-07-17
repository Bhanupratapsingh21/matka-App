import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageCircle, ChevronUp } from "lucide-react";

export default function WithdrawRequest() {
  const withdrawRequests = [
    {
      id: 1,
      name: "bhupend",
      mobile: "9340369166",
      amount: 1200,
      date: "17 Jul 2025",
      time: "16:17 PM",
      remark:
        "Withdraw Amount From BHUPENDRA KUMAR NAMDEV 31838645075 SBIN0008274",
      status: "pending",
    },
    {
      id: 2,
      name: "Nataraj",
      mobile: "8549016656",
      amount: 1500,
      date: "17 Jul 2025",
      time: "12:43 PM",
      remark: "Withdraw Amount From 8549016656 ( PhonePe )",
      status: "pending",
    },
    {
      id: 3,
      name: "thippes",
      mobile: "8197308558",
      amount: 19000,
      date: "17 Jul 2025",
      time: "10:01 AM",
      remark: "Withdraw Amount From 8197308558 ( Paytm )",
      status: "pending",
    },
    {
      id: 4,
      name: "Dnyanes",
      mobile: "9834410945",
      amount: 1000,
      date: "17 Jul 2025",
      time: "08:40 AM",
      remark: "Withdraw Amount From 9834410945 ( PhonePe )",
      status: "success",
    },
    {
      id: 5,
      name: "Sudhaka",
      mobile: "8978083044",
      amount: 2300,
      date: "17 Jul 2025",
      time: "05:51 AM",
      remark: "Withdraw Amount From 8978083044 ( PhonePe )",
      status: "success",
    },
    {
      id: 6,
      name: "mnagesh",
      mobile: "9618767132",
      amount: 2000,
      date: "16 Jul 2025",
      time: "18:05 PM",
      remark: "Withdraw Amount From NAGESH MADIGA 425753257709 SBIN0002725",
      status: "success",
    },
    {
      id: 7,
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
      id: 8,
      name: "Dnyanes",
      mobile: "9834410945",
      amount: 1000,
      date: "16 Jul 2025",
      time: "16:48 PM",
      remark: "Withdraw Amount From 9834410945 ( PhonePe )",
      status: "decline",
    },
    {
      id: 9,
      name: "chetan",
      mobile: "7096479788",
      amount: 1000,
      date: "16 Jul 2025",
      time: "13:47 PM",
      remark: "Withdraw Amount From 7096479788 ( PhonePe )",
      status: "decline",
    },
    {
      id: 10,
      name: "Sriniva",
      mobile: "6361160136",
      amount: 8000,
      date: "16 Jul 2025",
      time: "13:18 PM",
      remark: "Withdraw Amount From 6361160136 ( PhonePe )",
      status: "pending",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
            pending
          </Badge>
        );
      case "success":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            success
          </Badge>
        );
      case "decline":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            decline
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        {/* Withdraw Request List */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Withdraw Request List
            </h2>

            {/* Controls */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Show</span>
                <Select defaultValue="10">
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-sm text-gray-600">entries</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Search:</span>
                <Input placeholder="" className="w-48" />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center gap-1">
                      # <ChevronUp className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center gap-1">
                      Name <ChevronUp className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center gap-1">
                      Mobile <ChevronUp className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center gap-1">
                      Amount <ChevronUp className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center gap-1">
                      Date <ChevronUp className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Remark
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center gap-1">
                      Status <ChevronUp className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center gap-1">
                      Action <ChevronUp className="h-3 w-3" />
                    </div>
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
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-900">
                          {request.mobile}
                        </span>
                        <MessageCircle className="h-4 w-4 text-green-500" />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {request.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div>
                        <div>{request.date}</div>
                        <div className="text-xs text-gray-500">
                          {request.time}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">
                      <div className="truncate" title={request.remark}>
                        {request.remark}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(request.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="bg-green-500 hover:bg-green-600 text-white"
                        >
                          Accept
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          className="bg-red-500 hover:bg-red-600"
                        >
                          Decline
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-gray-500 bg-white border-t">
        2025 ©Matka
      </footer>
    </div>
  );
}

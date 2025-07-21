import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calendar, MessageCircle } from "lucide-react";

export default function AddFundReport() {
  /*
  const depositHistory = [
    {
      id: 1,
      userName: "pappu",
      mobile: "9021840738",
      amount: 500,
      date: "17 Jul 2025",
      time: "04:30 AM",
      status: "success",
    },
    {
      id: 2,
      userName: "jagan",
      mobile: "8815376012",
      amount: 500,
      date: "17 Jul 2025",
      time: "04:04 AM",
      status: "success",
    },
    {
      id: 3,
      userName: "Ramesh",
      mobile: "6265908459",
      amount: 200,
      date: "17 Jul 2025",
      time: "01:30 AM",
      status: "success",
    },
    {
      id: 4,
      userName: "irfan",
      mobile: "9059413967",
      amount: 200,
      date: "17 Jul 2025",
      time: "12:12 PM",
      status: "success",
    },
  ];
*/
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        {/* Date Filter Section */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <div className="flex items-end justify-between">
            <div className="flex-1 max-w-xs">
              <Label
                htmlFor="date"
                className="text-sm text-gray-600 mb-2 block"
              >
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
            <div className="flex gap-3">
              <Button className="bg-blue-500 hover:bg-blue-600 px-6">
                Filter
              </Button>
              <Button
                variant="destructive"
                className="bg-red-500 hover:bg-red-600 px-6"
              >
                Clear
              </Button>
            </div>
          </div>
        </div>

        {/* Manual Deposit History */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-800">
              Manual Deposit History
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
                    User Name
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
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/*
                depositHistory.map((deposit) => (
                  <tr key={deposit.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {deposit.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
                        {deposit.userName}
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-900">
                          {deposit.mobile}
                        </span>
                        <MessageCircle className="h-4 w-4 text-green-500" />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {deposit.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div>
                        <div>{deposit.date}</div>
                        <div className="text-xs text-gray-500">
                          {deposit.time}
                        </div>
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
                  </tr>
                ))
                  */}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-gray-500 bg-white border-t">
        2025 ©MH GAMES
      </footer>
    </div>
  );
}

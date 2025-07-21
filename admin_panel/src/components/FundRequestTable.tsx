import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
interface fundRequests {
  fundrequest: fundrequest[];
}
interface fundrequest {
  id: number;
  name: string;
  mobile: string;
  amount: number;
  date: string;
  status: string;
}
export default function FundRequestTable() {
  //  fundRequests: fundRequests
  //const fundRequest = fundRequests.fundrequest;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Fund Request Auto Deposit History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">#</th>
                <th className="text-left py-3 px-4">User Name</th>
                <th className="text-left py-3 px-4">Mobile</th>
                <th className="text-left py-3 px-4">Amount</th>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* fundRequest.map((request) => (
                <tr key={request.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{request.id}</td>
                  <td className="py-3 px-4">
                    <span className="text-blue-600 font-medium">
                      {request.name}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span>{request.mobile}</span>
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 font-medium">{request.amount}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {request.date}
                  </td>
                  <td className="py-3 px-4">
                    <Badge className="bg-green-500 hover:bg-green-600">
                      {request.status}
                    </Badge>
                  </td>
                </tr>
              ))
              */}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

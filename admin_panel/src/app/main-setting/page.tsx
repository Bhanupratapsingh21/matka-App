import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function MainSettingsForm() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Phone/Google Pay/Paytm Numbers Section */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <div>
              <Label
                htmlFor="phonepe-number"
                className="text-sm font-medium text-gray-700"
              >
                PHONEPE NUMBER
              </Label>
              <div className="flex items-center gap-2 mt-1">
                <Input
                  id="phonepe-number"
                  placeholder="Enter PHONEPE NUMBER"
                  className="flex-grow"
                />
                <Button
                  variant="outline"
                  className="text-gray-500 hover:text-gray-700 bg-transparent"
                >
                  <XIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div>
              <Label
                htmlFor="google-pay-number"
                className="text-sm font-medium text-gray-700"
              >
                GOOGLE PAY NUMBER
              </Label>
              <div className="flex items-center gap-2 mt-1">
                <Input
                  id="google-pay-number"
                  placeholder="Enter GOOGLE PAY Number"
                  className="flex-grow"
                />
                <Button
                  variant="outline"
                  className="text-gray-500 hover:text-gray-700 bg-transparent"
                >
                  <XIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div>
              <Label
                htmlFor="paytm-number"
                className="text-sm font-medium text-gray-700"
              >
                PAYTM NUMBER
              </Label>
              <div className="flex items-center gap-2 mt-1">
                <Input
                  id="paytm-number"
                  placeholder="Enter PAYTM NUMBER"
                  className="flex-grow"
                />
                <Button
                  variant="outline"
                  className="text-gray-500 hover:text-gray-700 bg-transparent"
                >
                  <XIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
              Submit
            </Button>
          </CardContent>
        </Card>

        {/* Dashboard Notification & UPI Section */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <div>
              <Label
                htmlFor="dashboard-notification"
                className="text-sm font-medium text-gray-700"
              >
                Dashboard Notification
              </Label>
              <Textarea
                id="dashboard-notification"
                defaultValue="Notice:-WELCOME TO KALYAN STAR MATKA INDIAS MOST TRUSTED & OFFICIAL MATKA PLAY BIG WIN BIG"
                className="mt-1"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="auto-upi-id"
                  className="text-sm font-medium text-gray-700"
                >
                  Auto UPI Id
                </Label>
                <Input
                  id="auto-upi-id"
                  defaultValue="0793731A0099871.bqr@kotak"
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="manual-upi"
                  className="text-sm font-medium text-gray-700"
                >
                  Manual UPI ( IF You Fill This Manual Deposit Start
                  Automatically)
                </Label>
                <Input
                  id="manual-upi"
                  placeholder="Enter Manual UPI"
                  className="mt-1"
                />
              </div>
            </div>
            <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
              Submit
            </Button>
          </CardContent>
        </Card>

        {/* Financial Settings Section */}
        <Card>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <Label
                  htmlFor="min-deposit"
                  className="text-sm font-medium text-gray-700"
                >
                  Minimum Deposite
                </Label>
                <Input
                  id="min-deposit"
                  type="number"
                  defaultValue={200}
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="max-deposit"
                  className="text-sm font-medium text-gray-700"
                >
                  Maximum Deposite
                </Label>
                <Input
                  id="max-deposit"
                  type="number"
                  defaultValue={200000}
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="min-withdrawal"
                  className="text-sm font-medium text-gray-700"
                >
                  Minimum Withdrawal
                </Label>
                <Input
                  id="min-withdrawal"
                  type="number"
                  defaultValue={1000}
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="max-withdrawal"
                  className="text-sm font-medium text-gray-700"
                >
                  Maximum Withdrawal
                </Label>
                <Input
                  id="max-withdrawal"
                  type="number"
                  defaultValue={1000000}
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="min-transfer"
                  className="text-sm font-medium text-gray-700"
                >
                  Minimum Transfer
                </Label>
                <Input
                  id="min-transfer"
                  type="number"
                  defaultValue={5000}
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="max-transfer"
                  className="text-sm font-medium text-gray-700"
                >
                  Maximum Transfer
                </Label>
                <Input
                  id="max-transfer"
                  type="number"
                  defaultValue={100000}
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="min-bid-amount"
                  className="text-sm font-medium text-gray-700"
                >
                  Minimum Bid Amount
                </Label>
                <Input
                  id="min-bid-amount"
                  type="number"
                  defaultValue={10}
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="max-bid-amount"
                  className="text-sm font-medium text-gray-700"
                >
                  Maximum Bid Amount
                </Label>
                <Input
                  id="max-bid-amount"
                  type="number"
                  defaultValue={500000}
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="welcome-bonus"
                  className="text-sm font-medium text-gray-700"
                >
                  Welcome Bonus
                </Label>
                <Input
                  id="welcome-bonus"
                  type="number"
                  defaultValue={1}
                  className="mt-1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <Label
                  htmlFor="withdraw-open-time"
                  className="text-sm font-medium text-gray-700"
                >
                  Withdraw Open Time
                </Label>
                <Input
                  id="withdraw-open-time"
                  defaultValue="02:00 AM"
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="withdraw-close-time"
                  className="text-sm font-medium text-gray-700"
                >
                  Withdraw Close Time
                </Label>
                <Input
                  id="withdraw-close-time"
                  defaultValue="07:00 PM"
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="website-link"
                  className="text-sm font-medium text-gray-700"
                >
                  Website & Share Button Link
                </Label>
                <Input
                  id="website-link"
                  defaultValue="https://kalyanstar.site/"
                  className="mt-1"
                />
              </div>
            </div>
            <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
              Submit
            </Button>
          </CardContent>
        </Card>

        <div className="text-center text-gray-500 text-sm mt-8">
          2025 ©Matka.
        </div>
      </div>
    </div>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

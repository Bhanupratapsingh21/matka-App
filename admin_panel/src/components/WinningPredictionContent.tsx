"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, TrendingUp, Wallet } from "lucide-react";

// Static data commented out
// const winningData = [
//   {
//     id: 1,
//     date: "16 Jul 2025",
//     user: "Laxman",
//     mobile: "9301371542",
//     gameType: "Single Digit",
//     session: "Close",
//     openPanna: "",
//     openDigit: "",
//     closeDigit: "6",
//     closePanna: "",
//     bidAmount: 100,
//     wonAmount: 30000,
//   },
// ];

export default function WinningPredictionContent() {
  const [selectedDate, setSelectedDate] = useState("2025-07-16");
  const [selectedGame, setSelectedGame] = useState("MADHUR DAY");
  const [selectedSession, setSelectedSession] = useState("Close");
  const [selectedOpenPanna, setSelectedOpenPanna] = useState("117");
  const [selectedClosePanna, setSelectedClosePanna] = useState("123");

  // Static values commented out
  // const totalBidAmount = 2355;
  // const totalWinningAmount = 30000;

  return (
    <div className="space-y-6">
      {/* Select Game Section */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Select Game</h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Result Date
              </label>
              <div className="relative">
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="pr-10"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Game Name
              </label>
              <Select value={selectedGame} onValueChange={setSelectedGame}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MADHUR DAY">MADHUR DAY</SelectItem>
                  <SelectItem value="RAJDHANI DAY">RAJDHANI DAY</SelectItem>
                  <SelectItem value="KALYAN STAR DAY">KALYAN STAR DAY</SelectItem>
                  <SelectItem value="MILAN DAY">MILAN DAY</SelectItem>
                  <SelectItem value="TIME BAZAR">TIME BAZAR</SelectItem>
                  <SelectItem value="SRIDEVI">SRIDEVI</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Session
              </label>
              <Select value={selectedSession} onValueChange={setSelectedSession}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Open">Open</SelectItem>
                  <SelectItem value="Close">Close</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Open Panna
              </label>
              <Select value={selectedOpenPanna} onValueChange={setSelectedOpenPanna}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="117">117</SelectItem>
                  <SelectItem value="118">118</SelectItem>
                  <SelectItem value="119">119</SelectItem>
                  <SelectItem value="123">123</SelectItem>
                  <SelectItem value="124">124</SelectItem>
                  <SelectItem value="125">125</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Close Panna
              </label>
              <Select value={selectedClosePanna} onValueChange={setSelectedClosePanna}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="123">123</SelectItem>
                  <SelectItem value="124">124</SelectItem>
                  <SelectItem value="125">125</SelectItem>
                  <SelectItem value="126">126</SelectItem>
                  <SelectItem value="127">127</SelectItem>
                  <SelectItem value="128">128</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Go</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Statistics */}
      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">
            Total Bid Amount :
          </span>
          <span className="font-bold text-gray-900">{/* {totalBidAmount} */}</span>
        </div>
        <div className="flex items-center gap-2">
          <Wallet className="w-5 h-5 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">
            Total Winning Amount :
          </span>
          <span className="font-bold text-gray-900">{/* {totalWinningAmount} */}</span>
        </div>
      </div>

      {/* Winning Predictions Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">#</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Date</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">User</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Mobile</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Game Type</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Session</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Open Panna</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Open Digit</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Close Digit</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Close Panna</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Bid Amount</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Won Amount</th>
                </tr>
              </thead>
              <tbody>
                {/* Replace below with dynamic rendering later */}
                {/* {winningData.map((prediction, index) => ( ... ))} */}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

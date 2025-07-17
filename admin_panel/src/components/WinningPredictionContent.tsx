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

const winningData = [
  {
    id: 1,
    date: "16 Jul 2025",
    user: "Laxman",
    mobile: "9301371542",
    gameType: "Single Digit",
    session: "Close",
    openPanna: "",
    openDigit: "",
    closeDigit: "6",
    closePanna: "",
    bidAmount: 100,
    wonAmount: 30000,
  },
];

export default function WinningPredictionContent() {
  const [selectedDate, setSelectedDate] = useState("2025-07-16");
  const [selectedGame, setSelectedGame] = useState("MADHUR DAY");
  const [selectedSession, setSelectedSession] = useState("Close");
  const [selectedOpenPanna, setSelectedOpenPanna] = useState("117");
  const [selectedClosePanna, setSelectedClosePanna] = useState("123");

  const totalBidAmount = 2355;
  const totalWinningAmount = 30000;

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
                  <SelectItem value="KALYAN STAR DAY">
                    KALYAN STAR DAY
                  </SelectItem>
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
              <Select
                value={selectedSession}
                onValueChange={setSelectedSession}
              >
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
              <Select
                value={selectedOpenPanna}
                onValueChange={setSelectedOpenPanna}
              >
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
              <Select
                value={selectedClosePanna}
                onValueChange={setSelectedClosePanna}
              >
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
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Go
              </Button>
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
          <span className="font-bold text-gray-900">{totalBidAmount}</span>
        </div>
        <div className="flex items-center gap-2">
          <Wallet className="w-5 h-5 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">
            Total Winning Amount :
          </span>
          <span className="font-bold text-gray-900">{totalWinningAmount}</span>
        </div>
      </div>

      {/* Winning Predictions Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    #
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    Date
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    User
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    Mobile
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    Game Type
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    Session
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    Open Panna
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    Open Digit
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    Close Digit
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    Close Panna
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    Bid Amount
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    Won Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {winningData.map((prediction, index) => (
                  <tr
                    key={prediction.id}
                    className={`border-b hover:bg-gray-50 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    <td className="py-4 px-6 text-gray-600">{prediction.id}</td>
                    <td className="py-4 px-6 text-gray-600">
                      {prediction.date}
                    </td>
                    <td className="py-4 px-6">
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        {prediction.user}
                      </button>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-700">
                          {prediction.mobile}
                        </span>
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      {prediction.gameType}
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      {prediction.session}
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      {prediction.openPanna || "-"}
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      {prediction.openDigit || "-"}
                    </td>
                    <td className="py-4 px-6">
                      {prediction.closeDigit ? (
                        <div className="inline-block border border-gray-300 px-2 py-1 rounded text-center min-w-[40px]">
                          {prediction.closeDigit}
                        </div>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      {prediction.closePanna || "-"}
                    </td>
                    <td className="py-4 px-6 font-medium text-gray-800">
                      {prediction.bidAmount}
                    </td>
                    <td className="py-4 px-6 font-medium text-gray-800">
                      {prediction.wonAmount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

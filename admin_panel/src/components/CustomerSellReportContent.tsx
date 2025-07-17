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
import { Calendar } from "lucide-react";

export default function CustomerSellReportContent() {
  const [selectedDate, setSelectedDate] = useState("2025-07-17");
  const [selectedGame, setSelectedGame] = useState("");
  const [selectedSession, setSelectedSession] = useState("Open");

  // Generate Single Digit data (0-9)
  const singleDigitData = Array.from({ length: 10 }, (_, i) => ({
    digit: i === 9 ? 0 : i + 1,
    point: 0,
  }));

  // Generate Single Panna data
  const singlePannaData = [
    [120, 123, 124, 125, 126, 127, 129, 130, 134, 135],
    [136, 137, 138, 139, 140, 145, 146, 147, 148, 149, 150, 156],
    [157, 158, 159, 160, 167, 168, 169, 170, 178, 179, 180, 189],
    [190, 230, 234, 235, 236, 237, 238, 239, 240, 245, 246, 247],
    [248, 249, 250, 256, 257, 258, 259, 260, 267, 268, 269, 270],
    [278, 279, 280, 289, 290, 340, 345, 346, 347, 348, 349, 350],
    [356, 357, 358, 359, 360, 367, 368, 369, 370, 378, 379, 380],
    [389, 390, 450, 456, 457, 458, 459, 460, 467, 468, 469, 470],
    [478, 479, 480, 489, 490, 560, 567, 568, 569, 570, 578, 579],
    [580, 589, 590, 670, 678, 679, 680, 689, 690, 780, 789, 790],
  ];

  // Generate Jodi data
  const jodiData = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
    [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
    [47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58],
    [59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82],
    [83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94],
    [95, 96, 97, 98, 99, 0],
  ];

  const handleSubmit = () => {
    console.log("Submit report with:", {
      selectedDate,
      selectedGame,
      selectedSession,
    });
  };

  const handleClear = () => {
    setSelectedDate("2025-07-17");
    setSelectedGame("");
    setSelectedSession("Open");
  };

  return (
    <div className="space-y-6">
      {/* Filter Section */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Customer Sell Report</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
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
                  <SelectValue placeholder="Select Game Name" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kalyan-day">KALYAN DAY</SelectItem>
                  <SelectItem value="madhur-day">MADHUR DAY</SelectItem>
                  <SelectItem value="rajdhani-day">RAJDHANI DAY</SelectItem>
                  <SelectItem value="time-bazar">TIME BAZAR</SelectItem>
                  <SelectItem value="sridevi">SRIDEVI</SelectItem>
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
              <Button
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Submit
              </Button>
            </div>

            <div>
              <Button
                onClick={handleClear}
                variant="destructive"
                className="w-full"
              >
                CLEAR
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Single Digit Section */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Single Digit</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2 bg-gray-50 font-medium">
                    Digit
                  </th>
                  {singleDigitData.map((item) => (
                    <th
                      key={item.digit}
                      className="border border-gray-300 px-4 py-2 bg-gray-50 font-medium"
                    >
                      {item.digit}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 bg-gray-50 font-medium">
                    Point
                  </td>
                  {singleDigitData.map((item) => (
                    <td
                      key={item.digit}
                      className="border border-gray-300 px-4 py-2 text-center"
                    >
                      <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm mx-auto">
                        {item.point}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Single Panna Section */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Single Panna</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2 bg-gray-50 font-medium">
                    Digit
                  </th>
                  {singlePannaData[0].map((digit) => (
                    <th
                      key={digit}
                      className="border border-gray-300 px-4 py-2 bg-gray-50 font-medium"
                    >
                      {digit}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 bg-gray-50 font-medium">
                    Point
                  </td>
                  {singlePannaData[0].map((digit) => (
                    <td
                      key={digit}
                      className="border border-gray-300 px-4 py-2 text-center"
                    >
                      <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm mx-auto">
                        0
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>

            {/* Additional rows for Single Panna */}
            {singlePannaData.slice(1).map((row, rowIndex) => (
              <table
                key={rowIndex}
                className="w-full border-collapse border border-gray-300 mt-4"
              >
                <tbody>
                  <tr>
                    {row.map((digit) => (
                      <td
                        key={digit}
                        className="border border-gray-300 px-4 py-2 text-center font-medium"
                      >
                        {digit}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    {row.map((digit) => (
                      <td
                        key={digit}
                        className="border border-gray-300 px-4 py-2 text-center"
                      >
                        <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm mx-auto">
                          0
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Jodi Section */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Jodi</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2 bg-gray-50 font-medium">
                    Digit
                  </th>
                  {jodiData[0].map((digit) => (
                    <th
                      key={digit}
                      className="border border-gray-300 px-4 py-2 bg-gray-50 font-medium"
                    >
                      {digit.toString().padStart(2, "0")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 bg-gray-50 font-medium">
                    Point
                  </td>
                  {jodiData[0].map((digit) => (
                    <td
                      key={digit}
                      className="border border-gray-300 px-4 py-2 text-center"
                    >
                      <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm mx-auto">
                        0
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>

            {/* Additional rows for Jodi */}
            {jodiData.slice(1).map((row, rowIndex) => (
              <table
                key={rowIndex}
                className="w-full border-collapse border border-gray-300 mt-4"
              >
                <tbody>
                  <tr>
                    {row.map((digit) => (
                      <td
                        key={digit}
                        className="border border-gray-300 px-4 py-2 text-center font-medium"
                      >
                        {digit.toString().padStart(2, "0")}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    {row.map((digit) => (
                      <td
                        key={digit}
                        className="border border-gray-300 px-4 py-2 text-center"
                      >
                        <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm mx-auto">
                          0
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

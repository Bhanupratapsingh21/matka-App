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

const gameResults = [
  {
    id: 1,
    gameName: "RAJDHANI DAY",
    resultDate: "2025-07-16",
    openDeclareTime: "16 Jul 2025 15:28 PM",
    closeDeclareTime: "-",
    openNumber: "3-300",
    closeNumber: "-",
  },
  {
    id: 2,
    gameName: "MAHADEV DAY",
    resultDate: "2025-07-16",
    openDeclareTime: "16 Jul 2025 14:26 PM",
    closeDeclareTime: "16 Jul 2025 15:28 PM",
    openNumber: "0-280",
    closeNumber: "8-189",
  },
  {
    id: 3,
    gameName: "KALYAN STAR DAY",
    resultDate: "2025-07-16",
    openDeclareTime: "16 Jul 2025 14:26 PM",
    closeDeclareTime: "16 Jul 2025 15:28 PM",
    openNumber: "5-177",
    closeNumber: "4-220",
  },
  {
    id: 4,
    gameName: "MILAN DAY",
    resultDate: "2025-07-16",
    openDeclareTime: "16 Jul 2025 14:26 PM",
    closeDeclareTime: "-",
    openNumber: "6-240",
    closeNumber: "-",
  },
  {
    id: 5,
    gameName: "MADHUR DAY",
    resultDate: "2025-07-16",
    openDeclareTime: "16 Jul 2025 13:57 PM",
    closeDeclareTime: "16 Jul 2025 14:48 PM",
    openNumber: "4-112",
    closeNumber: "4-167",
  },
  {
    id: 6,
    gameName: "TIME BAZAR",
    resultDate: "2025-07-16",
    openDeclareTime: "16 Jul 2025 13:06 PM",
    closeDeclareTime: "16 Jul 2025 15:26 PM",
    openNumber: "5-339",
    closeNumber: "5-348",
  },
  {
    id: 7,
    gameName: "SRIDEVI",
    resultDate: "2025-07-16",
    openDeclareTime: "16 Jul 2025 11:53 AM",
    closeDeclareTime: "16 Jul 2025 12:58 PM",
    openNumber: "3-689",
    closeNumber: "5-159",
  },
  {
    id: 8,
    gameName: "MADHUR MORNING",
    resultDate: "2025-07-16",
    openDeclareTime: "16 Jul 2025 11:51 AM",
    closeDeclareTime: "16 Jul 2025 12:52 PM",
    openNumber: "9-577",
    closeNumber: "6-259",
  },
  {
    id: 9,
    gameName: "SUPREME MORNING",
    resultDate: "2025-07-16",
    openDeclareTime: "16 Jul 2025 11:16 AM",
    closeDeclareTime: "16 Jul 2025 12:20 PM",
    openNumber: "9-180",
    closeNumber: "2-589",
  },
  {
    id: 10,
    gameName: "KALYAN MORNING",
    resultDate: "2025-07-16",
    openDeclareTime: "16 Jul 2025 11:16 AM",
    closeDeclareTime: "16 Jul 2025 12:19 PM",
    openNumber: "6-367",
    closeNumber: "8-279",
  },
  {
    id: 11,
    gameName: "MILAN MORNING",
    resultDate: "2025-07-16",
    openDeclareTime: "16 Jul 2025 10:43 AM",
    closeDeclareTime: "16 Jul 2025 11:43 AM",
    openNumber: "6-899",
    closeNumber: "2-228",
  },
  {
    id: 12,
    gameName: "KARNATAKA DAY",
    resultDate: "2025-07-16",
    openDeclareTime: "16 Jul 2025 10:42 AM",
    closeDeclareTime: "16 Jul 2025 11:29 AM",
    openNumber: "7-458",
    closeNumber: "6-349",
  },
];

export default function DeclareResultContent() {
  const [selectedDate, setSelectedDate] = useState("2025-07-16");
  const [selectedGame, setSelectedGame] = useState("");
  const [selectedSession, setSelectedSession] = useState("Open");
  const [filterDate, setFilterDate] = useState("2025-07-16");

  const handleDelete = (id: number) => {
    // Handle delete functionality
    console.log("Delete result with id:", id);
  };

  return (
    <div className="space-y-6">
      {/* Select Game Section */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Select Game</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
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
                  <SelectValue placeholder="Select Game Name" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rajdhani-day">RAJDHANI DAY</SelectItem>
                  <SelectItem value="mahadev-day">MAHADEV DAY</SelectItem>
                  <SelectItem value="kalyan-star-day">
                    KALYAN STAR DAY
                  </SelectItem>
                  <SelectItem value="milan-day">MILAN DAY</SelectItem>
                  <SelectItem value="madhur-day">MADHUR DAY</SelectItem>
                  <SelectItem value="time-bazar">TIME BAZAR</SelectItem>
                  <SelectItem value="sridevi">SRIDEVI</SelectItem>
                  <SelectItem value="madhur-morning">MADHUR MORNING</SelectItem>
                  <SelectItem value="supreme-morning">
                    SUPREME MORNING
                  </SelectItem>
                  <SelectItem value="kalyan-morning">KALYAN MORNING</SelectItem>
                  <SelectItem value="milan-morning">MILAN MORNING</SelectItem>
                  <SelectItem value="karnataka-day">KARNATAKA DAY</SelectItem>
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
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Go
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filter Section */}
      <div className="flex items-end gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Result Date
          </label>
          <div className="relative">
            <Input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="pr-10"
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">Filter</Button>
      </div>

      {/* Today Result History */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Today Result History</h3>
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
                      Game Name
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Result Date
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Open Declare Time
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Close Declare Time
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Open Number
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Close Number
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {gameResults.map((result, index) => (
                    <tr
                      key={result.id}
                      className={`border-b hover:bg-gray-50 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}
                    >
                      <td className="py-4 px-6 text-gray-600">{result.id}</td>
                      <td className="py-4 px-6 font-medium text-gray-800">
                        {result.gameName}
                      </td>
                      <td className="py-4 px-6 text-gray-600">
                        {result.resultDate}
                      </td>
                      <td className="py-4 px-6 text-gray-600">
                        {result.openDeclareTime}
                      </td>
                      <td className="py-4 px-6 text-gray-600">
                        {result.closeDeclareTime}
                      </td>
                      <td className="py-4 px-6 font-medium text-gray-800">
                        {result.openNumber}
                      </td>
                      <td className="py-4 px-6 font-medium text-gray-800">
                        {result.closeNumber}
                      </td>
                      <td className="py-4 px-6">
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDelete(result.id)}
                          className="bg-red-500 hover:bg-red-600"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

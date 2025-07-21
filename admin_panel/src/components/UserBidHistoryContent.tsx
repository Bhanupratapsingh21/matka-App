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
import { Calendar, Search } from "lucide-react";
/*

const bidHistoryData = [
  {
    id: 1,
    name: "Bahadur",
    mobile: "7999068700",
    bidDate: "16 Jul 2025",
    bidTime: "19:25:17",
    gameName: "KALYAN STAR NIGHT",
    gameType: "Triple Panna",
    session: "Open",
    openDigit: "",
    closeDigit: "",
    openPanna: "444",
    closePanna: "",
    points: 20,
    status: "-",
  },
  {
    id: 2,
    name: "Irfan",
    mobile: "9059413967",
    bidDate: "16 Jul 2025",
    bidTime: "19:23:43",
    gameName: "KARNATAKA NIGHT",
    gameType: "Single Digit",
    session: "Close",
    openDigit: "",
    closeDigit: "3",
    openPanna: "",
    closePanna: "",
    points: 20,
    status: "-",
  },
  {
    id: 3,
    name: "Irfan",
    mobile: "9059413967",
    bidDate: "16 Jul 2025",
    bidTime: "19:23:43",
    gameName: "KARNATAKA NIGHT",
    gameType: "Single Digit",
    session: "Close",
    openDigit: "",
    closeDigit: "8",
    openPanna: "",
    closePanna: "",
    points: 20,
    status: "-",
  },
  {
    id: 4,
    name: "Vinitpa",
    mobile: "7798322971",
    bidDate: "16 Jul 2025",
    bidTime: "19:20:43",
    gameName: "KARNATAKA NIGHT",
    gameType: "Single Digit",
    session: "Close",
    openDigit: "",
    closeDigit: "4",
    openPanna: "",
    closePanna: "",
    points: 150,
    status: "-",
  },
  {
    id: 5,
    name: "Vinitpa",
    mobile: "7798322971",
    bidDate: "16 Jul 2025",
    bidTime: "19:20:43",
    gameName: "KARNATAKA NIGHT",
    gameType: "Single Digit",
    session: "Close",
    openDigit: "",
    closeDigit: "2",
    openPanna: "",
    closePanna: "",
    points: 150,
    status: "-",
  },
  {
    id: 6,
    name: "Ramesh",
    mobile: "7471107331",
    bidDate: "16 Jul 2025",
    bidTime: "19:15:59",
    gameName: "SRIDEVI NIGHT",
    gameType: "Single Digit",
    session: "Close",
    openDigit: "",
    closeDigit: "1",
    openPanna: "",
    closePanna: "",
    points: 20,
    status: "-",
  },
  {
    id: 7,
    name: "Sonu",
    mobile: "7672066988",
    bidDate: "16 Jul 2025",
    bidTime: "19:12:28",
    gameName: "MADHUR NIGHT",
    gameType: "Single Digit",
    session: "Open",
    openDigit: "8",
    closeDigit: "",
    openPanna: "",
    closePanna: "",
    points: 10,
    status: "-",
  },
  {
    id: 8,
    name: "Sonu",
    mobile: "7672066988",
    bidDate: "16 Jul 2025",
    bidTime: "19:12:28",
    gameName: "MADHUR NIGHT",
    gameType: "Single Digit",
    session: "Open",
    openDigit: "7",
    closeDigit: "",
    openPanna: "",
    closePanna: "",
    points: 10,
    status: "-",
  },
  {
    id: 9,
    name: "Sonu",
    mobile: "7672066988",
    bidDate: "16 Jul 2025",
    bidTime: "19:12:28",
    gameName: "MADHUR NIGHT",
    gameType: "Single Digit",
    session: "Open",
    openDigit: "4",
    closeDigit: "",
    openPanna: "",
    closePanna: "",
    points: 10,
    status: "-",
  },
  {
    id: 10,
    name: "Sonu",
    mobile: "7672066988",
    bidDate: "16 Jul 2025",
    bidTime: "19:12:28",
    gameName: "MADHUR NIGHT",
    gameType: "Single Digit",
    session: "Open",
    openDigit: "1",
    closeDigit: "",
    openPanna: "",
    closePanna: "",
    points: 10,
    status: "-",
  },
  {
    id: 11,
    name: "Naveena",
    mobile: "9141497573",
    bidDate: "16 Jul 2025",
    bidTime: "19:07:37",
    gameName: "SRIDEVI NIGHT",
    gameType: "Single Digit",
    session: "Open",
    openDigit: "0",
    closeDigit: "",
    openPanna: "",
    closePanna: "",
    points: 100,
    status: "-",
  },
  {
    id: 12,
    name: "Naveena",
    mobile: "9141497573",
    bidDate: "16 Jul 2025",
    bidTime: "19:07:37",
    gameName: "SRIDEVI NIGHT",
    gameType: "Single Digit",
    session: "Open",
    openDigit: "5",
    closeDigit: "",
    openPanna: "",
    closePanna: "",
    points: 350,
    status: "-",
  },
];
*/
export default function UserBidHistoryContent() {
  const [selectedDate, setSelectedDate] = useState("2025-07-16");
  const [selectedGame, setSelectedGame] = useState("ALL Game");
  const [selectedGameType, setSelectedGameType] = useState("All Games");
  const [selectedSession, setSelectedSession] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id: number) => {
    console.log("Delete bid with id:", id);
  };

  const handleEditBid = (id: number) => {
    console.log("Edit bid with id:", id);
  };

  /* const filteredData = bidHistoryData.filter(
    (bid) =>
      bid.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bid.mobile.includes(searchTerm) ||
      bid.gameName.toLowerCase().includes(searchTerm.toLowerCase())
  );
*/
  return (
    <div className="space-y-6">
      {/* Bid History Report Section */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Bid History Report</h2>
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
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL Game">ALL Game</SelectItem>
                  <SelectItem value="KALYAN STAR NIGHT">
                    KALYAN STAR NIGHT
                  </SelectItem>
                  <SelectItem value="KARNATAKA NIGHT">
                    KARNATAKA NIGHT
                  </SelectItem>
                  <SelectItem value="SRIDEVI NIGHT">SRIDEVI NIGHT</SelectItem>
                  <SelectItem value="MADHUR NIGHT">MADHUR NIGHT</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Game Type
              </label>
              <Select
                value={selectedGameType}
                onValueChange={setSelectedGameType}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Games">All Games</SelectItem>
                  <SelectItem value="Single Digit">Single Digit</SelectItem>
                  <SelectItem value="Triple Panna">Triple Panna</SelectItem>
                  <SelectItem value="Double Panna">Double Panna</SelectItem>
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
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="Open">Open</SelectItem>
                  <SelectItem value="Close">Close</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Submit
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bid History List Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Bid History List</h3>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Name
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Mobile
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Bid Date
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Bid Time
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Game Name
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Game Type
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Session
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Open Digit
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Close Digit
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Open Panna
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Close Panna
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Points
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Status
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/*
                  filteredData.map((bid, index) => (
                    <tr
                      key={bid.id}
                      className={`border-b hover:bg-gray-50 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}
                    >
                      <td className="py-4 px-6">
                        <button className="text-blue-600 hover:text-blue-800 font-medium">
                          {bid.name}
                        </button>
                      </td>
                      <td className="py-4 px-6 text-gray-600">{bid.mobile}</td>
                      <td className="py-4 px-6 text-gray-600">{bid.bidDate}</td>
                      <td className="py-4 px-6 text-gray-600">{bid.bidTime}</td>
                      <td className="py-4 px-6 text-gray-600">
                        {bid.gameName}
                      </td>
                      <td className="py-4 px-6 text-gray-600">
                        {bid.gameType}
                      </td>
                      <td className="py-4 px-6 text-gray-600">{bid.session}</td>
                      <td className="py-4 px-6 text-gray-600">
                        {bid.openDigit || "-"}
                      </td>
                      <td className="py-4 px-6 text-gray-600">
                        {bid.closeDigit || "-"}
                      </td>
                      <td className="py-4 px-6 text-gray-600">
                        {bid.openPanna || "-"}
                      </td>
                      <td className="py-4 px-6 text-gray-600">
                        {bid.closePanna || "-"}
                      </td>
                      <td className="py-4 px-6 font-medium text-gray-800">
                        {bid.points}
                      </td>
                      <td className="py-4 px-6 text-gray-600">{bid.status}</td>
                      <td className="py-4 px-6">
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() => handleDelete(bid.id)}
                            className="bg-green-500 hover:bg-green-600 text-white"
                          >
                            Delete
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleEditBid(bid.id)}
                            className="bg-red-500 hover:bg-red-600"
                          >
                            Edit Bid
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                    */}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

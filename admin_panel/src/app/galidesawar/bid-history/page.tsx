"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface BidHistoryData {
    name: string
    mobile: string
    bidDate: string
    bidTime: string
    gameName: string
    gameType: string
    session: string
    openDigit: number
    closeDigit: number
    openPanna: number
    closePanna: number
    points: number
    status: string
}

const bidHistoryData: BidHistoryData[] = [
    {
        name: "Laxman",
        mobile: "9754341276",
        bidDate: "17 Jul 2025",
        bidTime: "17:35:06",
        gameName: "FARIDABAD",
        gameType: "Jodi Digit Galidesawar",
        session: "",
        openDigit: 53,
        closeDigit: 0,
        openPanna: 10,
        closePanna: 0,
        points: 0,
        status: "-",
    },
    {
        name: "Laxman",
        mobile: "9754341276",
        bidDate: "17 Jul 2025",
        bidTime: "17:35:06",
        gameName: "FARIDABAD",
        gameType: "Jodi Digit Galidesawar",
        session: "",
        openDigit: 29,
        closeDigit: 0,
        openPanna: 10,
        closePanna: 0,
        points: 0,
        status: "-",
    },
    {
        name: "Laxman",
        mobile: "9754341276",
        bidDate: "17 Jul 2025",
        bidTime: "17:32:34",
        gameName: "FARIDABAD",
        gameType: "Jodi Digit Galidesawar",
        session: "",
        openDigit: 20,
        closeDigit: 0,
        openPanna: 10,
        closePanna: 0,
        points: 0,
        status: "-",
    },
    {
        name: "Bharat",
        mobile: "9619220005",
        bidDate: "17 Jul 2025",
        bidTime: "16:04:16",
        gameName: "GALI",
        gameType: "Jodi Digit Galidesawar",
        session: "",
        openDigit: 29,
        closeDigit: 0,
        openPanna: 10,
        closePanna: 0,
        points: 0,
        status: "-",
    },
    {
        name: "Bharat",
        mobile: "9619220005",
        bidDate: "17 Jul 2025",
        bidTime: "16:04:16",
        gameName: "GALI",
        gameType: "Jodi Digit Galidesawar",
        session: "",
        openDigit: 28,
        closeDigit: 0,
        openPanna: 10,
        closePanna: 0,
        points: 0,
        status: "-",
    },
    {
        name: "Bharat",
        mobile: "9619220005",
        bidDate: "17 Jul 2025",
        bidTime: "16:04:16",
        gameName: "GALI",
        gameType: "Jodi Digit Galidesawar",
        session: "",
        openDigit: 26,
        closeDigit: 0,
        openPanna: 10,
        closePanna: 0,
        points: 0,
        status: "-",
    },
    {
        name: "Bharat",
        mobile: "9619220005",
        bidDate: "17 Jul 2025",
        bidTime: "16:04:16",
        gameName: "GALI",
        gameType: "Jodi Digit Galidesawar",
        session: "",
        openDigit: 25,
        closeDigit: 0,
        openPanna: 10,
        closePanna: 0,
        points: 0,
        status: "-",
    },
    {
        name: "Bharat",
        mobile: "9619220005",
        bidDate: "17 Jul 2025",
        bidTime: "16:04:16",
        gameName: "GALI",
        gameType: "Jodi Digit Galidesawar",
        session: "",
        openDigit: 23,
        closeDigit: 0,
        openPanna: 31,
        closePanna: 0,
        points: 0,
        status: "-",
    },
    {
        name: "Bharat",
        mobile: "9619220005",
        bidDate: "17 Jul 2025",
        bidTime: "16:04:16",
        gameName: "GALI",
        gameType: "Jodi Digit Galidesawar",
        session: "",
        openDigit: 22,
        closeDigit: 0,
        openPanna: 10,
        closePanna: 0,
        points: 0,
        status: "-",
    },
    {
        name: "Bharat",
        mobile: "9619220005",
        bidDate: "17 Jul 2025",
        bidTime: "16:01:43",
        gameName: "FARIDABAD",
        gameType: "Jodi Digit Galidesawar",
        session: "",
        openDigit: 95,
        closeDigit: 0,
        openPanna: 20,
        closePanna: 0,
        points: 0,
        status: "-",
    },
    {
        name: "Bharat",
        mobile: "9619220005",
        bidDate: "17 Jul 2025",
        bidTime: "16:01:43",
        gameName: "FARIDABAD",
        gameType: "Jodi Digit Galidesawar",
        session: "",
        openDigit: 85,
        closeDigit: 0,
        openPanna: 10,
        closePanna: 0,
        points: 0,
        status: "-",
    },
    {
        name: "Bharat",
        mobile: "9619220005",
        bidDate: "17 Jul 2025",
        bidTime: "16:01:43",
        gameName: "FARIDABAD",
        gameType: "Jodi Digit Galidesawar",
        session: "",
        openDigit: 83,
        closeDigit: 0,
        openPanna: 10,
        closePanna: 0,
        points: 0,
        status: "-",
    },
    {
        name: "Bharat",
        mobile: "9619220005",
        bidDate: "17 Jul 2025",
        bidTime: "16:01:43",
        gameName: "FARIDABAD",
        gameType: "Jodi Digit Galidesawar",
        session: "",
        openDigit: 75,
        closeDigit: 0,
        openPanna: 10,
        closePanna: 0,
        points: 0,
        status: "-",
    },
    {
        name: "Bharat",
        mobile: "9619220005",
        bidDate: "17 Jul 2025",
        bidTime: "16:01:43",
        gameName: "FARIDABAD",
        gameType: "Jodi Digit Galidesawar",
        session: "",
        openDigit: 73,
        closeDigit: 0,
        openPanna: 10,
        closePanna: 0,
        points: 0,
        status: "-",
    },
    {
        name: "Bharat",
        mobile: "9619220005",
        bidDate: "17 Jul 2025",
        bidTime: "16:01:43",
        gameName: "FARIDABAD",
        gameType: "Jodi Digit Galidesawar",
        session: "",
        openDigit: 65,
        closeDigit: 0,
        openPanna: 10,
        closePanna: 0,
        points: 0,
        status: "-",
    },
]

export default function BidHistoryReport() {
    const [searchTerm, setSearchTerm] = useState("")
    const [date, setDate] = useState("17/07/2025")
    const [gameName, setGameName] = useState("All Game")
    const [gameType, setGameType] = useState("All Games")
    const [session, setSession] = useState("All")

    const filteredData = bidHistoryData.filter(
        (item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.mobile.includes(searchTerm) ||
            item.gameName.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-lg shadow-sm">
                {/* Header Section */}
                <div className="p-6 border-b border-gray-200">
                    <h1 className="text-xl font-semibold text-gray-800 mb-4">Bid History Report</h1>

                    {/* Filter Form */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Date</label>
                            <Input type="text" value={date} onChange={(e) => setDate(e.target.value)} className="w-full" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Game Name</label>
                            <Select value={gameName} onValueChange={setGameName}>
                                <SelectTrigger className="w-full">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="All Game">All Game</SelectItem>
                                    <SelectItem value="FARIDABAD">FARIDABAD</SelectItem>
                                    <SelectItem value="GALI">GALI</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Game Type</label>
                            <Select value={gameType} onValueChange={setGameType}>
                                <SelectTrigger className="w-full">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="All Games">All Games</SelectItem>
                                    <SelectItem value="Jodi Digit Galidesawar">Jodi Digit Galidesawar</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Session</label>
                            <Select value={session} onValueChange={setSession}>
                                <SelectTrigger className="w-full">
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
                            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Submit</Button>
                        </div>
                    </div>
                </div>

                {/* Table Section */}
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-gray-800">Bid History List</h2>
                        <div className="w-64">
                            <Input
                                type="text"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-gray-50">
                                    <TableHead className="text-gray-600 font-medium">Name</TableHead>
                                    <TableHead className="text-gray-600 font-medium">Mobile</TableHead>
                                    <TableHead className="text-gray-600 font-medium">Bid Date</TableHead>
                                    <TableHead className="text-gray-600 font-medium">Bid Time</TableHead>
                                    <TableHead className="text-gray-600 font-medium">Game Name</TableHead>
                                    <TableHead className="text-gray-600 font-medium">Game Type</TableHead>
                                    <TableHead className="text-gray-600 font-medium">Session</TableHead>
                                    <TableHead className="text-gray-600 font-medium">Open Digit</TableHead>
                                    <TableHead className="text-gray-600 font-medium">Close Digit</TableHead>
                                    <TableHead className="text-gray-600 font-medium">Open Panna</TableHead>
                                    <TableHead className="text-gray-600 font-medium">Close Panna</TableHead>
                                    <TableHead className="text-gray-600 font-medium">Points</TableHead>
                                    <TableHead className="text-gray-600 font-medium">Status</TableHead>
                                    <TableHead className="text-gray-600 font-medium">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredData.map((item, index) => (
                                    <TableRow key={index} className="hover:bg-gray-50">
                                        <TableCell className="text-blue-600 font-medium">{item.name}</TableCell>
                                        <TableCell className="text-gray-600">{item.mobile}</TableCell>
                                        <TableCell className="text-gray-600">{item.bidDate}</TableCell>
                                        <TableCell className="text-gray-600">{item.bidTime}</TableCell>
                                        <TableCell className="text-gray-600">{item.gameName}</TableCell>
                                        <TableCell className="text-gray-600 max-w-32 truncate">{item.gameType}</TableCell>
                                        <TableCell className="text-gray-600">{item.session}</TableCell>
                                        <TableCell className="text-gray-600">{item.openDigit}</TableCell>
                                        <TableCell className="text-gray-600">{item.closeDigit}</TableCell>
                                        <TableCell className="text-gray-600">{item.openPanna}</TableCell>
                                        <TableCell className="text-gray-600">{item.closePanna}</TableCell>
                                        <TableCell className="text-gray-600">{item.points}</TableCell>
                                        <TableCell className="text-gray-600">{item.status}</TableCell>
                                        <TableCell>
                                            <div className="flex flex-col gap-1">
                                                <Button
                                                    size="sm"
                                                    className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 h-auto"
                                                >
                                                    Delete
                                                </Button>
                                                <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 h-auto">
                                                    Edit Bid
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}
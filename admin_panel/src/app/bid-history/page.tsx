"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"

export default function BidHistoryPage() {
    const [date, setDate] = useState("17/07/2025")
    const [gameName, setGameName] = useState("ALL Game")
    const [gameType, setGameType] = useState("All Games")
    const [session, setSession] = useState("All")
    const [searchTerm, setSearchTerm] = useState("")

    const handleSubmit = () => {
        console.log("Form submitted with:", { date, gameName, gameType, session })
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Filter Card */}
                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold text-gray-700">
                            Bid History Report
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {/* Date */}
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-600">Date</label>
                                <Input
                                    type="text"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="w-full"
                                />
                            </div>

                            {/* Game Name */}
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-600">Game Name</label>
                                <Select value={gameName} onValueChange={setGameName}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="ALL Game">ALL Game</SelectItem>
                                        <SelectItem value="Game 1">Game 1</SelectItem>
                                        <SelectItem value="Game 2">Game 2</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Game Type */}
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-600">Game Type</label>
                                <Select value={gameType} onValueChange={setGameType}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="All Games">All Games</SelectItem>
                                        <SelectItem value="Type 1">Type 1</SelectItem>
                                        <SelectItem value="Type 2">Type 2</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Session */}
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-600">Session</label>
                                <Select value={session} onValueChange={setSession}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="All">All</SelectItem>
                                        <SelectItem value="Morning">Morning</SelectItem>
                                        <SelectItem value="Evening">Evening</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Submit button */}
                        <div className="mt-6 flex flex-col sm:flex-row sm:justify-end items-center gap-2">
                            <Button
                                onClick={handleSubmit}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 w-full sm:w-auto"
                            >
                                Submit
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Table Card */}
                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold text-gray-700">
                            Bid History List
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* Search Input */}
                        <div className="mb-6 w-full max-w-md mx-auto">
                            <Input
                                type="text"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gray-100">
                                        <TableHead>Name</TableHead>
                                        <TableHead>Mobile</TableHead>
                                        <TableHead>Bid Date</TableHead>
                                        <TableHead>Bid Time</TableHead>
                                        <TableHead>Game Name</TableHead>
                                        <TableHead>Game Type</TableHead>
                                        <TableHead>Session</TableHead>
                                        <TableHead>Open Digit</TableHead>
                                        <TableHead>Close Digit</TableHead>
                                        <TableHead>Open Panna</TableHead>
                                        <TableHead>Close Panna</TableHead>
                                        <TableHead>Points</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell colSpan={14} className="text-center py-8 text-gray-500">
                                            No data available
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

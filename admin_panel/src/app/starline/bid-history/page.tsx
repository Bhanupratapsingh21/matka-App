"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function BidHistoryPage() {
    const [date, setDate] = useState("17/07/2025")
    const [gameName, setGameName] = useState("ALL Game")
    const [gameType, setGameType] = useState("All Games")
    const [session, setSession] = useState("All")
    const [searchTerm, setSearchTerm] = useState("")

    const handleSubmit = () => {
        // Handle form submission
        console.log("Form submitted with:", { date, gameName, gameType, session })
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Bid History Report Section */}
                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold text-gray-700">Bid History Report</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-600">Date</label>
                                <Input type="text" value={date} onChange={(e) => setDate(e.target.value)} className="w-full" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-600">Game Name</label>
                                <Select value={gameName} onValueChange={setGameName}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="ALL Game">ALL Game</SelectItem>
                                        <SelectItem value="Game 1">Game 1</SelectItem>
                                        <SelectItem value="Game 2">Game 2</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-600">Game Type</label>
                                <Select value={gameType} onValueChange={setGameType}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="All Games">All Games</SelectItem>
                                        <SelectItem value="Type 1">Type 1</SelectItem>
                                        <SelectItem value="Type 2">Type 2</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-600">Session</label>
                                <Select value={session} onValueChange={setSession}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="All">All</SelectItem>
                                        <SelectItem value="Morning">Morning</SelectItem>
                                        <SelectItem value="Evening">Evening</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-end">
                            <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2">
                                Submit
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Bid History List Section */}
                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold text-gray-700">Bid History List</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* Search Bar */}
                        <div className="mb-6 flex justify-center">
                            <div className="w-full max-w-md">
                                <Input
                                    type="text"
                                    placeholder="Search"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full"
                                />
                            </div>
                        </div>

                        {/* Table */}
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
                                    {/* Empty table - no data rows as shown in the screenshot */}
                                    <TableRow>
                                        <TableCell colSpan={14} className="text-center text-gray-500 py-8">
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
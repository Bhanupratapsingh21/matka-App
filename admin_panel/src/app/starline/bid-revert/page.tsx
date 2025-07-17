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
                        <CardTitle className="text-xl font-semibold text-gray-700">Bid Revert Report</CardTitle>
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
                                        <SelectItem value="ALL Game">-Select Game Name-</SelectItem>
                                        <SelectItem value="Game 1">12:00 PM</SelectItem>
                                        <SelectItem value="Game 2">02:00 PM</SelectItem>
                                        <SelectItem value="Game 1">04:00 PM</SelectItem>
                                        <SelectItem value="Game 2">06:00 PM</SelectItem>
                                        <SelectItem value="Game 1">08:00 PM</SelectItem>
                                        <SelectItem value="Game 2">10:00 PM</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="mt-6 flex justify-end">
                                <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2">
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Bid History List Section */}
                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold text-gray-700">List</CardTitle>
                    </CardHeader>
                    <CardContent>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gray-50">
                                        <TableHead className="text-gray-600 font-medium">User Name</TableHead>
                                        <TableHead className="text-gray-600 font-medium">Game Name</TableHead>
                                        <TableHead className="text-gray-600 font-medium">Game Type</TableHead>
                                        <TableHead className="text-gray-600 font-medium">Session</TableHead>
                                        <TableHead className="text-gray-600 font-medium">Open Digit</TableHead>
                                        <TableHead className="text-gray-600 font-medium">Close Digit</TableHead>
                                        <TableHead className="text-gray-600 font-medium">Close Panna</TableHead>
                                        <TableHead className="text-gray-600 font-medium">Open Panna</TableHead>
                                        <TableHead className="text-gray-600 font-medium">Time</TableHead>
                                        <TableHead className="text-gray-600 font-medium">Points</TableHead>
                                    </TableRow>
                                </TableHeader>

                            </Table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
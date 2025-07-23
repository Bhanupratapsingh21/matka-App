"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function GameReportPage() {
    const [heading, setHeading] = useState("Today Result History")

    const handleFilterClick = () => {
        setHeading("17 July 2025 Result History")
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Select Game Section */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h2 className="text-lg font-medium text-gray-700 mb-6">Select Game</h2>
                    <h1 className="text-xl font-bold mb-4">{heading}</h1>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        <div className="space-y-2">
                            <Label htmlFor="result-date" className="text-sm text-gray-600">
                                Result Date
                            </Label>
                            <Input
                                id="result-date"
                                type="text"
                                value="17/07/2025"
                                className="border-gray-300 w-27"
                                readOnly
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="game-name" className="text-sm text-gray-600">
                                Game Name
                            </Label>
                            <Select defaultValue="all-games">
                                <SelectTrigger className="border-gray-300">
                                    <SelectValue placeholder="All Games" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all-games">All Games</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="game-type" className="text-sm text-gray-600">
                                Game Type
                            </Label>
                            <Select defaultValue="all-games-type">
                                <SelectTrigger className="border-gray-300">
                                    <SelectValue placeholder="All Games" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all-games-type">All Games</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="session" className="text-sm text-gray-600">
                                Session
                            </Label>
                            <Select defaultValue="all">
                                <SelectTrigger className="border-gray-300">
                                    <SelectValue placeholder="All" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <Button className="bg-blue-700 hover:bg-blue-700 text-white px-8 py-2"
                            onClick={handleFilterClick}>
                            Get Report
                        </Button>
                    </div>
                </div>

                {/* Winning History List Section */}
                <div className="bg-white rounded-lg shadow-sm p-6">

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">#</th>
                                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Date</th>
                                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">User</th>
                                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Mobile</th>
                                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Game</th>
                                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Game Type</th>
                                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Session</th>
                                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Open Digit</th>
                                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Close Digit</th>
                                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Open Panna</th>
                                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Close Panna</th>
                                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Amount</th>
                                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Wonamount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Table rows will go here */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

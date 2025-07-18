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

    const [data, setData] = useState([
        {
            id: 1,
            gameName: "KALYAN MORNING",
            resultDate: "2025-07-17",
            openTime: "17 Jul 2025 11:23 AM",
            closeTime: "17 Jul 2025 12:12 PM",
            openNumber: "1290",
            closeNumber: "9360",
        },
    ])

    const handleFilterClick = () => {
        setHeading("17 July 2025 Result History")
    }

    const handleDelete = (id: number) => {
        const filteredData = data.filter((item) => item.id !== id)
        setData(filteredData)
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Select Game Section */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h2 className="text-lg font-medium text-gray-700 mb-6">Select Game</h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        <div className="space-y-2">
                            <Label htmlFor="result-date" className="text-sm text-gray-600">
                                Result Date
                            </Label>
                            <Input
                                id="result-date"
                                type="text"
                                value="17/07/2025"
                                className="border-gray-300"
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
                        <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-2">
                            Go
                        </Button>
                    </div>
                </div>

                {/* Winning History List Section */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end mb-6">
                        <div className="space-y-2">
                            <Label htmlFor="result-date" className="text-sm text-gray-600">
                                Result Date
                            </Label>
                            <Input
                                id="result-date"
                                type="text"
                                value="17/07/2025"
                                className="border-gray-300"
                                readOnly
                            />
                        </div>

                        <div className="space-y-2">
                            <Button onClick={handleFilterClick} className="bg-blue-700 text-white">
                                Filter
                            </Button>
                        </div>
                    </div>

                    <h2 className="text-lg font-medium text-gray-700 mb-6">
                        {heading}
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">#</th>
                                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Game Name</th>
                                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Result Date</th>
                                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Open Declare Time</th>
                                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Close Declare Time</th>
                                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Open Number</th>
                                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Close Number</th>
                                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length === 0 ? (
                                    <tr>
                                        <td colSpan={8} className="text-center py-4 text-gray-500">
                                            No data available
                                        </td>
                                    </tr>
                                ) : (
                                    data.map((item, index) => (
                                        <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="py-2 px-2 text-sm">{index + 1}</td>
                                            <td className="py-2 px-2 text-sm">{item.gameName}</td>
                                            <td className="py-2 px-2 text-sm">{item.resultDate}</td>
                                            <td className="py-2 px-2 text-sm">{item.openTime}</td>
                                            <td className="py-2 px-2 text-sm">{item.closeTime}</td>
                                            <td className="py-2 px-2 text-sm">{item.openNumber}</td>
                                            <td className="py-2 px-2 text-sm">{item.closeNumber}</td>
                                            <td className="py-2 px-2 text-sm">
                                                <Button
                                                    variant="destructive"
                                                    className="text-xs px-3 py-1"
                                                    onClick={() => handleDelete(item.id)}
                                                >
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

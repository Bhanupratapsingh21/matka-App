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
    const [data, setData] = useState<any[]>([])

    const handleFilterClick = () => {
        setHeading("17 July 2025 Result History")
        // TODO: Add filter logic or API call
    }

    const handleDelete = (id: number) => {
        setData((prev) => prev.filter((item) => item.id !== id))
    }

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-6">
            <div className="max-w-7xl mx-auto space-y-6">

                {/* Filter Section */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-lg font-semibold text-gray-700 mb-6">Select Game</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="result-date">Result Date</Label>
                            <Input
                                id="result-date"
                                type="text"
                                value="17/07/2025"
                                readOnly
                                className="border-gray-300 w-27"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="game-name">Game Name</Label>
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
                            <Label htmlFor="game-type">Game Type</Label>
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
                            <Label htmlFor="session">Session</Label>
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
                        <Button
                            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2"
                            onClick={handleFilterClick}
                        >
                            Go
                        </Button>
                    </div>
                </div>

                {/* Result Table Section */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div>
                            <Label htmlFor="filter-date">Result Date</Label>
                            <Input
                                id="filter-date"
                                type="text"
                                value="17/07/2025"
                                readOnly
                                className="border-gray-300 mt-5"
                            />
                        </div>
                        <div className="flex items-end">
                            <Button
                                onClick={handleFilterClick}
                                className="bg-blue-700 text-white w-full sm:w-auto"
                            >
                                Filter
                            </Button>
                        </div>
                    </div>

                    <h2 className="text-lg font-semibold text-gray-700 mb-4">{heading}</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border rounded">
                            <thead>
                                <tr className="bg-gray-100 text-left text-gray-600">
                                    <th className="p-2">#</th>
                                    <th className="p-2">Game Name</th>
                                    <th className="p-2">Result Date</th>
                                    <th className="p-2">Open Time</th>
                                    <th className="p-2">Close Time</th>
                                    <th className="p-2">Open Number</th>
                                    <th className="p-2">Close Number</th>
                                    <th className="p-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length === 0 ? (
                                    <tr>
                                        <td colSpan={8} className="text-center text-gray-500 py-6">
                                            No data available
                                        </td>
                                    </tr>
                                ) : (
                                    data.map((item, index) => (
                                        <tr key={item.id} className="border-t hover:bg-gray-50">
                                            <td className="p-2">{index + 1}</td>
                                            <td className="p-2">{item.gameName}</td>
                                            <td className="p-2">{item.resultDate}</td>
                                            <td className="p-2">{item.openTime}</td>
                                            <td className="p-2">{item.closeTime}</td>
                                            <td className="p-2">{item.openNumber}</td>
                                            <td className="p-2">{item.closeNumber}</td>
                                            <td className="p-2">
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

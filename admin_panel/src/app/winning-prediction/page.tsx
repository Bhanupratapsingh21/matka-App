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
import { Calendar, TrendingUp, Wallet } from "lucide-react";

export default function WinningPredictionContent() {
    const [selectedDate, setSelectedDate] = useState("2025-07-16");
    const [selectedGame, setSelectedGame] = useState("MADHUR DAY");
    const [selectedSession, setSelectedSession] = useState("Close");
    const [selectedOpenPanna, setSelectedOpenPanna] = useState("117");
    const [selectedClosePanna, setSelectedClosePanna] = useState("123");

    return (
        <main className="flex-1 p-4 sm:p-6">
            <div className="space-y-6">
                {/* Select Game Section */}
                <Card>
                    <CardContent className="p-4 sm:p-6">
                        <h2 className="text-lg font-semibold mb-4">Select Game</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Result Date
                                </label>
                                <div className="relative w-50">
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
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Game Name
                                </label>
                                <Select value={selectedGame} onValueChange={setSelectedGame} >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="MADHUR DAY">MADHUR DAY</SelectItem>
                                        <SelectItem value="RAJDHANI DAY">RAJDHANI DAY</SelectItem>
                                        <SelectItem value="KALYAN STAR DAY">KALYAN STAR DAY</SelectItem>
                                        <SelectItem value="MILAN DAY">MILAN DAY</SelectItem>
                                        <SelectItem value="TIME BAZAR">TIME BAZAR</SelectItem>
                                        <SelectItem value="SRIDEVI">SRIDEVI</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Session
                                </label>
                                <Select value={selectedSession} onValueChange={setSelectedSession}>
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
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Open Panna
                                </label>
                                <Select value={selectedOpenPanna} onValueChange={setSelectedOpenPanna}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="117">117</SelectItem>
                                        <SelectItem value="118">118</SelectItem>
                                        <SelectItem value="119">119</SelectItem>
                                        <SelectItem value="123">123</SelectItem>
                                        <SelectItem value="124">124</SelectItem>
                                        <SelectItem value="125">125</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Close Panna
                                </label>
                                <Select value={selectedClosePanna} onValueChange={setSelectedClosePanna}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="123">123</SelectItem>
                                        <SelectItem value="124">124</SelectItem>
                                        <SelectItem value="125">125</SelectItem>
                                        <SelectItem value="126">126</SelectItem>
                                        <SelectItem value="127">127</SelectItem>
                                        <SelectItem value="128">128</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700">Go</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Summary Section */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-gray-600" />
                        <span>Total Bid Amount :</span>
                        <span className="font-bold text-gray-900">{/* Value */}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Wallet className="w-4 h-4 text-gray-600" />
                        <span>Total Winning Amount :</span>
                        <span className="font-bold text-gray-900">{/* Value */}</span>
                    </div>
                </div>

                {/* Winning Predictions Table */}
                <Card>
                    <CardContent className="p-0">
                        <div className="overflow-auto">
                            <table className="w-full min-w-[900px]">
                                <thead className="bg-gray-50">
                                    <tr>
                                        {[
                                            "#", "Date", "User", "Mobile", "Game Type", "Session",
                                            "Open Panna", "Open Digit", "Close Digit", "Close Panna",
                                            "Bid Amount", "Won Amount"
                                        ].map((head, idx) => (
                                            <th
                                                key={idx}
                                                className="text-left py-3 px-4 text-xs font-medium text-gray-600 whitespace-nowrap"
                                            >
                                                {head}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Render data here */}
                                    <tr>
                                        <td colSpan={12} className="text-center text-gray-500 py-4">
                                            No data available
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <footer className="mt-6 text-center text-sm text-gray-500">
                2025 ©Matka
            </footer>
        </main>
    );
}

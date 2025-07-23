"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableHead,
    TableHeader,
    TableRow,
    TableCell,
} from "@/components/ui/table";

export default function BidHistoryPage() {
    const [date, setDate] = useState("17/07/2025");
    const [gameName, setGameName] = useState("ALL Game");
    const [gameType, setGameType] = useState("All Games");
    const [session, setSession] = useState("All");

    const handleSubmit = () => {
        console.log("Form submitted with:", { date, gameName, gameType, session });
        setGameName("");
        setGameType("");
        setSession("");
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-6">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Report Form */}
                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="text-lg md:text-xl font-semibold text-gray-700">
                            Bid Revert Report
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {/* Date */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-600">
                                    Date
                                </label>
                                <Input
                                    type="text"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="w-full"
                                />
                            </div>

                            {/* Game Name */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-600">
                                    Game Name
                                </label>
                                <Select value={gameName} onValueChange={setGameName}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="-Select Game Name-" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="ALL Game">-Select Game Name-</SelectItem>
                                        <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                                        <SelectItem value="02:00 PM">02:00 PM</SelectItem>
                                        <SelectItem value="04:00 PM">04:00 PM</SelectItem>
                                        <SelectItem value="06:00 PM">06:00 PM</SelectItem>
                                        <SelectItem value="08:00 PM">08:00 PM</SelectItem>
                                        <SelectItem value="10:00 PM">10:00 PM</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Spacer for layout on small screens */}
                            <div className="sm:col-span-2 md:col-span-1"></div>

                            {/* Submit Button */}
                            <div className="flex justify-end md:justify-start items-end pt-2">
                                <Button
                                    onClick={handleSubmit}
                                    className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white"
                                >
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Bid History Table */}
                <Card className="bg-white">
                    <CardHeader>
                        <CardTitle className="text-lg md:text-xl font-semibold text-gray-700">
                            List
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gray-50">
                                        <TableHead className="text-gray-600 font-medium">
                                            User Name
                                        </TableHead>
                                        <TableHead className="text-gray-600 font-medium">
                                            Game Name
                                        </TableHead>
                                        <TableHead className="text-gray-600 font-medium">
                                            Game Type
                                        </TableHead>
                                        <TableHead className="text-gray-600 font-medium">
                                            Session
                                        </TableHead>
                                        <TableHead className="text-gray-600 font-medium">
                                            Open Digit
                                        </TableHead>
                                        <TableHead className="text-gray-600 font-medium">
                                            Close Digit
                                        </TableHead>
                                        <TableHead className="text-gray-600 font-medium">
                                            Close Panna
                                        </TableHead>
                                        <TableHead className="text-gray-600 font-medium">
                                            Open Panna
                                        </TableHead>
                                        <TableHead className="text-gray-600 font-medium">
                                            Time
                                        </TableHead>
                                        <TableHead className="text-gray-600 font-medium">
                                            Points
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                {/* Add <TableBody> with rows here later */}
                            </Table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

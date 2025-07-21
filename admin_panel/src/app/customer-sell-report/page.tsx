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

export default function CustomerSellReport() {
  const [date, setDate] = useState("2025-07-17"); // format for input type="date"
  const [selectedGame, setSelectedGame] = useState("");
  /*
    const singleDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    const pannaNumbers = [
        [120, 123, 124, 125, 126, 127, 129, 130, 134, 135],
        [136, 137, 138, 139, 140, 145, 146, 147, 148, 149, 150, 156],
        [157, 158, 159, 160, 167, 168, 169, 170, 178, 179, 180, 189],
        [190, 230, 234, 235, 236, 237, 238, 239, 240, 245, 246, 247],
        [248, 249, 250, 256, 257, 258, 259, 260, 267, 268, 269, 270],
        [278, 279, 280, 289, 290, 340, 345, 346, 347, 348, 349, 350],
        [356, 357, 358, 359, 360, 367, 368, 369, 370, 378, 379, 380],
        [389, 390, 450, 456, 457, 458, 459, 460, 467, 468, 469, 470],
        [478, 479, 480, 489, 490, 560, 567, 568, 569, 570, 578, 579],
        [580, 589, 590, 670, 678, 679, 680, 689, 690, 780, 789, 790],
        [890],
    ]
    */

  const handleSubmit = () => {
    console.log("Submit clicked");
  };

  const handleClear = () => {
    setDate("");
    setSelectedGame("");
  };
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-xl font-semibold text-gray-800 mb-6">
            Customer Sell Report
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Game Name
              </label>
              <Select value={selectedGame} onValueChange={setSelectedGame}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Game" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="game1">Game 1</SelectItem>
                  <SelectItem value="game2">Game 2</SelectItem>
                  <SelectItem value="game3">Game 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8"
            >
              Submit
            </Button>

            <Button
              onClick={handleClear}
              variant="destructive"
              className="bg-red-500 hover:bg-red-600 text-white px-8"
            >
              CLEAR
            </Button>
          </div>
        </div>

        {/* Single Digit Section
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Single Digit
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-center font-medium text-gray-700">
                    Digit
                  </th>
                  {singleDigits.map((digit) => (
                    <th
                      key={digit}
                      className="border border-gray-300 px-4 py-3 text-center font-medium text-gray-700"
                    >
                      {digit}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center font-medium text-gray-700 bg-gray-50">
                    Point
                  </td>
                  {singleDigits.map((digit) => (
                    <td
                      key={digit}
                      className="border border-gray-300 px-4 py-3 text-center"
                    >
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500 text-white text-sm rounded-full">
                        0
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        */}

        {/* Panna Section 
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Panna</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <tbody>
                  */}
        {/* First row with headers 
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 text-center font-medium text-gray-700">
                    Digit
                  </td>
                  {pannaNumbers[0].map((num) => (
                      <td
                      key={num}
                      className="border border-gray-300 px-4 py-3 text-center font-medium text-gray-700"
                    >
                      {num}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center font-medium text-gray-700 bg-gray-50">
                    Point
                  </td>
                  {pannaNumbers[0].map((num) => (
                      <td
                      key={num}
                      className="border border-gray-300 px-4 py-3 text-center"
                    >
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500 text-white text-sm rounded-full">
                        0
                      </span>
                    </td>
                  ))}
                </tr>

                          */}
        {/* Remaining rows
                {pannaNumbers.slice(1).map((row, rowIndex) => (
                    <tr key={`row-${rowIndex}`}>
                    {row.map((num) => (
                        <td
                        key={num}
                        className="border border-gray-300 px-4 py-3"
                      >
                        <div className="text-center">
                          <div className="font-medium text-gray-700 mb-1">
                            {num}
                          </div>
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500 text-white text-sm rounded-full">
                            0
                          </span>
                        </div>
                      </td>
                    ))}
                    {row.length < 12 &&
                      Array.from({ length: 12 - row.length }).map(
                        (_, emptyIndex) => (
                          <td
                            key={`empty-${rowIndex}-${emptyIndex}`}
                            className="border border-gray-300 px-4 py-3"
                          ></td>
                        )
                      )}
                  </tr>
                ))
                }
              </tbody>
            </table>
          </div>
        </div>
        */}
      </div>
    </div>
  );
}

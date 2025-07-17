"use client";
import { WinningPrediction } from "@/types/AllTypes";
import { useState } from "react";

const Winning = () => {
    const [resultDate, setResultDate] = useState<string>(() => {
        const today = new Date();
        return today.toISOString().split("T")[0];
    });

    const [gameName, setGameName] = useState<string>("");
    const [openSelected, setOpenSelected] = useState<boolean>(false);
    const [closeSelected, setCloseSelected] = useState<boolean>(false);
    const [openPanna, setOpenPanna] = useState<string>("");
    const [closePanna, setClosePanna] = useState<string>("");

    const gameNames = [
        "KALYAN STAR MORNING", "MANGA MORNING", "MAHADEV MORNING",
        "SRIDEVI MORNING", "KARNATAKA DAY", "MILAN MORNING", "KALYAN MORNING",
        "SUPREME MORNING", "MADHUR MORNING", "SRIDEVI", "TIME BAZAR",
        "MADHUR DAY", "KALYAN STAR DAY", "MAHADEV DAY", "MILAN DAY", "PARVATI DAY",
        "RAJDHANI DAY", "SUPREME DAY", "KALYAN", "KARNATAKA NIGHT",
        "SRIDEVI NIGHT", "KALYAN STAR NIGHT", "MANGAL NIGHT", "MADHUR NIGHT",
        "SUPREME NIGHT", "MAHADEV NIGHT", "MAIN MUMBAI NIGHT", "MILAN NIGHT",
        "KALYAN NIGHT", "RAJDHANI NIGHT", "MAIN BAZAR"
    ];

    const pannaNumbers = Array.from({ length: 1000 }, (_, i) =>
        i.toString().padStart(3, '0')
    );

    const handleSubmit = () => {
        if (!resultDate || !gameName || (!openSelected && !closeSelected)) {
            alert("Please fill all required fields");
            return;
        }

        const data: WinningPrediction = {
            resultDate,
            gameName,
            openPanna: openSelected ? openPanna : undefined,
            closePanna: closeSelected ? closePanna : undefined,
        };


        console.log({
            resultDate,
            gameName,
            openPanna: openSelected ? openPanna : null,
            closePanna: closeSelected ? closePanna : null,
        });

        // api 
    };

    return (
        <div className="p-4 space-y-6 max-w-xl mx-auto w-full">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
                <h2 className="text-lg font-semibold">Select Game</h2>
                <div>
                    <label className="block mb-1 text-sm font-medium">Result Date</label>
                    <input
                        type="date"
                        value={resultDate}
                        onChange={(e) => setResultDate(e.target.value)}
                        className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm font-medium">Game Name</label>
                    <select
                        value={gameName}
                        onChange={(e) => setGameName(e.target.value)}
                        className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
                    >
                        <option value="">Select Game Name</option>
                        {gameNames.map((name, idx) => (
                            <option key={idx} value={name}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block mb-1 text-sm font-medium">Session</label>
                    <select
                        onChange={(e) => {
                            const value = e.target.value;
                            if (value === "open") {
                                setOpenSelected(true);
                            } else if (value === "close") {
                                setCloseSelected(true);
                            }
                        }}
                        className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
                    >
                        <option value="">Select Session</option>
                        <option value="open">Open</option>
                        <option value="close">Close</option>
                    </select>
                </div>
                {openSelected && (
                    <div>
                        <label className="block mb-1 text-sm font-medium">Open Panna</label>
                        <select
                            value={openPanna}
                            onChange={(e) => setOpenPanna(e.target.value)}
                            className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
                        >
                            <option value="">Select Open Panna</option>
                            {pannaNumbers.map((num) => (
                                <option key={num} value={num}>
                                    {num}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Close Panna Dropdown */}
                {closeSelected && (
                    <div>
                        <label className="block mb-1 text-sm font-medium">Close Panna</label>
                        <select
                            value={closePanna}
                            onChange={(e) => setClosePanna(e.target.value)}
                            className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
                        >
                            <option value="">Select Close Panna</option>
                            {pannaNumbers.map((num) => (
                                <option key={num} value={num}>
                                    {num}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                <button
                    onClick={handleSubmit}
                    className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 text-sm w-full sm:w-auto"
                >
                    Go
                </button>
            </div>
        </div>
    );
};

export default Winning;

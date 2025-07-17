'use client';

import { useState } from "react";

const initialValues = {
    singleDigit1: "", singleDigit2: "",
    jodiDigit1: "", jodiDigit2: "",
    singlePana1: "", singlePana2: "",
    doublePana1: "", doublePana2: "",
    tripplePana1: "", tripplePana2: "",
    halfSangam1: "", halfSangam2: "",
    fullSangam1: "", fullSangam2: "",
    leftDigit1: "", leftDigit2: "",
    rightDigit1: "", rightDigit2: "",
    jodiRepeat1: "", jodiRepeat2: "",
    starlineSingleDigit1: "", starlineSingleDigit2: "",
    starlineSinglePana1: "", starlineSinglePana2: "",
    starlineDoublePana1: "", starlineDoublePana2: "",
    starlineTripplePana1: "", starlineTripplePana2: "",
};

export default function GameValuesPage() {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted values:", values);
    };

    return (
        <div>
            <main className="flex-1 p-6">
                <div className="p-4 max-w-6xl mx-auto">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-md">
                        {[
                            ["Single Digit Value", "singleDigit"],
                            ["Jodi Digit Value", "jodiDigit"],
                            ["Single Pana Value", "singlePana"],
                            ["Double Pana Value", "doublePana"],
                            ["Tripple Pana Value", "tripplePana"],
                            ["Half Sangam Value", "halfSangam"],
                            ["Full Sangam Value", "fullSangam"],
                            ["Left Digit Value", "leftDigit"],
                            ["Right Digit Value", "rightDigit"],
                            ["Jodi Digit Value", "jodiRepeat"],
                            ["Starline Single Digit Value", "starlineSingleDigit"],
                            ["Starline Single Pana Value", "starlineSinglePana"],
                            ["Starline Double Pana Value", "starlineDoublePana"],
                            ["Starline Tripple Pana Value", "starlineTripplePana"],
                        ].map(([label, name]) => (
                            <div key={name} className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">{label} 1</label>
                                    <input
                                        type="text"
                                        name={`${name}1`}
                                        value={(values as any)[`${name}1`]}
                                        onChange={handleChange}
                                        className="w-full border rounded px-3 py-2 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">{label} 2</label>
                                    <input
                                        type="text"
                                        name={`${name}2`}
                                        value={(values as any)[`${name}2`]}
                                        onChange={handleChange}
                                        className="w-full border rounded px-3 py-2 text-sm"
                                    />
                                </div>
                            </div>
                        ))}

                        <div className="col-span-1 md:col-span-2 flex justify-start mt-4">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            <footer className="p-4 text-center text-sm text-gray-500 bg-white border-t ">
                2025 ©Matka
            </footer>

        </div>
    );
}

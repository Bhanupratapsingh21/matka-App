"use client";

import { useState } from "react";

type ValueKeys =
  | "singleDigit"
  | "jodiDigit"
  | "singlePana"
  | "doublePana"
  | "tripplePana"
  | "halfSangam"
  | "fullSangam"
  | "leftDigit"
  | "rightDigit"
  | "jodiRepeat"
  | "starlineSingleDigit"
  | "starlineSinglePana"
  | "starlineDoublePana"
  | "starlineTripplePana";

type GameValues = {
  [key in ValueKeys]: {
    1: string;
    2: string;
  };
};

const initialValues: GameValues = {
  singleDigit: { 1: "", 2: "" },
  jodiDigit: { 1: "", 2: "" },
  singlePana: { 1: "", 2: "" },
  doublePana: { 1: "", 2: "" },
  tripplePana: { 1: "", 2: "" },
  halfSangam: { 1: "", 2: "" },
  fullSangam: { 1: "", 2: "" },
  leftDigit: { 1: "", 2: "" },
  rightDigit: { 1: "", 2: "" },
  jodiRepeat: { 1: "", 2: "" },
  starlineSingleDigit: { 1: "", 2: "" },
  starlineSinglePana: { 1: "", 2: "" },
  starlineDoublePana: { 1: "", 2: "" },
  starlineTripplePana: { 1: "", 2: "" },
};

export default function GameValuesPage() {
  const [values, setValues] = useState<GameValues>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const match = name.match(/^([a-zA-Z]+)([12])$/);
    if (!match) return;

    const key = match[1] as ValueKeys;
    const index = match[2] as "1" | "2";

    setValues((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [index]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted values:", values);
  };

  const fields: [string, ValueKeys][] = [
    ["Single Digit", "singleDigit"],
    ["Jodi Digit", "jodiDigit"],
    ["Single Pana", "singlePana"],
    ["Double Pana", "doublePana"],
    ["Tripple Pana", "tripplePana"],
    ["Half Sangam", "halfSangam"],
    ["Full Sangam", "fullSangam"],
    ["Left Digit", "leftDigit"],
    ["Right Digit", "rightDigit"],
    ["Jodi Repeat", "jodiRepeat"],
    ["Starline Single Digit", "starlineSingleDigit"],
    ["Starline Single Pana", "starlineSinglePana"],
    ["Starline Double Pana", "starlineDoublePana"],
    ["Starline Tripple Pana", "starlineTripplePana"],
  ];

  return (
    <div>
      <main className="flex-1 p-4 sm:p-6 bg-gray-100 min-h-screen">
        <div className="p-4 max-w-6xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-md"
          >
            {fields.map(([label, name]) => (
              <div key={name} className="grid grid-cols-2 gap-4">
                {[1, 2].map((index) => (
                  <div key={index}>
                    <label className="block text-sm font-medium mb-1">
                      {label} {index}
                    </label>
                    <input
                      type="text"
                      name={`${name}${index}`}
                      value={values[name][index as 1 | 2]}
                      onChange={handleChange}
                      className="w-full border rounded px-3 py-2 text-sm"
                    />
                  </div>
                ))}
              </div>
            ))}

            <div className="col-span-1 md:col-span-2 flex justify-start mt-4">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
      <footer className="p-4 text-center text-sm text-gray-500 bg-white border-t">
        © 2025 MH GAMES
      </footer>
    </div>
  );
}

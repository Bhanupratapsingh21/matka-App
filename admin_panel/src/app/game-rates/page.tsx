"use client";

import { useState } from "react";
/*
type ValueKeys =
| 'singleDigit'
| 'jodiDigit'
| 'singlePana'
| 'doublePana'
| 'tripplePana'
| 'halfSangam'
| 'fullSangam'
| 'leftDigit'
| 'rightDigit'
    | 'jodiRepeat'
    | 'starlineSingleDigit'
    | 'starlineSinglePana'
    | 'starlineDoublePana'
    | 'starlineTripplePana';
    
    type GameValues = {
        [key in ValueKeys]: {
            1: string;
            2: string;
        };
    };
    
    const initialValues: GameValues = {
        singleDigit: { 1: '', 2: '' },
    jodiDigit: { 1: '', 2: '' },
    singlePana: { 1: '', 2: '' },
    doublePana: { 1: '', 2: '' },
    tripplePana: { 1: '', 2: '' },
    halfSangam: { 1: '', 2: '' },
    fullSangam: { 1: '', 2: '' },
    leftDigit: { 1: '', 2: '' },
    rightDigit: { 1: '', 2: '' },
    jodiRepeat: { 1: '', 2: '' },
    starlineSingleDigit: { 1: '', 2: '' },
    starlineSinglePana: { 1: '', 2: '' },
    starlineDoublePana: { 1: '', 2: '' },
    starlineTripplePana: { 1: '', 2: '' },
};
*/

export default function GameValuesPage() {
  const [values, setValues] = useState();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const match = name.match(/^([a-zA-Z]+)([12])$/);
    if (!match) return;
    /*


const key = match[1] as ValueKeys;
const index = match[2] as "1" | "2";

setValues((prev) => ({
    ...prev,
    [key]: {
        ...prev[key],
        [index]: value,
    },
}));
*/
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted values:", values);
  };

  return (
    <div>
      <main className="flex-1 p-6">
        <div className="p-4 max-w-6xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-md"
          >
            {/*
            [
            
            ["Single Digit Value", "singleDigit"],
            ["Jodi Digit Value", "jodiDigit"],
           ["Single Pana Value", "singlePana"],
           ["Double Pana Value", "doublePana"],
           ["Tripple Pana Value", "tripplePana"],
           ["Half Sangam Value", "halfSangam"],
           ["Full Sangam Value", "fullSangam"],
           ["Left Digit Value", "leftDigit"],
           ["Right Digit Value", "rightDigit"],
           ["Jodi Repeat Value", "jodiRepeat"],
           ["Starline Single Digit Value", "starlineSingleDigit"],
           ["Starline Single Pana Value", "starlineSinglePana"],
           ["Starline Double Pana Value", "starlineDoublePana"],
           ["Starline Tripple Pana Value", "starlineTripplePana"],
        ].map(([label, name]) => (
            <div key={name} className="grid grid-cols-2 gap-4">
            <div>
            <label className="block text-sm font-medium mb-1">
            {label} 1
            </label>
            <input
            type="text"
            name={`${name}1`}
            value={values[name as ValueKeys][1]}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm"
            />
            </div>
            <div>
            <label className="block text-sm font-medium mb-1">
            {label} 2
            </label>
            <input
            type="text"
            name={`${name}2`}
            value={values[name as ValueKeys][2]}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm"
            />
            </div>
            </div>
        ))
        */}

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
      <footer className="p-4 text-center text-sm text-gray-500 bg-white border-t">
        2025 ©MH GAMES
      </footer>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { GameName } from "@/types/AllTypes";

const GameList = () => {
  const [games, setGames] = useState<GameName[]>();
  const [sidebar, setOpenSidebar] = useState(false);
  const [newGame, setNewGame] = useState({
    name: "",
    nameHindi: "",
    market: "",
    day: "",
    openTime: "",
    closeTime: "",
  });

  const handleReset = () => {
    setNewGame({
      name: "",
      nameHindi: "",
      market: "",
      day: "",
      openTime: "",
      closeTime: "",
    });
    setOpenSidebar(false);
  };

  return (
    <div>
      <main className="flex-1 p-4 sm:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <h1 className="text-xl font-semibold">Game Name List</h1>
            <button
              className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
              onClick={() => setOpenSidebar(true)}
            >
              Add Game
            </button>
          </div>

          <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
            <table className="min-w-full text-sm text-left border border-gray-200">
              <thead className="bg-white text-xs font-semibold text-gray-700 uppercase">
                <tr>
                  <th className="p-3 border">#</th>
                  <th className="p-3 border">Game Name</th>
                  <th className="p-3 border">Game Name Hindi</th>
                  <th className="p-3 border">Market</th>
                  <th className="p-3 border">Open Time</th>
                  <th className="p-3 border">Close Time</th>
                  <th className="p-3 border">Status</th>
                  <th className="p-3 border">Market Status</th>
                  <th className="p-3 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample empty state */}
                <tr>
                  <td colSpan={9} className="text-center py-6 text-gray-500">
                    No games found.
                  </td>
                </tr>

                {/* Uncomment this to render your games list */}
                {/* 
                games.map((game, idx) => (
                  <tr key={game.id} className="text-gray-700 even:bg-gray-50">
                    <td className="p-3 border">{idx + 1}</td>
                    <td className="p-3 border">{game.name}</td>
                    <td className="p-3 border">{game.nameHindi}</td>
                    <td className="p-3 border">{game.market}</td>
                    <td className="p-3 border">{game.openTime}</td>
                    <td className="p-3 border">{game.closeTime}</td>
                    <td className="p-3 border">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        game.status === "Active"
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}>
                        {game.status}
                      </span>
                    </td>
                    <td className="p-3 border">
                      <input
                        type="checkbox"
                        checked={game.marketStatus}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-0"
                      />
                    </td>
                    <td className="p-3 border">
                      <div className="flex flex-col sm:flex-row gap-2">
                        <button className="px-3 py-1 text-xs rounded border border-blue-700 text-blue-700">Edit</button>
                        <button className={`px-3 py-1 text-xs rounded ${
                          game.status === "Active"
                            ? "text-red-600 border border-red-600"
                            : "text-green-700 border border-green-600"
                        }`}>
                          {game.status === "Active" ? "Inactive" : "Active"}
                        </button>
                        <button className="px-3 py-1 text-xs rounded border border-blue-600 text-blue-600">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))
                */}
              </tbody>
            </table>
          </div>

          {/* Sidebar Form */}
          {sidebar && (
            <div className="fixed inset-0 bg-black/50 z-40">
              <div className="fixed right-0 top-0 w-full max-w-md h-full bg-white shadow-lg z-50 overflow-y-auto p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">Add Game</h2>
                  <button
                    onClick={() => setOpenSidebar(false)}
                    className="text-2xl font-bold text-gray-700"
                  >
                    &times;
                  </button>
                </div>

                {/* Form Fields */}
                {[
                  { label: "Game Name", name: "name", type: "text" },
                  { label: "Game Name (Hindi)", name: "nameHindi", type: "text" },
                  { label: "Open Time", name: "openTime", type: "time" },
                  { label: "Close Time", name: "closeTime", type: "time" }
                ].map(({ label, name, type }) => (
                  <div className="mb-4" key={name}>
                    <label className="block font-medium text-sm mb-1">{label}</label>
                    <input
                      type={type}
                      className="w-full border rounded px-3 py-2"
                      value={(newGame as any)[name]}
                      onChange={(e) => setNewGame({ ...newGame, [name]: e.target.value })}
                    />
                  </div>
                ))}

                {/* Market Radio */}
                <div className="mb-4">
                  <label className="block font-medium text-sm mb-2">Market</label>
                  <div className="flex flex-wrap gap-4">
                    {["Market", "Starline", "Galidisswar"].map((type) => (
                      <label key={type} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="market"
                          value={type}
                          checked={newGame.market === type}
                          onChange={(e) =>
                            setNewGame({ ...newGame, market: e.target.value })
                          }
                          className="accent-blue-600"
                        />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Day Radio */}
                <div className="mb-4">
                  <label className="block font-medium text-sm mb-2">Day</label>
                  <div className="flex flex-wrap gap-4">
                    {["Saturday", "Sunday"].map((day) => (
                      <label key={day} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="day"
                          value={day}
                          checked={newGame.day === day}
                          onChange={(e) =>
                            setNewGame({ ...newGame, day: e.target.value })
                          }
                          className="accent-blue-600"
                        />
                        <span className="text-sm">{day}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <button className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Submit
                  </button>
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="p-4 text-center text-sm text-gray-500 bg-white border-t">
        2025 © MH GAMES
      </footer>
    </div>
  );
};

export default GameList;

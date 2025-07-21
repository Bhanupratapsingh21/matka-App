"use client"

import React, { useState } from 'react'
import { GameName } from '@/types/AllTypes'

const initialGames: GameName[] = [] // No dummy games

const GameList = () => {
    const [games, setGames] = useState<GameName[]>(initialGames)
    const [sidebar, setOpenSidebar] = useState(false)
    const [newGame, setNewGame] = useState({
        name: '',
        nameHindi: '',
        market: '',
        day: '',
        openTime: '',
        closeTime: '',
    })

    const handleSubmit = () => {
        const newId = games.length > 0 ? games[games.length - 1].id + 1 : 1
        const newEntry: GameName = {
            id: newId,
            name: newGame.name,
            nameHindi: newGame.nameHindi,
            market: newGame.market || 'Galidisswar',
            openTime: newGame.openTime,
            closeTime: newGame.closeTime,
            status: 'Active',
            marketStatus: true,
        }
        setGames(prev => [...prev, newEntry])
        handleReset()
    }

    const handleReset = () => {
        setNewGame({
            name: '',
            nameHindi: '',
            market: '',
            day: '',
            openTime: '',
            closeTime: '',
        })
        setOpenSidebar(false)
    }

    const toggleStatus = (id: number) => {
        setGames(prev =>
            prev.map(game =>
                game.id === id
                    ? { ...game, status: game.status === 'Active' ? 'Inactive' : 'Active' }
                    : game
            )
        )
    }

    const toggleMarketStatus = (id: number) => {
        setGames(prev =>
            prev.map(game =>
                game.id === id ? { ...game, marketStatus: !game.marketStatus } : game
            )
        )
    }

    const deleteGame = (id: number) => {
        setGames(prev => prev.filter(game => game.id !== id))
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-semibold">Game Name List</h1>
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                    onClick={() => setOpenSidebar(true)}
                >
                    Add Game
                </button>
            </div>

            <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
                <table className="w-full text-sm text-left border border-gray-200 min-w-[800px]">
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
                        {games.map((game, idx) => (
                            <tr key={game.id} className="text-gray-700 even:bg-gray-50">
                                <td className="p-3 border">{idx + 1}</td>
                                <td className="p-3 border">{game.name}</td>
                                <td className="p-3 border">{game.nameHindi}</td>
                                <td className="p-3 border">{game.market}</td>
                                <td className="p-3 border">{game.openTime}</td>
                                <td className="p-3 border">{game.closeTime}</td>
                                <td className="p-3 border">
                                    <span
                                        className={`px-2 py-1 rounded text-xs font-medium ${game.status === 'Active'
                                            ? 'bg-green-500 text-white'
                                            : 'bg-red-500 text-white'
                                            }`}
                                    >
                                        {game.status}
                                    </span>
                                </td>
                                <td className="p-3 border">
                                    <input
                                        type="checkbox"
                                        checked={game.marketStatus}
                                        onChange={() => toggleMarketStatus(game.id)}
                                        className="w-4 h-4 text-blue-600 rounded focus:ring-0"
                                    />
                                </td>
                                <td className="p-3 border">
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <button className="px-3 py-1 text-xs rounded border border-blue-700 text-blue-700">
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => toggleStatus(game.id)}
                                            className={`px-3 py-1 text-xs rounded ${game.status === 'Active'
                                                ? 'text-red-600 border border-red-600'
                                                : 'text-green-700 border border-green-600'
                                                }`}
                                        >
                                            {game.status === 'Active' ? 'Inactive' : 'Active'}
                                        </button>
                                        <button
                                            onClick={() => deleteGame(game.id)}
                                            className="px-3 py-1 text-xs rounded border border-blue-600 text-blue-600"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {games.length === 0 && (
                            <tr>
                                <td colSpan={9} className="text-center py-6 text-gray-500">
                                    No games found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

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

                        <div className="mb-4">
                            <label className="block font-medium text-sm mb-1">Game Name</label>
                            <input
                                type="text"
                                placeholder="Enter game name"
                                className="w-full border rounded px-3 py-2"
                                value={newGame.name}
                                onChange={(e) => setNewGame({ ...newGame, name: e.target.value })}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-medium text-sm mb-1">Game Name (Hindi)</label>
                            <input
                                type="text"
                                placeholder="Enter game name in Hindi"
                                className="w-full border rounded px-3 py-2"
                                value={newGame.nameHindi}
                                onChange={(e) => setNewGame({ ...newGame, nameHindi: e.target.value })}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-medium text-sm mb-2">Market</label>
                            <div className="flex gap-4">
                                {['Market', 'Starline', 'Galidisswar'].map((type) => (
                                    <label key={type} className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="market"
                                            value={type}
                                            checked={newGame.market === type}
                                            onChange={(e) => setNewGame({ ...newGame, market: e.target.value })}
                                            className="accent-blue-600"
                                        />
                                        <span className="text-sm">{type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block font-medium text-sm mb-2">Day</label>
                            <div className="flex gap-4">
                                {['Saturday', 'Sunday'].map((day) => (
                                    <label key={day} className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="day"
                                            value={day}
                                            checked={newGame.day === day}
                                            onChange={(e) => setNewGame({ ...newGame, day: e.target.value })}
                                            className="accent-blue-600"
                                        />
                                        <span className="text-sm">{day}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block font-medium text-sm mb-1">Open Time</label>
                            <input
                                type="time"
                                className="w-full border rounded px-3 py-2"
                                value={newGame.openTime}
                                onChange={(e) => setNewGame({ ...newGame, openTime: e.target.value })}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-medium text-sm mb-1">Close Time</label>
                            <input
                                type="time"
                                className="w-full border rounded px-3 py-2"
                                value={newGame.closeTime}
                                onChange={(e) => setNewGame({ ...newGame, closeTime: e.target.value })}
                            />
                        </div>

                        <div className="flex justify-between mt-6">
                            <button
                                onClick={handleSubmit}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Submit
                            </button>
                            <button
                                onClick={handleReset}
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-gray-300"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GameList;

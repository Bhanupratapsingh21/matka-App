"use client";

import React from "react";

export default function FilterBar() {
  return (
    <form className="flex flex-wrap gap-4 items-end bg-white p-4 rounded-lg shadow">
      <div>
        <label className="block text-gray-700 text-sm mb-1">Result Date</label>
        <input type="date" className="border rounded px-3 py-2 w-40" />
      </div>
      <div>
        <label className="block text-gray-700 text-sm mb-1">Game Name</label>
        <select className="border rounded px-3 py-2 w-40">
          <option>All Games</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700 text-sm mb-1">Game Type</label>
        <select className="border rounded px-3 py-2 w-40">
          <option>All Games</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700 text-sm mb-1">Session</label>
        <select className="border rounded px-3 py-2 w-40">
          <option>All</option>
        </select>
      </div>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg"
        type="submit"
      >
        GET REPORT
      </button>
    </form>
  );
}

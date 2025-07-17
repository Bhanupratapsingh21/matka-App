import React from "react";

type WinningHistoryRow = {
  date: string;
  user: string;
  mobile: string;
  game: string;
  gameType: string;
  session: string;
  openDigit: string;
  closeDigit: string;
  openPaana: string;
  closePaana: string;
  amount: string | number;
  wonamount: string | number;
};

type Props = {
  data: WinningHistoryRow[];
};

export default function WinningHistoryTable({ data }: Props) {
  return (
    <div className="overflow-x-auto rounded-lg shadow bg-white mt-6">
      <table className="min-w-full text-xs sm:text-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-left">
            <th className="px-3 py-2">#</th>
            <th className="px-3 py-2">Date</th>
            <th className="px-3 py-2">User</th>
            <th className="px-3 py-2">Mobile</th>
            <th className="px-3 py-2">Game</th>
            <th className="px-3 py-2">Game Type</th>
            <th className="px-3 py-2">Session</th>
            <th className="px-3 py-2">Open Digit</th>
            <th className="px-3 py-2">Close Digit</th>
            <th className="px-3 py-2">Open Paana</th>
            <th className="px-3 py-2">Close Paana</th>
            <th className="px-3 py-2">Amount</th>
            <th className="px-3 py-2">Wonamount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-3 py-2">{i + 1}</td>
              <td className="px-3 py-2">{row.date}</td>
              <td className="px-3 py-2 text-blue-600 underline cursor-pointer">
                {row.user}
              </td>
              <td className="px-3 py-2">{row.mobile}</td>
              <td className="px-3 py-2">{row.game}</td>
              <td className="px-3 py-2">{row.gameType}</td>
              <td className="px-3 py-2">{row.session}</td>
              <td className="px-3 py-2">{row.openDigit}</td>
              <td className="px-3 py-2">{row.closeDigit}</td>
              <td className="px-3 py-2">{row.openPaana}</td>
              <td className="px-3 py-2">{row.closePaana}</td>
              <td className="px-3 py-2">{row.amount}</td>
              <td className="px-3 py-2">{row.wonamount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

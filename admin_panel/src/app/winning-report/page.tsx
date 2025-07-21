import FilterBar from "../../components/FilterBar";
import WinningHistoryTable from "../../components/WinningHistoryTable";

// Dummy data for demonstration
// const data = [
//   {
//     date: "17 Jul 2025",
//     user: "Irfan",
//     mobile: "9059413967",
//     game: "MILAN DAY",
//     gameType: "Single Digit",
//     session: "Close",
//     openDigit: "",
//     closeDigit: "9",
//     openPaana: "",
//     closePaana: "",
//     amount: 25,
//     wonamount: 250,
//   },
//   // ...add more rows as needed, structure matches above table
// ];

export default function WinningHistoryPage() {
  return (
    <div className=" mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-4">Winning History List</h2>
      <FilterBar />
      {/* <WinningHistoryTable data={data} /> */}
    </div>
  );
}

"use client";
import BidsSection from "@/components/BidsSection";
import FundRequestTable from "@/components/FundRequestTable";
import GameReportSection from "@/components/GameReportSection";

import StatsCards from "@/components/StatsCards";
import WelcomeSection from "@/components/WelcomeSection";
/*
const fundRequests = [
  {
    id: 1,
    name: "Santosh",
    mobile: "9071272318",
    amount: 250,
    date: "15 Jul 2025, 04:13 AM",
    status: "SUCCESS",
  },
  {
    id: 2,
    name: "muttu",
    mobile: "9945433287",
    amount: 500,
    date: "15 Jul 2025, 04:07 AM",
    status: "SUCCESS",
  },
  {
    id: 3,
    name: "bahadur",
    mobile: "7999068700",
    amount: 300,
    date: "15 Jul 2025, 04:06 AM",
    status: "SUCCESS",
  },
  {
    id: 4,
    name: "mnagesh",
    mobile: "9618767132",
    amount: 500,
    date: "15 Jul 2025, 04:04 AM",
    status: "SUCCESS",
  },
  {
    id: 5,
    name: "nandiva",
    mobile: "9700930725",
    amount: 500,
    date: "15 Jul 2025, 03:57 AM",
    status: "SUCCESS",
  },
  {
    id: 6,
    name: "bbn",
    mobile: "9972776498",
    amount: 200,
    date: "15 Jul 2025, 03:28 AM",
    status: "SUCCESS",
  },
  {
    id: 7,
    name: "RameshN",
    mobile: "8308882435",
    amount: 250,
    date: "15 Jul 2025, 03:28 AM",
    status: "SUCCESS",
  },
  {
    id: 8,
    name: "yasmin",
    mobile: "9080105962",
    amount: 500,
    date: "15 Jul 2025, 03:28 AM",
    status: "SUCCESS",
  },
  {
    id: 9,
    name: "Pariksh",
    mobile: "9921485607",
    amount: 200,
    date: "15 Jul 2025, 03:08 AM",
    status: "SUCCESS",
  },
  {
    id: 10,
    name: "Syed",
    mobile: "9741724099",
    amount: 200,
    date: "15 Jul 2025, 03:08 AM",
    status: "SUCCESS",
  },
];
*/
export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <WelcomeSection approvedUsers={0} UnapprovedUsers={0} />
      <StatsCards />
      <BidsSection />
      <GameReportSection />
      <FundRequestTable
      //fundrequest={fundRequests}
      />
    </div>
  );
}

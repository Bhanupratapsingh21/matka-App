"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
/*
const allUsers = [
  {
    id: 1,
    name: "madhu",
    mobile: "9620418575",
    date: "16 Jul 2025",
    balance: 1,
    bet: "Yes",
    status: "Yes",
  },
  {
    id: 2,
    name: "santosh",
    mobile: "9480593973",
    date: "16 Jul 2025",
    balance: 1,
    bet: "Yes",
    status: "Yes",
  },
  {
    id: 3,
    name: "DEVENDR",
    mobile: "9226891618",
    date: "16 Jul 2025",
    balance: 1,
    bet: "Yes",
    status: "Yes",
  },
  {
    id: 4,
    name: "shivlal",
    mobile: "7645068671",
    date: "15 Jul 2025",
    balance: 1,
    bet: "Yes",
    status: "Yes",
  },
  {
    id: 5,
    name: "sanjay",
    mobile: "8815721617",
    date: "14 Jul 2025",
    balance: 1,
    bet: "Yes",
    status: "Yes",
  },
  {
    id: 6,
    name: "Pawanku",
    mobile: "9568337470",
    date: "14 Jul 2025",
    balance: 1,
    bet: "Yes",
    status: "Yes",
  },
  {
    id: 7,
    name: "KIRANJI",
    mobile: "6284693931",
    date: "14 Jul 2025",
    balance: 1,
    bet: "Yes",
    status: "Yes",
  },
  {
    id: 8,
    name: "Shambhu",
    mobile: "6377476344",
    date: "13 Jul 2025",
    balance: 1,
    bet: "Yes",
    status: "Yes",
  },
  {
    id: 9,
    name: "rahul",
    mobile: "7828921944",
    date: "13 Jul 2025",
    balance: 181,
    bet: "Yes",
    status: "Yes",
  },
  {
    id: 10,
    name: "Anji",
    mobile: "8088148624",
    date: "12 Jul 2025",
    balance: 1,
    bet: "Yes",
    status: "Yes",
  },
  // Add more users to simulate a larger dataset
  ...Array.from({ length: 40 }, (_, i) => ({
    id: i + 11,
    name: `User${i + 11}`,
    mobile: `98765${String(i + 11).padStart(5, "0")}`,
    date: "11 Jul 2025",
    balance: Math.floor(Math.random() * 1000) + 1,
    bet: "Yes",
    status: "Yes",
  })),
];
*/
export default function UserListTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);

  // Filter users based on search term
  //const filteredUsers = allUsers.filter(
  // (user) =>
  //      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //      user.mobile.includes(searchTerm)
  // );

  // Sort users
  const sortedUsers = [
    //  ...filteredUsers
  ].sort((a, b) => {
    if (!sortConfig) return 0;

    const aValue = a[sortConfig.key as keyof typeof a];
    const bValue = b[sortConfig.key as keyof typeof b];

    if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  // Paginate users
  const totalEntries = sortedUsers.length;
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentUsers = sortedUsers.slice(startIndex, endIndex);
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const handleSort = (key: string) => {
    setSortConfig((current) => ({
      key,
      direction:
        current?.key === key && current.direction === "asc" ? "desc" : "asc",
    }));
  };

  const SortIcon = ({ column }: { column: string }) => {
    if (sortConfig?.key !== column) {
      return (
        <div className="flex flex-col">
          <ChevronUp className="w-3 h-3 text-gray-400" />
          <ChevronDown className="w-3 h-3 text-gray-400" />
        </div>
      );
    }
    return sortConfig.direction === "asc" ? (
      <ChevronUp className="w-4 h-4 text-gray-600" />
    ) : (
      <ChevronDown className="w-4 h-4 text-gray-600" />
    );
  };

  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Show</span>
          <Select
            value={entriesPerPage.toString()}
            onValueChange={(value) => {
              setEntriesPerPage(Number(value));
              setCurrentPage(1);
            }}
          >
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-sm text-gray-600">entries</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Search:</span>
          <Input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-64"
            placeholder="Search users..."
          />
        </div>
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    #
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    <button
                      onClick={() => handleSort("name")}
                      className="flex items-center gap-1 hover:text-gray-900"
                    >
                      User Name
                      <SortIcon column="name" />
                    </button>
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    <button
                      onClick={() => handleSort("mobile")}
                      className="flex items-center gap-1 hover:text-gray-900"
                    >
                      Mobile
                      <SortIcon column="mobile" />
                    </button>
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    <button
                      onClick={() => handleSort("date")}
                      className="flex items-center gap-1 hover:text-gray-900"
                    >
                      Date
                      <SortIcon column="date" />
                    </button>
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    <button
                      onClick={() => handleSort("balance")}
                      className="flex items-center gap-1 hover:text-gray-900"
                    >
                      Balance
                      <SortIcon column="balance" />
                    </button>
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    <button
                      onClick={() => handleSort("bet")}
                      className="flex items-center gap-1 hover:text-gray-900"
                    >
                      Bet
                      <SortIcon column="bet" />
                    </button>
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    <button
                      onClick={() => handleSort("status")}
                      className="flex items-center gap-1 hover:text-gray-900"
                    >
                      Status
                      <SortIcon column="status" />
                    </button>
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {/*
                currentUsers.map((user, index) => (
                  <tr
                    key={user.id}
                    className={`border-b hover:bg-gray-50 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    <td className="py-4 px-6 text-gray-600">
                      {startIndex + index + 1}
                    </td>
                    <td className="py-4 px-6">
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        {user.name}
                      </button>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-700">{user.mobile}</span>
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600">{user.date}</td>
                    <td className="py-4 px-6 font-medium text-gray-800">
                      {user.balance}
                    </td>
                    <td className="py-4 px-6">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-green-200">
                        {user.bet}
                      </Badge>
                    </td>
                    <td className="py-4 px-6">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-green-200">
                        {user.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-6">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))
                  
                */}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Showing {startIndex + 1} to {Math.min(endIndex, totalEntries)} of{" "}
          {totalEntries.toLocaleString()} entries
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>

          {generatePageNumbers().map((page, index) => (
            <Button
              key={index}
              variant={page === currentPage ? "default" : "outline"}
              size="sm"
              onClick={() => typeof page === "number" && setCurrentPage(page)}
              disabled={page === "..."}
              className={
                page === currentPage ? "bg-blue-600 hover:bg-blue-700" : ""
              }
            >
              {page}
            </Button>
          ))}

          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function ImageSliderList() {
  // Example data for the table
  const sliderImages = [
    {
      id: 1,
      image: "/placeholder.svg?height=40&width=40", // Placeholder image
      displayOrder: 1,
      creationDate: "2024-11-30",
      status: "Active",
    },
    // Add more dummy data if needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-2xl font-bold">Game Name List</CardTitle>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Add Slider Image
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">#</TableHead>
                  <TableHead>Slider Image</TableHead>
                  <TableHead>Display Order</TableHead>
                  <TableHead>Creation Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sliderImages.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt="Slider Image"
                        width={40}
                        height={40}
                        className="rounded-sm object-cover"
                      />
                    </TableCell>
                    <TableCell>{item.displayOrder}</TableCell>
                    <TableCell>{item.creationDate}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          item.status === "Active"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="flex gap-2">
                      <Button
                        variant="outline"
                        className="text-red-600 border-red-300 hover:bg-red-50 bg-transparent"
                      >
                        Inactivate
                      </Button>
                      <Button
                        variant="destructive"
                        className="bg-red-600 hover:bg-red-700"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="text-center text-gray-500 text-sm mt-8">
          2025 ©Matka.
        </div>
      </div>
    </div>
  );
}

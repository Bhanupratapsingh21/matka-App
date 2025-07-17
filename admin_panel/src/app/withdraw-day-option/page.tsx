import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DayStatusForm() {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const defaultStatus: { [key: string]: "Active" | "Inactive" } = {
    Monday: "Active",
    Tuesday: "Active",
    Wednesday: "Active",
    Thursday: "Active",
    Friday: "Active",
    Saturday: "Active",
    Sunday: "Inactive",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-md mx-auto space-y-6">
        <Card>
          <CardContent className="p-6 space-y-4">
            {daysOfWeek.map((day) => (
              <div key={day}>
                <Label
                  htmlFor={`status-${day.toLowerCase()}`}
                  className="text-sm font-medium text-gray-700"
                >
                  {day}
                </Label>
                <Select
                  defaultValue={defaultStatus[day]}
                  name={`status-${day.toLowerCase()}`}
                >
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ))}
            <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
              Submit
            </Button>
          </CardContent>
        </Card>

        <div className="text-center text-gray-500 text-sm mt-8">
          2025 ©Matka.
        </div>
      </div>
    </div>
  );
}

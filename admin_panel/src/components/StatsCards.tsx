import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2, LogIn, UserPlus, Users } from "lucide-react";
/*
const stats = [
  {
    title: "Users",
    value: "3846",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Today Registration",
    value: "1",
    icon: UserPlus,
    color: "bg-blue-500",
  },
  {
    title: "Players ( Today )",
    value: "64",
    icon: Gamepad2,
    color: "bg-blue-500",
  },
  {
    title: "Login ( Today )",
    value: "154",
    icon: LogIn,
    color: "bg-blue-500",
  },
];
*/
export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/*
      stats.map((stat, index) => (
        <Card key={index} className="relative overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  {stat.title}
                </p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-full`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))
        */}
    </div>
  );
}

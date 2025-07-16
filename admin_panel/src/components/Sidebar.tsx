import {
  Bell,
  ChevronLeft,
  ChevronRight,
  FileText,
  Gamepad2,
  LayoutDashboard,
  Settings,
  Star,
  Target,
  Trophy,
  UserCog,
  Users,
  Wallet,
} from "lucide-react";
import Link from "next/link";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Users, label: "User Management", href: "/users" },
  { icon: Trophy, label: "Declare Result", href: "/declare-result" },
  { icon: Target, label: "Winning Prediction", href: "/winning-prediction" },
  { icon: FileText, label: "Report Management", href: "/reports" },
  { icon: Wallet, label: "Wallet Management", href: "/wallet" },
  { icon: Gamepad2, label: "Games Management", href: "/games" },
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: Bell, label: "Notice Management", href: "/notices" },
  { icon: Star, label: "Starline Management", href: "/starline" },
  { icon: UserCog, label: "Sub Admin Management", href: "/sub-admin" },
];

export default function Sidebar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}) {
  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-64"
      } bg-slate-800 text-white min-h-screen fixed z-50 transition-all duration-300 ease-in-out`}
    >
      <div className="p-4">
        {/* Header with logo and toggle button */}
        <div className="flex items-center justify-between gap-1 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <Star className="w-5 h-5" />
            </div>
            {!collapsed && (
              <span className="font-semibold whitespace-nowrap">
                Kalyan Star
              </span>
            )}
          </div>

          {/* Toggle button */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded-lg hover:bg-slate-700 transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="w-5 h-5 " />
            ) : (
              <ChevronLeft className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Navigation menu */}
        <nav
          className={`transition-all ${
            collapsed ? "duration-300" : "duration-1000"
          } ${collapsed ? "space-y-3.5" : "space-y-1"}`}
        >
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3
               px-3 py-2 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-white transition-all duration-300`}
              title={collapsed ? item.label : undefined}
            >
              <item.icon className="w-5 h-5 flex-shrink-0 transition-all duration-300" />
              {!collapsed && (
                <span className="text-sm whitespace-nowrap transition-all duration-300">
                  {item.label}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

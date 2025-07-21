"use client";

import Link from "next/link";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Trophy,
  Target,
  FileText,
  Wallet,
  Gamepad2,
  Settings,
  Bell,
  Star,
  UserCog,
  History,
  ChevronDown,
  ChevronRight,
  DollarSign,
  TrendingUp,
  CreditCard,
  PlusCircle,
  Clock,
} from "lucide-react";
import { usePathname } from "next/navigation";

type SubItem = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
};
const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Users, label: "User Management", href: "/user" },
  { icon: Trophy, label: "Declare Result", href: "/declare-result" },
  { icon: Target, label: "Winning Prediction", href: "/winning-prediction" },
];

const collapsibleMenuItems = [
  {
    icon: FileText,
    label: "Report Management",
    key: "reports",
    subItems: [
      { icon: History, label: "User Bid History", href: "/user-bid-history" },
      {
        icon: DollarSign,
        label: "Customer Sell Report",
        href: "/customer-sell-report",
      },
      { icon: TrendingUp, label: "Winning Report", href: "/winning-report" },
      { icon: CreditCard, label: "Withdraw Report", href: "/withdraw-report" },
      { icon: PlusCircle, label: "Add Fund Report", href: "/add-fund-report" },
      {
        icon: Clock,
        label: "Auto Deposit History",
        href: "/auto-deposit-history",
      },
    ],
  },
  {
    icon: Wallet,
    label: "Wallet Management",
    key: "wallet",
    subItems: [],
  },
  {
    icon: Gamepad2,
    label: "Games Management",
    key: "games",
    subItems: [],
  },
  {
    icon: Settings,
    label: "Settings",
    key: "settings",
    subItems: [],
  },
  {
    icon: Bell,
    label: "Notice Management",
    key: "notices",
    subItems: [],
  },
  {
    icon: Star,
    label: "Starline Management",
    key: "starline",
    subItems: [],
  },
  {
    icon: Star,
    label: "Galidesawar",
    key: "galidesawar",
    subItems: [],
  },
];

const bottomMenuItems = [
  { icon: UserCog, label: "Sub Admin Management", href: "/sub-admin" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "reports",
  ]);

  const toggleSection = (key: string) => {
    setExpandedSections((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };

  const isActive = (href: string) => pathname === href;

  const isParentActive = (subItems: SubItem[]) => {
    return subItems.some((item) => pathname === item.href);
  };

  return (
    <div className="w-64 bg-slate-800 text-white min-h-screen">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <Star className="w-5 h-5" />
          </div>
          <span className="font-semibold">Kalyan Star</span>
        </div>

        <nav className="space-y-1">
          {/* Regular menu items */}
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive(item.href)
                ? "bg-slate-700 text-white"
                : "text-gray-300 hover:bg-slate-700 hover:text-white"
                }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}

          {/* Collapsible menu items */}
          {collapsibleMenuItems.map((item) => (
            <div key={item.key}>
              <button
                onClick={() => toggleSection(item.key)}
                className={`w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg transition-colors ${isParentActive(item.subItems)
                  ? "bg-slate-700 text-white"
                  : "text-gray-300 hover:bg-slate-700 hover:text-white"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                </div>
                {item.subItems.length > 0 && (
                  <>
                    {expandedSections.includes(item.key) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </>
                )}
              </button>

              {/* Sub-menu items */}
              {expandedSections.includes(item.key) &&
                item.subItems.length > 0 && (
                  <div className="ml-6 mt-1 space-y-1">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${isActive(subItem.href)
                          ? "bg-slate-600 text-white"
                          : "text-gray-400 hover:bg-slate-700 hover:text-white"
                          }`}
                      >
                        <subItem.icon className="w-4 h-4" />
                        <span>{subItem.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
            </div>
          ))}

          {/* Bottom menu items */}
          {bottomMenuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive(item.href)
                ? "bg-slate-700 text-white"
                : "text-gray-300 hover:bg-slate-700 hover:text-white"
                }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

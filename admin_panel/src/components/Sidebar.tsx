"use client";
import {
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  CreditCard,
  DollarSign,
  FileText,
  Gamepad2,
  LayoutDashboard,
  PlusCircle,
  Settings,
  Star,
  Target,
  TrendingUp,
  Trophy,
  UserCog,
  Users,
  Wallet,
  History,
  Atom,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Users, label: "User Management", href: "/users" },
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
    subItems: [
      { icon: Atom, label: "Fund Request", href: "/fund-request" },
      { icon: Atom, label: "Withdraw Request", href: "/refund-request" },
      { icon: Atom, label: "Bid Revert", href: "/bid-revert" },
    ],
  },
  {
    icon: Gamepad2,
    label: "Games Management",
    key: "games",
    subItems: [
      { icon: Atom, label: "Game Name", href: "/game-name" },
      { icon: Atom, label: "Game Rates", href: "/game-rates" },
      { icon: Atom, label: "Game Number", href: "/game-number" },
    ],
  },
  {
    icon: Settings,
    label: "Settings",
    key: "settings",
    subItems: [
      { icon: Atom, label: "Main Settings", href: "/main-setting" },
      { icon: Atom, label: "Contact Settings", href: "/contact-setting" },
      { icon: Atom, label: "How to play", href: "/how-to-play" },
      { icon: Atom, label: "Slider Images", href: "/slider-images" },
      {
        icon: Atom,
        label: "Withdraw Day Option",
        href: "/withdraw-day-option",
      },
    ],
  },
  {
    icon: Bell,
    label: "Notice Management",
    key: "notices",
    subItems: [
      { icon: Atom, label: "Notice Management", href: "/notice-management" },
      { icon: Atom, label: "Add Fund Notice", href: "/add-fund-notice" },
      { icon: Atom, label: "Withdraw Notice", href: "/withdraw-notice" },
      { icon: Atom, label: "send-notification", href: "/send-notification" },
    ],
  },
  {
    icon: Star,
    label: "Starline Management",
    key: "starline",
    subItems: [
      { icon: Atom, label: "Game Name", href: "/game-name" },
      { icon: Atom, label: "Game Rates", href: "/game-rates" },
      { icon: Atom, label: "Bid History", href: "/bid-history" },
      { icon: Atom, label: "Custom Sell Report", href: "/custom-sell-report" },
      { icon: Atom, label: "Declare Result", href: "/declare-result" },
      { icon: Atom, label: "Winning Prediction", href: "/winning prediction" },
      {
        icon: Atom,
        label: "Starline Winning Report",
        href: "/starline-winning-report",
      },
      { icon: Atom, label: "Bid Revert", href: "/bid-revert" },
    ],
  },
  {
    icon: Star,
    label: "Galidesawar",
    key: "galidesawar",
    subItems: [
      { icon: Atom, label: "Game Name", href: "/game-name" },
      { icon: Atom, label: "Game Rates", href: "/game-rates" },
      {
        icon: Atom,
        label: "Customer Sell Report",
        href: "/customer-sell-report",
      },
      { icon: Atom, label: "Bid History", href: "/bid-history" },
      { icon: Atom, label: "Declare Results", href: "/declare-results" },
      { icon: Atom, label: "Winning Prediction", href: "/winning-prediction" },
      { icon: Atom, label: "Winning Report", href: "/winning-report" },
      { icon: Atom, label: "bid-revert", href: "/bid-revert" },
    ],
  },
];
const bottomMenuItems = [
  { icon: UserCog, label: "Sub Admin Management", href: "/sub-admin" },
];
export default function Sidebar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}) {
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

  const isParentActive = (subItems: any[]) => {
    return subItems.some((item) => pathname === item.href);
  };

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

          {/* Collapsible menu items */}
          {collapsibleMenuItems.map((item) => (
            <div key={item.key} className="relative group">
              <button
                onClick={() => toggleSection(item.key)}
                className={`w-full flex items-center ${
                  collapsed ? "justify-center" : "justify-between"
                } gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isParentActive(item.subItems)
                    ? "bg-slate-700 text-white"
                    : "text-gray-300 hover:bg-slate-700 hover:text-white"
                }`}
                title={collapsed ? item.label : undefined}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!collapsed && (
                    <span className="text-sm whitespace-nowrap transition-all duration-300">
                      {item.label}
                    </span>
                  )}
                </div>
                {!collapsed && item.subItems.length > 0 && (
                  <>
                    {expandedSections.includes(item.key) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </>
                )}
              </button>

              {/* Hover submenu for collapsed state */}
              {collapsed && item.subItems.length > 0 && (
                <div className="absolute left-full top-0 ml-2 w-64 bg-slate-800 border border-slate-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2">
                    <div className="text-xs font-semibold text-gray-400 mb-2 px-2">
                      {item.label}
                    </div>
                    <div className="space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${
                            isActive(subItem.href)
                              ? "bg-slate-600 text-white"
                              : "text-gray-300 hover:bg-slate-700 hover:text-white"
                          }`}
                        >
                          <subItem.icon className="w-4 h-4" />
                          <span>{subItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Sub-menu items for expanded state */}
              {!collapsed &&
                expandedSections.includes(item.key) &&
                item.subItems.length > 0 && (
                  <div className="ml-6 mt-1 space-y-1">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${
                          isActive(subItem.href)
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
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive(item.href)
                  ? "bg-slate-700 text-white"
                  : "text-gray-300 hover:bg-slate-700 hover:text-white"
              }`}
              title={collapsed ? item.label : undefined}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
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

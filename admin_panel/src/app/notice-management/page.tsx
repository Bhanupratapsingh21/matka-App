"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Notification {
    id: number
    title: string
    date: string
    time: string
}

export default function NotificationList() {
    const [notifications] = useState<Notification[]>([
        {
            id: 1,
            title: "Welcome to Kalyan Star! Stay tuned for updates and offers.",
            date: "21 Jul 2025",
            time: "10:00 AM",
        },
    ])

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-lg font-medium text-gray-800">Notification List</h1>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 h-8">
                        <Plus className="w-4 h-4 mr-1" />
                        Add Notification
                    </Button>
                </div>

                {/* Table Header */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="grid grid-cols-12 gap-2 p-3 bg-gray-50 border-b text-sm font-medium text-gray-700">
                        <div className="col-span-1">#</div>
                        <div className="col-span-6">Title</div>
                        <div className="col-span-3">Date & Time</div>
                        <div className="col-span-2">Action</div>
                    </div>

                    {/* Table Rows */}
                    <div className="divide-y divide-gray-100">
                        {notifications.map((notification, index) => (
                            <div key={notification.id} className="grid grid-cols-12 gap-2 p-3 text-sm">
                                <div className="col-span-1 text-gray-500 font-medium">{index + 1}</div>
                                <div className="col-span-6 text-gray-800 leading-relaxed">
                                    {notification.title.split("\n").map((line, i) => (
                                        <div key={i} className={i > 0 ? "mt-1" : ""}>
                                            {line}
                                        </div>
                                    ))}
                                </div>
                                <div className="col-span-3 text-gray-600 text-xs">
                                    <div>{notification.date}</div>
                                    <div className="mt-1">{notification.time}</div>
                                </div>
                                <div className="col-span-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="text-blue-500 border-blue-200 hover:bg-blue-50 text-xs px-2 py-1 h-6 bg-transparent"
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Navigation Indicator */}
            <div className="fixed bottom-0 left-0 right-0 bg-black h-1">
                <div className="w-32 h-1 bg-gray-400 mx-auto rounded-full"></div>
            </div>
        </div>
    )
}

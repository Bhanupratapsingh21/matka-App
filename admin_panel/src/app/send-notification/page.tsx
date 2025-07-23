"use client"

import { Button } from "@/components/ui/button"

export default function PushNotificationPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 sm:px-6 py-4 border-b border-gray-200">
                <h1 className="text-lg font-semibold text-gray-800 text-center sm:text-left">
                    Push Notification
                </h1>
                <Button className="w-full sm:w-auto bg-[#348fe2] hover:bg-[#2a7bd1] text-white px-4 py-2 rounded-md text-sm">
                    Push Notifications
                </Button>
            </div>

            <div className="p-4 sm:p-6">
                <div className="text-gray-500 text-sm text-center sm:text-left">
                    This is where your notification content or form would go.
                </div>
            </div>
        </div>
    )
}

import { Button } from "@/components/ui/button"

export default function PushNotificationPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <h1 className="text-lg font-semibold text-gray-800">Push Notification</h1>
                <Button className="bg-[#348fe2] hover:bg-[#2a7bd1] text-white px-4 py-2 rounded-md">Push notifications</Button>
            </div>
            {/* The rest of the page content would go here */}
            <div className="p-6">{/* Placeholder for additional content */}</div>
        </div>
    )
}
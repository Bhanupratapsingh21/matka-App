"use client"

import { useState } from "react"
import { Menu, Plus, Wifi, Battery, Signal } from "lucide-react"
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
            title:
                "सभी भाइयों से निवेदन है कि फ्रॉड ऐप के चक्कर में ना पड़कर कल्याण स्टार मटका के साथ जुड़े और KALYAN STAR मटका में एक बार रुपये कटकर देंगे | आपका यह बेटर गेम रेट और instant ( आंशिक निकासी) विशेषज्ञ मिलेगा ज्यादा से ज्यादा ऐप को शेयर करे | और जीते कई rewards",
            date: "03 Jul 2025",
            time: "03:36 AM",
        },
        {
            id: 2,
            title:
                "सभी भाइयों से निवेदन है कि फ्रॉड ऐप के चक्कर में ना पड़कर कल्याण स्टार मटका के साथ जुड़े और KALYAN STAR मटका में एक बार रुपये कटकर देंगे | आपका यह बेटर गेम रेट और instant ( आंशिक निकासी) विशेषज्ञ मिलेगा ज्यादा से ज्यादा ऐप को शेयर करे | और जीते कई rewards",
            date: "21 Jun 2025",
            time: "04:01 AM",
        },
        {
            id: 3,
            title: "Jisko password yaad nhi hai vo whataap Par message kare",
            date: "20 Jun 2025",
            time: "10:59 AM",
        },
        {
            id: 4,
            title: "Jiska Password galat bata rha hai whataap pr message kro",
            date: "18 Jun 2025",
            time: "12:03 PM",
        },
        {
            id: 5,
            title:
                "सभी भाइयों से निवेदन है कि फ्रॉड ऐप के चक्कर में ना पड़कर कल्याण स्टार मटका के साथ जुड़े और KALYAN STAR मटका में एक बार रुपये कटकर देंगे | आपका यह बेटर गेम रेट और instant ( आंशिक निकासी) विशेषज्ञ मिलेगा ज्यादा से ज्यादा ऐप को शेयर करे | और जीते कई rewards",
            date: "14 May 2025",
            time: "10:20 AM",
        },
        {
            id: 6,
            title:
                "DEPOSIT AND PLAY AND WIN AMOUNT IN YOUR BANK ACCOUNT\nAUTO DEPOSIT AND AUTO WITHDRAWAL FACILITY\n5 MINUTE ME PAISE APKA ACCOUNT MEIN",
            date: "13 May 2025",
            time: "04:42 AM",
        },
        {
            id: 7,
            title: "Deposit ke liye whatsapp par message kare",
            date: "12 May 2025",
            time: "02:12 AM",
        },
        {
            id: 8,
            title: "Dear Users Keep playing and win big amounts",
            date: "10 May 2025",
            time: "10:39 AM",
        },
        {
            id: 9,
            title:
                "Good Afternoon Users\nRequest to all users Deposit and keep Playing 100 % safe and secure platform for matka",
            date: "08 May 2025",
            time: "02:15 AM",
        },
        {
            id: 10,
            title:
                "Good morning Users\nRequest to All Users Deposit and keep playing 100% safe and secured Application and Superfast Withdrawal service available",
            date: "07 May 2025",
            time: "12:23 PM",
        },
        {
            id: 11,
            title: "Good evening users Keep playing and make unlimited money",
            date: "06 May 2025",
            time: "01:26 AM",
        },
        {
            id: 12,
            title: "Good morning users Keep playing and win",
            date: "06 May 2025",
            time: "09:17 AM",
        },
        {
            id: 13,
            title: "Good morning family\nAll users request to keep playing and win big amounts",
            date: "05 May 2025",
            time: "07:43 AM",
        },
        {
            id: 14,
            title: "Good morning all family members\nHave a nice day\nPlay and win big ????",
            date: "02 May 2025",
            time: "07:56 AM",
        },
        {
            id: 15,
            title: "Deposit and play kalyan star Family instant withdrawal available",
            date: "02 May 2025",
            time: "01:30 AM",
        },
        {
            id: 16,
            title: "Good Morning all family\nDeposit 700 and get 7 percent bonus\nDeposit 1000 and get 10 percent discount",
            date: "02 May 2025",
            time: "08:41 AM",
        },
        {
            id: 17,
            title: "Deposit 1000 and get 100 rs bonus",
            date: "01 May 2025",
            time: "11:41 AM",
        },
        {
            id: 18,
            title: "Deposit and play And earn unlimited money",
            date: "01 May 2025",
            time: "09:28 AM",
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
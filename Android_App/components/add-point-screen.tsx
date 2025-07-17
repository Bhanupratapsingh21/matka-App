"use client"

import { ArrowLeft, MessageCircle, Phone, Hand } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Component() {
  const pointAmounts = [500, 1000, 2000, 5000, 10000, 20000]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3">
        {/* Status Bar */}
        <div className="flex justify-between items-center text-white text-sm mb-4">
          <span className="font-medium">3:49</span>
          <div className="flex items-center gap-1">
            <span className="text-xs">0.57</span>
            <span className="text-xs">KB/S</span>
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-white rounded-full"></div>
              <div className="w-1 h-3 bg-white rounded-full"></div>
              <div className="w-1 h-3 bg-white rounded-full"></div>
              <div className="w-1 h-3 bg-white/60 rounded-full"></div>
            </div>
            <div className="w-4 h-2 border border-white rounded-sm">
              <div className="w-3/4 h-full bg-white rounded-sm"></div>
            </div>
            <span className="text-xs">72%</span>
          </div>
        </div>

        {/* Header Content */}
        <div className="flex items-center gap-4">
          <ArrowLeft className="w-6 h-6 text-white" />
          <h1 className="text-white text-xl font-medium">Add Point</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Contact Information Card */}
        <Card className="border-2 border-gray-300">
          <CardContent className="p-6 space-y-4">
            <p className="text-gray-800 text-base leading-relaxed">
              अगर आपको कोई भी समस्या है तो कॉल पर बात कर सकते हैं या मैसेज कर सकते हैं 5 सेकंड में आपका समाधान हो जाएगा
            </p>

            <hr className="border-gray-300" />

            <p className="text-gray-700 text-base font-medium">For Fund Query's please call or whatsapp</p>

            <div className="flex gap-4">
              <Button
                variant="outline"
                className="flex items-center gap-2 px-6 py-3 rounded-full border-gray-300 hover:bg-gray-50 bg-transparent"
              >
                <MessageCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Whatsapp</span>
              </Button>

              <Button
                variant="outline"
                className="flex items-center gap-2 px-6 py-3 rounded-full border-gray-300 hover:bg-gray-50 bg-transparent"
              >
                <Phone className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Call</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Enter Point Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Hand className="w-5 h-5 text-gray-600" />
            <h2 className="text-purple-600 text-lg font-medium">Enter Point</h2>
          </div>

          <hr className="border-gray-300" />

          {/* Point Amount Buttons */}
          <div className="grid grid-cols-3 gap-3">
            {pointAmounts.map((amount) => (
              <Button
                key={amount}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-6 text-lg rounded-lg"
              >
                {amount}
              </Button>
            ))}
          </div>

          {/* Add Point Button */}
          <Button className="w-full bg-black hover:bg-gray-800 text-white font-medium py-4 text-lg rounded-lg mt-6">
            ADD POINT
          </Button>

          {/* Input Field */}
          <Card className="mt-4">
            <CardContent className="p-4">
              <Input placeholder="Enter custom amount" className="border-0 text-lg p-4 focus-visible:ring-0" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

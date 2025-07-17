import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function HowToPlayForm() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* How to Play Content Section */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <div>
              <Label
                htmlFor="how-to-play-content"
                className="text-sm font-medium text-gray-700"
              >
                How to Play Content
              </Label>
              {/* Placeholder for rich text editor controls */}
              <div className="border border-gray-200 rounded-md p-2 mt-1 bg-gray-50 text-gray-500 text-xs flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="font-bold">B</span>
                  <span className="italic">I</span>
                  <span>U</span>
                  <span>🔗</span>
                  <span>&quot;</span>
                  <span>&lt;/&gt;</span>
                  <span>&#x2190;</span>
                  <span>&#x2192;</span>
                </div>
                <div className="flex gap-2">
                  <span>Paragraph</span>
                  <span>&#x25BC;</span>
                </div>
              </div>
              <Textarea
                id="how-to-play-content"
                defaultValue={`1. DEPOSIT AND PLAY MINIMUM DEPOSIT 200 RS\n2. PLAY IN MARKET AND WIN AMOUNT AND DO WITHDRAWAL MINIMUM 1000 WITHDRAWAL`}
                className="mt-1 min-h-[100px]"
              />
            </div>

            <div className="space-y-4">
              <div>
                <Label
                  htmlFor="youtube-how-to-play"
                  className="text-sm font-medium text-gray-700"
                >
                  Youtube Video ID ( How To Play )
                </Label>
                <Input
                  id="youtube-how-to-play"
                  defaultValue="https://youtu.be/KTly3TK-c34"
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="deposit-video"
                  className="text-sm font-medium text-gray-700"
                >
                  Deposit Video
                </Label>
                <Input
                  id="deposit-video"
                  defaultValue="https://youtu.be/KTly3TK-c34"
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="withdraw-video"
                  className="text-sm font-medium text-gray-700"
                >
                  Withdraw Video
                </Label>
                <Input
                  id="withdraw-video"
                  defaultValue="https://youtu.be/KTly3TK-c34"
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="game-play-video"
                  className="text-sm font-medium text-gray-700"
                >
                  Game Play Video
                </Label>
                <Input
                  id="game-play-video"
                  defaultValue="https://youtu.be/KTly3TK-c34"
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="about-us-video"
                  className="text-sm font-medium text-gray-700"
                >
                  About Us Video
                </Label>
                <Input
                  id="about-us-video"
                  defaultValue="https://youtu.be/KTly3TK-c34"
                  className="mt-1"
                />
              </div>
            </div>
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

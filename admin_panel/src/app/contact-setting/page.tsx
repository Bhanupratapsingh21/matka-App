import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactSettingsForm() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Contact Numbers Section */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label
                  htmlFor="mobile-number"
                  className="text-sm font-medium text-gray-700"
                >
                  Mobile Number
                </Label>
                <Input
                  id="mobile-number"
                  defaultValue="988348673853"
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="whatsapp-number"
                  className="text-sm font-medium text-gray-700"
                >
                  WhatsApp Number
                </Label>
                <Input
                  id="whatsapp-number"
                  defaultValue="919828536895"
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="telegram"
                  className="text-sm font-medium text-gray-700"
                >
                  Telegram
                </Label>
                <Input
                  id="telegram"
                  defaultValue="https://t.me/+8uouosfpIKTw0NTlI"
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

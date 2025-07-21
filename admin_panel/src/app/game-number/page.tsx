import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Component() {
  const singleDigitNumbers = Array.from({ length: 10 }, (_, i) => i);
  const jodiDigitNumbers = Array.from({ length: 100 }, (_, i) =>
    i.toString().padStart(2, "0")
  );

  /*
  const singlePanaNumbers = {
    0: [0, 127, 136, 145, 190, 235, 280, 370, 479, 460, 569, 389, 578],
    1: [1, 128, 137, 146, 236, 290, 380, 470, 499, 560, 678, 579],
    2: [2, 129, 138, 147, 156, 237, 246, 345, 390, 480, 570, 679, 589],
    3: [3, 120, 139, 148, 157, 238, 247, 256, 340, 399, 489, 579, 689],
  };
  
  const doublePanaNumbers = {
    0: [0, 550, 668, 244, 299, 228, 488, 677, 118, 334],
    1: [1, 119, 155, 227, 335, 344, 399, 588, 669],
    2: [2, 200, 110, 228, 255, 336, 499, 660, 688, 778],
    3: [3, 300, 166, 229, 337, 355, 445, 599, 779, 788],
  };

  const tripplePanaNumbers = [
    "000",
    "111",
    "222",
    "333",
    "444",
    "555",
    "666",
    "777",
    "888",
    "999",
  ];
  
  const closeAnkNumbers = [
    "000",
    "100",
    "110",
    "112",
    "113",
    "114",
    "115",
    "116",
    "117",
    "118",
    "119",
    "120",
    "121",
    "122",
    "123",
    "124",
    "125",
    "126",
    "127",
    "128",
    "129",
    "130",
    "133",
    "134",
    "135",
    "136",
    "137",
    "138",
    "139",
    "140",
    "144",
    "145",
    "146",
    "147",
    "148",
    "149",
    "150",
    "155",
    "156",
    "157",
    "158",
    "159",
    "160",
    "166",
    "167",
    "168",
    "169",
    "170",
    "177",
    "178",
    "179",
    "180",
    "188",
    "189",
    "190",
    "199",
    "200",
    "220",
    "222",
    "223",
    "224",
    "225",
    "226",
    "227",
    "228",
    "229",
    "230",
    "233",
    "234",
    "235",
    "236",
    "237",
    "238",
    "239",
    "240",
    "244",
    "245",
    "246",
    "247",
    "248",
    "249",
    "250",
    "255",
    "256",
    "257",
    "258",
    "259",
    "260",
    "266",
    "267",
    "268",
    "269",
    "270",
    "277",
    "278",
    "279",
    "280",
    "288",
    "289",
    "290",
    "299",
    "300",
    "330",
    "333",
    "334",
    "335",
    "336",
    "337",
    "338",
    "339",
    "340",
    "344",
    "345",
    "346",
    "347",
    "348",
    "349",
    "350",
    "355",
    "356",
    "357",
    "358",
    "359",
    "360",
    "366",
    "367",
    "368",
    "369",
    "370",
    "377",
    "378",
    "379",
    "380",
    "388",
    "389",
    "390",
    "399",
    "440",
    "444",
    "445",
    "446",
    "447",
    "448",
    "449",
    "450",
    "455",
    "456",
    "457",
    "458",
    "459",
  ];
  
  */
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Single Digit Number Section */}
        <Card>
          <CardHeader>
            <CardTitle>Single Digit Number</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {/*
              singleDigitNumbers.map((num) => (
                <Button
                key={num}
                variant="outline"
                className="border-blue-300 text-blue-600 hover:bg-blue-50 text-base w-12 h-12 flex items-center justify-center bg-transparent"
                >
                {num}
                </Button>
              ))
              */}
            </div>
          </CardContent>
        </Card>

        {/* Jodi Digit Numbers Section */}
        <Card>
          <CardHeader>
            <CardTitle>Jodi Digit Numbers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(60px,1fr))] gap-2">
              {/*
              jodiDigitNumbers.map((num) => (
                <Button
                key={num}
                variant="outline"
                className="border-blue-300 text-blue-600 hover:bg-blue-50 text-base w-14 h-12 flex items-center justify-center bg-transparent"
                >
                {num}
                </Button>
              ))
              */}
            </div>
          </CardContent>
        </Card>

        {/* Single Pana Numbers Section */}
        <Card>
          <CardHeader>
            <CardTitle>Single Pana Numbers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/*
            Object.entries(singlePanaNumbers).map(([digit, numbers]) => (
              <div key={digit}>
              <h3 className="text-lg font-semibold mb-2">Single Ank</h3>
              <div className="flex flex-wrap gap-2">
              <Button
              variant="outline"
              className="border-blue-300 text-blue-600 hover:bg-blue-50 text-base w-12 h-12 flex items-center justify-center bg-transparent"
              >
              {digit}
              </Button>
              {numbers.slice(1).map(
                (
                  num // Slice to exclude the first digit which is handled by the main button
                ) => (
                  <Button
                        key={num}
                        variant="outline"
                        className="border-blue-300 text-blue-600 hover:bg-blue-50 text-base w-20 h-12 flex items-center justify-center bg-transparent"
                        >
                        {num}
                        </Button>
                      )
                    )}
                    </div>
                    </div>
                  ))
                  */}
          </CardContent>
        </Card>

        {/* Double Pana Numbers Section */}
        <Card>
          <CardHeader>
            <CardTitle>Double Pana Numbers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/*
            Object.entries(doublePanaNumbers).map(([digit, numbers]) => (
              <div key={digit}>
              <h3 className="text-lg font-semibold mb-2">Single Ank</h3>
                <div className="flex flex-wrap gap-2">
                <Button
                variant="outline"
                className="border-blue-300 text-blue-600 hover:bg-blue-50 text-base w-12 h-12 flex items-center justify-center bg-transparent"
                >
                {digit}
                </Button>
                {numbers.slice(1).map((num) => (
                  <Button
                  key={num}
                  variant="outline"
                  className="border-blue-300 text-blue-600 hover:bg-blue-50 text-base w-20 h-12 flex items-center justify-center bg-transparent"
                  >
                  {num}
                  </Button>
                ))}
                </div>
                </div>
              ))
              */}
          </CardContent>
        </Card>

        {/* Tripple Pana Numbers Section */}
        <Card>
          <CardHeader>
            <CardTitle>Tripple Pana Numbers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {/*
              tripplePanaNumbers.map((num) => (
                <Button
                key={num}
                  variant="outline"
                  className="border-blue-300 text-blue-600 hover:bg-blue-50 text-base w-20 h-12 flex items-center justify-center bg-transparent"
                  >
                  {num}
                  </Button>
                ))
                */}
            </div>
          </CardContent>
        </Card>

        {/* Half Sangam Numbers Section */}
        <Card>
          <CardHeader>
            <CardTitle>Half Sangam Numbers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Open Ank</h3>
              <div className="flex flex-wrap gap-2">
                {/*
                singleDigitNumbers.map((num) => (
                  <Button
                  key={num}
                  variant="outline"
                  className="border-blue-300 text-blue-600 hover:bg-blue-50 text-base w-12 h-12 flex items-center justify-center bg-transparent"
                  >
                  {num}
                  </Button>
                ))
                */}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Close Ank</h3>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(60px,1fr))] gap-2">
                {/*
                closeAnkNumbers.map((num) => (
                  <Button
                  key={num}
                    variant="outline"
                    className="border-blue-300 text-blue-600 hover:bg-blue-50 text-base w-14 h-12 flex items-center justify-center bg-transparent"
                    >
                    {num}
                    </Button>
                  ))
                  */}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

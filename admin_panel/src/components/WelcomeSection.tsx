import Image from "next/image";

interface props {
  approvedUsers: number;
  UnapprovedUsers: number;
}

export default function WelcomeSection(props: props) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg">
      <div className="bg-gradient-to-r h-96 from-blue-100 to-purple-100 p-6 relative overflow-hidden">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome Back !
            </h2>
            <p className="text-gray-600">Admin Dashboard</p>
          </div>
          {/* 
    
    <div className="flex items-center gap-8">
    <div className="text-center">
    <div className="text-3xl font-bold text-gray-800">3843</div>
    <div className="text-sm text-gray-600">Approved Users</div>
    </div>
    <div className="text-center">
    <div className="text-3xl font-bold text-gray-800">3</div>
    <div className="text-sm text-gray-600">Unapproved Users</div>
    </div>
    </div>
    */}

          <div className="absolute bottom-0 right-0">
            <Image
              src="/images/welcome.png"
              alt="Admin illustration"
              width={600}
              height={250}
              className="opacity-80"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between px-6 py-10 items-center">
        <div>Admin</div>
        <div className="flex flex-col">
          <span>{props.approvedUsers}</span>
          <p className="text-gray-600 text-sm">Approved user</p>
        </div>
        <div className="flex flex-col">
          <span>{props.UnapprovedUsers}</span>
          <p className="text-gray-600 text-sm">Unapproved user</p>
        </div>
      </div>
    </div>
  );
}

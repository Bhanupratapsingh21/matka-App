import UserListTable from "@/components/UserListTable";

export default function UserPage() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-gray-800">USER LIST</h1>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Dashboards</span>
          <span>/</span>
          <span className="bg-blue-600 text-white px-3 py-1 rounded">
            Dashboard
          </span>
        </div>
      </div>
      <UserListTable />
    </main>
  );
}

"use client";

import { Staff } from "@/types/AllTypes";
import { useState } from "react";


export default function SubAdminPage() {
    const [staffList, setStaffList] = useState<Staff[]>([]);
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        password: "",
    });

    const handleSubmit = () => {
        if (!formData.name || !formData.number || !formData.password) return;

        const newStaff: Staff = {
            id: staffList.length + 1,
            name: formData.name,
            number: formData.number,
            password: formData.password,
            fullAccess: false,
        };

        setStaffList([...staffList, newStaff]);
        setFormData({ name: "", number: "", password: "" });
    };

    const handleReset = () => {
        setFormData({ name: "", number: "", password: "" });
    };

    // const handleDelete = (id: number) => {
    //     setStaffList(staffList.filter((staff) => staff.id !== id));
    // };

    return (
        <div className="p-4 space-y-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
                <h2 className="text-lg font-semibold">Add Staff</h2>

                <div>
                    <label className="block mb-1 text-sm font-medium">Staff Name</label>
                    <input
                        type="text"
                        placeholder="Enter Staff Name"
                        className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">Staff Number</label>
                    <input
                        type="text"
                        placeholder="Enter Staff Number"
                        className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
                        value={formData.number}
                        onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">Password</label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 text-sm"
                    >
                        Submit
                    </button>
                    <button
                        onClick={handleReset}
                        className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 text-sm"
                    >
                        Reset
                    </button>
                </div>
            </div>

            {/* Staff Management Table */}
            <div className="bg-white rounded-lg shadow-sm p-6 overflow-x-auto">
                <h2 className="text-lg font-semibold mb-4 text-gray-800">Staff Management</h2>
                <table className="w-full text-sm text-left border border-gray-300 bg-white rounded-md">
                    <thead className=" text-gray-700 uppercase text-xs">
                        <tr>
                            <th className="px-4 py-3 border">#</th>
                            <th className="px-4 py-3 border">Staff Name</th>
                            <th className="px-4 py-3 border">Number</th>
                            <th className="px-4 py-3 border">Password</th>
                            <th className="px-4 py-3 border text-center">Full Access</th>
                            <th className="px-4 py-3 border text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {staffList.map((staff) => (
                            <tr key={staff.id} className="bg-gray-50 hover:bg-white text-gray-700">
                                <td className="px-4 py-2 border">{staff.id}</td>
                                <td className="px-4 py-2 border">{staff.name}</td>
                                <td className="px-4 py-2 border">{staff.number}</td>
                                <td className="px-4 py-2 border">{staff.password}</td>
                                <td className="px-4 py-2 border text-center">
                                    <input
                                        type="checkbox"
                                        defaultChecked={staff.fullAccess}
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                </td>
                                <td className="px-4 py-2 border text-center space-x-2">
                                    <span className="text-red-600 border border-red-300 text-xs px-2 py-1 rounded-md ">
                                        Inactive
                                    </span>
                                    <button
                                        className="text-blue-600 border border-blue-300 text-xs px-2 py-1 rounded-md "
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        </div>
    );
}

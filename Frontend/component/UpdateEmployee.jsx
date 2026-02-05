import axios from "axios";
import React, { useEffect, useState } from "react";

const UpdateEmployee = ({ empId, setEmployeeId, onUpdate }) => {
  let [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
    designation: "",
    phoneNo: "",
  });

  // Load employee by ID
  useEffect(() => {
    axios
      .get("http://localhost:8080/employee/get/" + empId)
      .then((res) => setEmployee(res.data))
      .catch(() => alert("Failed to load employee"));
  }, [empId]);

  // Handle input
  function inputhandler(e) {
    let { name, value } = e.target;
    setEmployee((old) => ({ ...old, [name]: value }));
  }

  // Update employee
  function updateEmployee(e) {
    e.preventDefault();

    axios
      .put("http://localhost:8080/employee/update", employee)
      .then(() => {
        alert("Updated successfully");
        onUpdate(); // refresh list
        setEmployeeId(null); // close popup
      })
      .catch(() => alert("Failed to update"));
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md animate-fadeIn">
        <h2 className="text-3xl font-extrabold text-blue-700 mb-6 text-center">
          Update Employee
        </h2>

        <form className="space-y-4" onSubmit={updateEmployee}>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={employee.name}
              onChange={inputhandler}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={employee.email}
              onChange={inputhandler}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={employee.password}
              onChange={inputhandler}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="designation" className="block text-gray-700 font-medium mb-1">Designation:</label>
            <input
              type="text"
              name="designation"
              id="designation"
              value={employee.designation}
              onChange={inputhandler}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="phoneNo" className="block text-gray-700 font-medium mb-1">Phone No:</label>
            <input
              type="text"
              name="phoneNo"
              id="phoneNo"
              value={employee.phoneNo}
              onChange={inputhandler}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white p-3 rounded-xl font-semibold hover:bg-blue-700 shadow-md"
            >
              Update
            </button>

            <button
              type="button"
              onClick={() => setEmployeeId(null)}
              className="flex-1 bg-gray-300 text-gray-800 p-3 rounded-xl font-semibold hover:bg-gray-400 shadow-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEmployee;

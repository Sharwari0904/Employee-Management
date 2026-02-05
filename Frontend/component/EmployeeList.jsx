import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UpdateEmployee from "./UpdateEmployee";

const EmployeeList = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const [employeeId, setEmployeeId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const email = localStorage.getItem("email");

    if (!email) {
      navigate("/login");
      return;
    }

    loadEmployee(email);
  }, [navigate]);

  const loadEmployee = (email) => {
    setLoading(true);

    axios
      .get(`http://localhost:8080/employee/email/${email}`)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch(() => {
        alert("Failed to load profile. Please login again.");
        navigate("/login");
      })
      .finally(() => setLoading(false)); // IMPORTANT FIX
  };

  const deleteEmployee = (id) => {
    axios
      .delete(`http://localhost:8080/employee/remove/${id}`)
      .then(() => {
        alert("Deleted successfully");
        setEmployee(null);
      })
      .catch(() => alert("Failed to delete"));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-linear-to-r from-blue-100 to-purple-200 p-6">
        <p className="text-center text-gray-600 text-lg">Loading your profile...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-r from-blue-100 to-purple-200 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center drop-shadow-md">
          Your Profile
        </h1>

        {employee ? (
          <div className="overflow-x-auto rounded-xl shadow-lg">
            <table className="w-full border-collapse bg-white">
              <thead className="bg-blue-600 text-white text-sm uppercase tracking-wide">
                <tr>
                  <th className="py-3 px-5 text-left">Field</th>
                  <th className="py-3 px-5 text-left">Value</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-5 font-semibold">Name</td>
                  <td className="py-3 px-5">{employee.name}</td>
                </tr>

                <tr className="border-b">
                  <td className="py-3 px-5 font-semibold">Email</td>
                  <td className="py-3 px-5">{employee.email}</td>
                </tr>

                <tr className="border-b">
                  <td className="py-3 px-5 font-semibold">Designation</td>
                  <td className="py-3 px-5">{employee.designation}</td>
                </tr>

                <tr className="border-b">
                  <td className="py-3 px-5 font-semibold">Phone No</td>
                  <td className="py-3 px-5">{employee.phoneNo}</td>
                </tr>

                <tr>
                  <td className="py-3 px-5 font-semibold">Actions</td>
                  <td className="py-3 px-5 flex gap-3">
                    <button
                      onClick={() => setEmployeeId(employee.eid)}
                      className="bg-sky-500 text-white py-1.5 px-5 rounded-lg shadow-sm hover:bg-sky-600 active:scale-95 transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteEmployee(employee.eid)}
                      className="bg-rose-500 text-white py-1.5 px-5 rounded-lg shadow-sm hover:bg-rose-600 active:scale-95 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            {employeeId && (
              <UpdateEmployee
                empId={employeeId}
                setEmployeeId={setEmployeeId}
                onUpdate={() => loadEmployee(employee.email)}
              />
            )}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-6 text-lg">No profile found.</p>
        )}
      </div>
    </div>
  );
};

export default EmployeeList;

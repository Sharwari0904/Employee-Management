import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const Register = () => {
    const navigate = useNavigate();
    let [employee, setEmployee] = useState({
        name: "",
        email: "",
        password: "",
        designation: "",
        phoneNo: ""
    });

    function inputhandler(e) {
        let { name, value } = e.target;
        setEmployee((old) => ({ ...old, [name]: value }));
    }

    function saveEmployee(e) {
        e.preventDefault();
        axios.post("http://localhost:8080/employee/register", employee)
            .then((res) => {
                alert("saved successfully");
                console.log(res.data);
            })
            .catch((err) => {
                alert("failed to save");
                console.log(err);
            });
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-linear-to-r from-blue-100 to-purple-200 p-4">
            <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
                <h2 className="text-4xl font-extrabold text-blue-700 mb-8 text-center drop-shadow-md">
                    Register
                </h2>

                <form className="space-y-4" onSubmit={saveEmployee}>
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                            Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter Name"
                            value={employee.name}
                            onChange={inputhandler}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                            Email:
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Enter Email"
                            value={employee.email}
                            onChange={inputhandler}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                            Password:
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter Password"
                            value={employee.password}
                            onChange={inputhandler}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                        />
                    </div>

                    <div>
                        <label htmlFor="designation" className="block text-gray-700 font-medium mb-1">
                            Designation:
                        </label>
                        <input
                            type="text"
                            name="designation"
                            id="designation"
                            placeholder="Enter Designation"
                            value={employee.designation}
                            onChange={inputhandler}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                        />
                    </div>

                    <div>
                        <label htmlFor="phoneNo" className="block text-gray-700 font-medium mb-1">
                            Phone No.:
                        </label>
                        <input
                            type="text"
                            name="phoneNo"
                            id="phoneNo"
                            placeholder="Enter Phone no."
                            value={employee.phoneNo}
                            onChange={inputhandler}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                        />
                    </div>
                    <button className="w-full mt-6 bg-blue-600 text-white p-3 rounded-xl font-semibold hover:bg-blue-700 transition-shadow shadow-md hover:shadow-lg">
                    Register
                    </button>
                </form>

                
            </div>
        </div>
    );
};

export default Register;

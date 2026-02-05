import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const loginEmp = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("http://localhost:8080/employee/login", employee)
      .then((res) => {
        if (res.data === "login successful") {
          // 🔥 IMPORTANT FIX: Save email to localStorage
          localStorage.setItem("email", employee.email);

          alert("Login successful");
          navigate("/employee");  // profile page
        } else {
          alert("Invalid credentials");
        }
      })
      .catch((err) => {
        alert(err.response?.data?.message || "Error connecting to server");
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-r from-blue-100 to-purple-200 p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-8 text-center drop-shadow-md">
          Login
        </h2>

        <form className="space-y-4" onSubmit={loginEmp}>
          <div className="space-y-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={employee.email}
              onChange={inputHandler}
              placeholder="Email"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />

            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={employee.password}
              onChange={inputHandler}
              placeholder="Password"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-6 bg-blue-600 text-white p-3 rounded-xl font-semibold transition-shadow shadow-md hover:shadow-lg ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

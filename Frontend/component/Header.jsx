import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-4 container mx-auto">
        
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="logo"
            className="w-10 h-10"
          />
          <h1 className="text-xl font-bold text-gray-700 tracking-wide">
            Employee Management
          </h1>
        </div>

        {/* Navbar */}
        <nav className="space-x-6 text-lg font-medium">
          <Link to="/home" className="hover:text-blue-500">Home</Link>
          <Link to="/login" className="hover:text-blue-500">Login</Link>
          <Link to="/register" className="hover:text-blue-500">Register</Link>
          {/*<Link to="/employee" className="hover:text-blue-500">Employee</Link>*/}
        </nav>
      </div>
    </header>
  );
};

export default Header;

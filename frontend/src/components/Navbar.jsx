import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h3>SQL Platform</h3>
      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
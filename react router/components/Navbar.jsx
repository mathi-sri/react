import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <Link to="/">
          React Router
        </Link>
      </div>

      <div className="navbar-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/about">
          About
        </Link>

        <Link to="/contact">
          Contact
        </Link>

        <Link to="/service">
          Service
        </Link>

        <Link to="/students">
          Students
        </Link>

        {isLoggedIn ? (
          <>
            <Link to="/dashboard">
              Dashboard
            </Link>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            className="login-btn"
            to="/login"
          >
            Login
          </Link>
        )}

      </div>

    </nav>
  );
}

export default Navbar;
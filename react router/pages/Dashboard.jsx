import {
  Link,
  Outlet
} from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard-container">

      <div className="dashboard-sidebar">

        <h2>Dashboard</h2>

        <Link to="/dashboard">
          Overview
        </Link>

        <Link to="profile">
          Profile
        </Link>

        <Link to="settings">
          Settings
        </Link>

      </div>

      <div className="dashboard-content">

        <h1>Dashboard</h1>

        <p>
          Welcome to your protected dashboard.
        </p>

        <div className="dashboard-box">

          <h2>
            Nested Routing
          </h2>

          <p>
            Select Profile or Settings from
            the sidebar.
          </p>

        </div>

        <Outlet />

      </div>

    </div>
  );
}

export default Dashboard;
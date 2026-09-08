import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="small-title">
          REACT ROUTER PROJECT
        </p>

        <h1>
          Learn React Routing
        </h1>

        <p>
          This project demonstrates basic, dynamic,
          nested, and protected routing in React.
        </p>

        <div className="hero-buttons">

          <Link
            to="/students"
            className="primary-btn"
          >
            View Students
          </Link>

          <Link
            to="/dashboard"
            className="secondary-btn"
          >
            Dashboard
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Home;
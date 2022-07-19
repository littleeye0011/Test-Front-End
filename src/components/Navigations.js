import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <h1 className="title">TEST FRONTEND</h1>
      <nav className="navbar">
        <ul className="link">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Pokemon">Pokemon</Link>
          </li>
          <li>
            <Link to="/Function1">Function 1</Link>
          </li>
          <li>
            <Link to="/Function2">Function 2</Link>
          </li>
          <li>
            <Link to="/Function3">Function 3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

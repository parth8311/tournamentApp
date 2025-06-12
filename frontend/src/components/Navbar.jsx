import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar-title">Tournament Manager</h1>
    <div className="navbar-links">
      <Link to="/">Dashboard</Link>
      <Link to="/groups">Groups</Link>
      <Link to="/fixtures">Fixtures</Link>
    </div>
  </nav>
);

export default Navbar;

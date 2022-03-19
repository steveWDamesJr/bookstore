import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navbar = () => (
  <header className="header">
    <div className="Navbar">
      <nav className="flex">
        <ul>
          <li>
            <Link className="bookstore-cms" to="/">Bookstore CMS</Link>
          </li>
          <li>
            <Link className="books" to="/">BOOKS</Link>
          </li>
          <li>
            <Link className="categories" to="/categories">CATEGORIES</Link>
          </li>
          <li className="profile-icon"><FaUser /></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Navbar;

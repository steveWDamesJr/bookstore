import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="Navbar">
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
        <li className="profile-icon">CgProfile</li>
      </ul>
    </nav>
  </header>
);

export default Navbar;

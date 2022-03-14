import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="flex justify-between items-center Navbar">
    <nav className="flex">
      <ul>
        <li>
          <Link className="books" to="/">Bookstore CMS</Link>
        </li>
        <li>
          <Link className="books" to="/">BOOKS</Link>
        </li>
        <li>
          <Link className="categories" to="/categories">CATEGORIES</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;

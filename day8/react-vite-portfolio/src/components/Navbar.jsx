import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">Swetha Jayaprakash</h2>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

    </nav>
  );
}

export default Navbar;
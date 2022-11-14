import "./navigation.css";

export const Navigation = () => {
  return (
    <div>
      <nav className="navigation">
        <a href="./assets/logo">Logo</a>
        <ul className="navLinks">
          <li className="navItems">
            <a href="/home">Home</a>
          </li>
          <li className="navItems">
            <a href="/home">About me</a>
          </li>
          <li className="navItems">
            <a href="/home">Projects</a>
          </li>
          <li className="navItems">
            <a href="/home">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

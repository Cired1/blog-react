import ButtonTheme from "./ButtonTheme";
import Navbar from "./Navbar";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">CSS Blog</h1>
      <Navbar />
      <ButtonTheme />
    </header>
  );
};

export default Header;

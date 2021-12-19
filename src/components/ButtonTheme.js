import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import ThemeContext from "../context/ThemeContext";
import "./ButtonTheme.css";

const ButtonTheme = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <button className={`${theme} btn-theme`} onClick={handleTheme}>
      {theme === "light" ? (
        <FaMoon className="theme-icon" size={14}/>
      ) : (
        <FaSun className="theme-icon" size={14}/>
      )}
    </button>
  );
};

export default ButtonTheme;

import { useContext } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ThemeContext from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <div className="container">
        <Header />
        <main className="container-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect, FC } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./styles/app-style.css";
import Navbar from "./components/navbar-comp";
import Projects from "./components/project-comp";
import Resume from "./components/resume-comp";
import About from "./components/about-comp";
import Blog from "./components/blog-comp";

const App: FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/projects" />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

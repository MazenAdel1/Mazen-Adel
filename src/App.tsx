import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Background from "./layout/Background";
import Menu from "./components/Menu";

function App() {
  return (
    <main className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[#001F3D] font-ubuntu">
      <Background />
      <Routes>
        <Route path="/Mazen-Adel/" element={<Home />} />
        <Route
          path="/Mazen-Adel/about"
          element={
            <>
              <About />
              <Menu />
            </>
          }
        />
        <Route
          path="/Mazen-Adel/projects"
          element={
            <>
              <Projects />
              <Menu />
            </>
          }
        />
        <Route
          path="/Mazen-Adel/contact"
          element={
            <>
              <Contact />
              <Menu />
            </>
          }
        />
      </Routes>
    </main>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Background from "./layout/Background";
import Menu from "./components/Menu";

function App() {
  return (
    <main className="font-ubuntu relative flex min-h-[100dvh] flex-col overflow-hidden bg-[#001F3D]">
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <>
              <About />
              <Menu />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Projects />
              <Menu />
            </>
          }
        />
        <Route
          path="/contact"
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

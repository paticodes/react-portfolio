import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { ProjectDetail } from "@/pages/ProjectDetail";


const HomePage = () => (
  <>
    <Hero />
    <Projects />
    <About />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            
            <Route path="/" element={<HomePage />} />
            
           
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
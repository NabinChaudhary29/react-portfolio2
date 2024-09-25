import { Route, Routes } from "react-router-dom";
import "./App.css";

import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Project } from "./components/Project";
import { Skill } from "./components/Skill";
import { LayOut } from "./components/LayOut";
import { PageNotFound } from "./components/PageNotFound";


function App() {
  return (
    <>
      {/* <!-- dar mode toggler --> */}

      
        <Routes>
          <Route path="/" element={<LayOut/>}>
            <Route path="/" element={<Hero/>}/>
            <Route path="skills" element={<Skill/>}/>
            <Route path="projects" element={<Project/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Route>
        </Routes>
        
      
    </>
  );
}

export default App;

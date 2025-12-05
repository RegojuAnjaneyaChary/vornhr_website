import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Attendance from "./pages/Attendence";
import Employees from "./pages/Employee";
import Leaves from "./pages/Leaves";
import Reports from "./pages/Reports";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css"

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home", "profile", "attendance", "employees", 
        "leaves", "reports", "settings", "help"
      ];
      
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <Navbar activeSection={activeSection} onSectionClick={scrollToSection} />
      
      <div className="pt-16">
        <section id="home">
          <Home />
        </section>

        <section id="profile">
          <Profile />
        </section>

        <section id="attendance">
          <Attendance />
        </section>

        <section id="employees">
          <Employees />
        </section>

        <section id="leaves">
          <Leaves />
        </section>

        <section id="reports">
          <Reports />
        </section>

        <section id="about">
          <About/>
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

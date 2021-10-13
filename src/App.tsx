import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  let scrollTimeout: any;
  const [scrollingEnded, setScrollingEnded] = useState<boolean>();
  const handleScroll = () => {
    window.clearTimeout(scrollTimeout);
    scrollTimeout = window.setTimeout(function () {
      setScrollingEnded(true);
    }, 100);
    if (scrollingEnded) {
      const sections = document.getElementsByTagName("section");
      for (let i = 0; i < sections.length; i++) {
        const section = sections.item(i);
        if (
          section!.offsetTop < window.pageYOffset + 10 &&
          section!.offsetTop + section!.offsetHeight > window.pageYOffset + 10
        ) {
          window.location.hash = section!.id;
        }
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const onLinkClick = (event: any, id: string) => {
    event.preventDefault();
    setScrollingEnded(false);
    document.getElementById(id)?.scrollIntoView();
    window.location.hash = id;
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <Home onLinkClick={onLinkClick} />
        <div id="content">
          <Header onLinkClick={onLinkClick} />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

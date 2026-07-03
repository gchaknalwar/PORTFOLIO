import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Certifications from "./components/Certifications.jsx";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

/* Layout wrapper */
const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* pt-24 so navbar doesn't overlap content */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

/* About + Certifications shown together on one page */
const AboutPage = () => (
  <>
    <About />
    <Certifications />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "About",
        element: <AboutPage />,
      },
      {
        path: "Experience",
        element: <Experience />,
      },
      {
        path: "Projects",
        element: <Projects />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
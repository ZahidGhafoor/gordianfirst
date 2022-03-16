import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Screens/About/About";
import Adress from "./Screens/Adress/Adress";
import Clients from "./Screens/Clients/Clients";
import Contact from "./Screens/Contact/Contact";
import Copy from "./Screens/CopyRigh/Copy";
import Home from "./Screens/Home/Home";
import Services from "./Screens/Service/Services";
import Test from "./Screens/Test/Test";

const App = () => {
  const home = useRef(null);
  const about = useRef(null);
  const service = useRef(null);
  const client = useRef(null);
  const contact = useRef(null);

  const homescroll = () =>
    home.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const aboutscroll = () =>
    about.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const servicescroll = () =>
    service.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const clientscroll = () =>
    client.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const contactscroll = () =>
    contact.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    // <>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <>
    //           <Home
    //             home={home}
    //             homescroll={homescroll}
    //             aboutscroll={aboutscroll}
    //             servicescroll={servicescroll}
    //             clientscroll={clientscroll}
    //             contactscroll={contactscroll}
    //           />
    //           <About about={about} />
    //           <Clients client={client} />
    //           <Adress />
    //           <Contact contact={contact} />
    //         </>
    //       }
    //     />
    //     <Route path="/products" element={<Services />} />
    //   </Routes>
    //   <Copy />
    // </>
    <Test />
  );
};

export default App;

import React from "react";
import { Switch, Route } from "react-router-dom";

import "./styles.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import NotFoundPage from "./pages/NotFoundPage";
import News from "./pages/News";
import Home from "./pages/Home";
import Details from "./pages/Details";
import ContactUs from "./pages/Contacts";

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/News" component={News} />
        <Route path="/Details" component={Details} />
        <Route path="/Contacts" component={ContactUs} />
        <Route component={NotFoundPage} />
      </Switch>

      <Footer />
    </div>
  );
}

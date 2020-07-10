import React, { Component } from "react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { Home, AboutMe, Contact, Portfolio } from "./pages";



class App extends Component {
  render() {
    return <>
      <Header />
      <Home />
      
      <Footer />
    </>
  }
}


export default App;
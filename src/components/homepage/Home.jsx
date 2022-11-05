import React from "react";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import "./Home.css";
import Featured from "../featured/Featured";
import PropertyList from "../propertyList/PropertyList";
import PreferredProperties from "../preferredProperties/PreferredProperties";
import MailList from "../mailList/MailList";
import Footer from "../footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='home-container'>
        <Featured />
        <h1 className='home-title'>Browse by property type</h1>
        <PropertyList />
        <h1 className='home-title'>Homes guests love</h1>
        <PreferredProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

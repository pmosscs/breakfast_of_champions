import React from "react";
import HeroSection from "../components/home/HeroSection";

function HomeScreen() {
  return (
    <div className="main-screen">
      <HeroSection />
      <button>Create Custom Order</button>
      <h2>Our All-time Faves</h2>
    </div>
  );
}

export default HomeScreen;

import React from "react";

function HeroSection() {
  const sectionStyle = {
    background: `linear-gradient(190deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/5/14/1/FNM_060115-Insert-No4-Rhubarb-Soda_s4x3.jpg.rend.hgtvcom.616.462.suffix/1431615720548.jpeg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="hero" style={sectionStyle}>
      <h2>
        Try our New Favorite
        <br />
        <span className="big-title">Summer Nights</span>
      </h2>
      <button>Try it Today</button>
    </section>
  );
}

export default HeroSection;

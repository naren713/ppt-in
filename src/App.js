import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Navbars from "./components/nav-bar.component";
import image1 from "./img/Yuri.jpg";
import image2 from "./img/Dongcheng.png";
import image3 from "./img/Hikoki_JT.png";
import image4 from "./img/Hikoki_drill.png";
import image5 from "./img/Dongcheng_man.png";

export default function App() {
  return (
    <div>
      <Navbars />
      <AliceCarousel autoPlay autoPlayInterval="2000">
        <img src={image1} className="sliderimg" />
        <img src={image2} className="sliderimg" />
        <img src={image3} className="sliderimg" />
        <img src={image4} className="sliderimg" />
        <img src={image5} className="sliderimg" />
      </AliceCarousel>
    </div>
  );
}

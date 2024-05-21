import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "../../layouts/HomeLayout/HomeLayout.css";

function HomeSlider() {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
    });
  }, []);

  return (
    <div className="slider">
      <div className="sliderbox swiper">
        <div className="wrap swiper-wrapper">
          <div className="item swiper-slide">
            <div className="image">
              <div className="ob-cover">
                <img src="/assets/slider1.jpg" alt="" />
              </div>
              <div className="title-info">
                <div className="container-wide">
                  <div className="wrap">
                    <h3>Understand more your plant</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item swiper-slide">
            <div className="image">
              <div className="ob-cover">
                <img src="assets/slider2.jpg" alt="" />
              </div>
              <div className="title-info">
                <div className="container-wide">
                  <div className="wrap">
                    <h3>Connect to other green enthusiasts</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="custom-pagination">
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;

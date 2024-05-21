import React from "react";

function HomeArticle() {
  return (
    <div className="article">
      <div className="container">
        <div className="wrap">
          <div className="heading">
            <h2 className="title">Popular Plant</h2>
          </div>
          <div className="dotgrid scrollto">
            <div className="wrapper">
              <div className="item">
                <div className="dot-image">
                  <div className="thumbnail hover">
                    <img src="assets/growing_plant_image/cabbage.jpg" alt="" />
                  </div>
                </div>
                <div className="dot-info">
                  <h3 className="dot-title">How to Plant and Grow Cabbage</h3>
                  <p className="grey-color">
                    Cabbage (Brassica oleracea spp.) is a classNameic vegetable
                    that has been a staple in Western diets for hundreds of
                    years
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="dot-image">
                  <div className="thumbnail hover">
                    <img src="assets/growing_plant_image/eggplant.jpg" alt="" />
                  </div>
                </div>
                <div className="dot-info">
                  <h3 className="dot-title">How to Plant and Grow Eggplant</h3>
                  <p className="grey-color">
                    Eggplants grow best in full sun; moist, well-drained soil;
                    and warm conditions. Do not put eggplant transplants in the
                    garden until nighttime lows are regularly above 50°F
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="dot-image">
                  <div className="thumbnail hover">
                    <img src="assets/growing_plant_image/Carrot.jpg" alt="" />
                  </div>
                </div>
                <div className="dot-info">
                  <h3 className="dot-title">How to Plant and Grow Carrot</h3>
                  <p className="grey-color">
                    Plant carrot seeds directly in the garden. Make sure your
                    soil is as free of stones and clods of clay as possible.
                    Once the danger of frost is past and the soil temperature
                    has reached 60 degrees F, sow seeds ¼ inch deep and ½ inch
                    apart in rows 18 inches apart
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="dot-image">
                  <div className="thumbnail hover">
                    <img src="assets/growing_plant_image/Bluberry.jpg" alt="" />
                  </div>
                </div>
                <div className="dot-info">
                  <h3 className="dot-title">How to Plant and Grow Bluberry</h3>
                  <p className="grey-colore">
                    There are five different types of blueberries, which are
                    grouped by plant size. The most commonly cultivated
                    blueberry type, northern highbush blueberries (Vaccinium
                    corymbosum 'Jubilee' for example) are typically 6 to 12 feet
                    tall at maturity but can grow even taller in favorable
                    conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeArticle;

import React from "react";
import { Link } from "react-router-dom";

function HomeBlog() {
  return (
    <div className="blog">
      <div className="container">
        <div className="wrap">
          <div className="heading">
            <h2 className="title">From the blog</h2>
          </div>
          <div className="dotgrid scrollto">
            <div className="wrapper">
              <div className="item">
                <div className="dot-image">
                  <div className="thumbnail hover">
                    <Link href="">
                      <img
                        src="assets/growing_plant_image/lavender.jpg"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <div className="dot-info">
                  <h3 className="dot-title">
                    <Link href="">
                      This is how I plant my lavender succesfully.
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="dot-image">
                  <div className="thumbnail hover">
                    <Link href="">
                      <img
                        src="assets/growing_plant_image/japanese anemone_2.jpg"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <div className="dot-info">
                  <h3 className="dot-title">
                    <Link href="">
                      If you are finding how to grow japanese anemone in Saigon.
                      This is for you.
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="dot-image">
                  <div className="thumbnail hover">
                    <Link href="">
                      <img
                        src="assets/growing_plant_image/rosemary.jpg"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <div className="dot-info">
                  <h3 className="dot-title">
                    <Link href="">Tips to grow rosemary in Saigon. </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="button">
            <Link href="" className="secondary-btn" style={{ color: "#fff" }}>
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBlog;

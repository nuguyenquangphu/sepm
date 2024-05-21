import React from "react";
import { Link } from "react-router-dom";
import {
  RiArrowRightLine,
  RiFacebookLine,
  RiInstagramLine,
  RiMailLine,
  RiTwitterLine,
} from "react-icons/ri";

function HomeFooter() {
  return (
    <footer>
      <div className="inner-footer">
        <div className="container">
          <div className="wrap">
            <div className="top">
              <div className="subscribe">
                <h3>Subcribe for more</h3>
                <p className="grey-color">
                  Enter your email to get news from us
                </p>
                <form action="" className="search">
                  <i>
                    <RiMailLine />
                  </i>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter your email"
                  />
                  <input type="submit" className="submit" />
                  <i>
                    <RiArrowRightLine />
                  </i>
                </form>
              </div>
              <div className="list-block">
                <h3 className="dot-title">Service</h3>
                <ul>
                  <li>
                    <Link href="#">About us</Link>
                  </li>
                  <li>
                    <Link href="#">Career</Link>
                  </li>
                  <li>
                    <Link href="#">Term & Condition</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy policy</Link>
                  </li>
                </ul>
              </div>
              <div className="list-block">
                <h3 className="dot-title">Pages</h3>
                <ul>
                  <li>
                    <Link href="#">My account</Link>
                  </li>
                  <li>
                    <Link href="#">Log in</Link>
                  </li>
                </ul>
              </div>
              <div className="list-block">
                <h3 className="dot-title">Pages</h3>
                <div className="comp-address grey-color">
                  <p>District 1, Ho Chi Minh city</p>
                  <p>
                    <Link href="">+84 0000 0000</Link>
                    <br />
                    <Link href="">BloomBuddy@gmail.com</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="list-inline">
                <ul>
                  <li>
                    <Link href="">
                      <i>
                        <RiFacebookLine />
                      </i>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i>
                        <RiInstagramLine />
                      </i>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i>
                        <RiTwitterLine />
                      </i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="copyright">
                <p>2024. Group 10. All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default HomeFooter;

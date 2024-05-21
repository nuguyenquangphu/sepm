import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaMapMarked,
  FaPhone,
  FaTree,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <section class="footer">
      <div class="box-container">
        <div class="box">
          <h3>
            BloomBuddy{" "}
            <i class="fas fa-tree">
              <FaTree />
            </i>
          </h3>
          <p>BloomBuddy|Start your plant journey now</p>
          <div class="share">
            <Link href="#" class="fab fa-facebook-f">
              <i>
                <FaFacebookF />
              </i>
            </Link>
            <Link href="#" class="fab fa-twitter">
              <i>
                <FaTwitter />
              </i>
            </Link>
            <Link href="#" class="fab fa-instagram">
              <FaInstagram />
            </Link>
            <Link href="#" class="fab fa-linkedin">
              <FaLinkedin />
            </Link>
          </div>
        </div>
        <div class="box">
          <h3>Contact Information</h3>
          <Link href="#" class="links">
            <i class="fas fa-phone">
              <FaPhone />
            </i>
            +84 456 7890
          </Link>
          <Link href="#" class="links">
            <i class="fas fa-envelope">
              <FaEnvelope />
            </i>
            bloombuddy@gmail.com
          </Link>
          <Link href="#" class="links">
            <i class="fas fa-map-marker-alt">
              <FaMapMarked />
            </i>
            Ho Chi Minh, Vietnam
          </Link>
        </div>
        <div class="box">
          <h3>Newsletter</h3>
          <p>subcribe for latest updates</p>
          <input type="email" placeholder="your email" class="email" />
          <input type="submit" value="subscribe" class="btn" />
          <img
            src="Payment method/paymenticon-default.png"
            class="payment"
            alt=""
          />
        </div>
      </div>
      <div class="credit"> created by Team 10 | all rights reserved </div>
    </section>
  );
}

export default Footer;

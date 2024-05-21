import React from "react";
import "./PlantSearch.css";
import { CiSearch } from "react-icons/ci";

function PlantSearch() {
  return (
    <div className="plant-search">
      <div className="plant-search-header">
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="#Blog">Blog</a>
          </li>
          <li>
            <a href="plantsearching.html">Plant Information</a>
          </li>
          <li>
            <a href="#reviews"> Our customer </a>
          </li>
        </ul>
        <h2>
          Bloom<span>Buddy</span>
        </h2>
        <form>
          <div className="plant-search-search">
            <i>
              <CiSearch />
            </i>
            <input
              className="search-input"
              type="text"
              placeholder="Find your plant"
            />
          </div>
        </form>
      </div>

      <section className="home" id="home"></section>
    </div>
  );
}

export default PlantSearch;

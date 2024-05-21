import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  RiArrowDownSLine,
  RiCloseLine,
  RiMenuLine,
  RiSearchLine,
  RiUser3Line,
} from "react-icons/ri";
import HomeMobileMenu from "../HomeMobileMenu/HomeMobileMenu";
import { auth } from "../../../services/firebase";

function HomeHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <header>
      <div className="inner-header">
        <div className="container wide">
          <div className="wrap">
            <div className="header-left">
              <div className="menu-bar">
                <div className="menu-trigger" onClick={toggleMobileMenu}>
                  <i>
                    <RiMenuLine />
                  </i>
                </div>
              </div>
              <div className="list-inline">
                <ul>
                  {user ? (
                    <li>
                      <Link to="/account">
                        <RiUser3Line />
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="header-center">
              <nav className="menu">
                <ul>
                  <li>
                    <Link to="/">
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/category">
                      <span>Plants</span>
                      <i>
                        <RiArrowDownSLine />
                      </i>
                    </Link>
                    <ul className="sub-mega">
                      <li>
                        <div className="container">
                          <div className="wrapper">
                            <div className="mega-content">
                              <div className="links">
                                <div className="list-block">
                                  <h3 className="dot-title">A</h3>
                                  <ul>
                                    <li>
                                      <Link to="#">African Daisy</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Aguja</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Amaranth</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Angelica</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Anemone</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Astilbe</Link>
                                    </li>
                                  </ul>
                                  <h3 className="dot-title">B</h3>
                                  <ul>
                                    <li>
                                      <Link to="#">Ballon Flower</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Begonia</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Blueberry</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Basil</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Bacopa</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Beech</Link>
                                    </li>
                                  </ul>
                                  <h3 className="dot-title">C</h3>
                                  <ul>
                                    <li>
                                      <Link to="#">Cotton</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Corn</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Clematis</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Cumin</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Carrot</Link>
                                    </li>
                                  </ul>
                                  <h3 className="dot-title">D</h3>
                                  <ul>
                                    <li>
                                      <Link to="#">Daylily</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dill</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dahlia</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dusty Miller</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dianthus</Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="list-block">
                                  <h3 className="dot-title">E</h3>
                                  <ul>
                                    <li>
                                      <Link to="#">African Daisy</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Aguja</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Amaranth</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Angelica</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Anemone</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Astilbe</Link>
                                    </li>
                                  </ul>
                                  <h3 className="dot-title">F</h3>
                                  <ul>
                                    <li>
                                      <Link to="#">Ballon Flower</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Begonia</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Blueberry</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Basil</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Bacopa</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Beech</Link>
                                    </li>
                                  </ul>
                                  <h3 className="dot-title">G</h3>
                                  <ul>
                                    <li>
                                      <Link to="#">Cotton</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Corn</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Clematis</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Cumin</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Carrot</Link>
                                    </li>
                                  </ul>
                                  <h3 className="dot-title">H</h3>
                                  <ul>
                                    <li>
                                      <Link to="#">Daylily</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dill</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dahlia</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dusty Miller</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dianthus</Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="list-block">
                                  <h3 className="dot-title">I</h3>
                                  <ul>
                                    <li>
                                      <Link to="#">African Daisy</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Aguja</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Amaranth</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Angelica</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Anemone</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Astilbe</Link>
                                    </li>
                                  </ul>
                                  <h3 className="dot-title">J</h3>
                                  <ul>
                                    <li>
                                      <Link to="#">Ballon Flower</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Begonia</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Blueberry</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Basil</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Bacopa</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Beech</Link>
                                    </li>
                                  </ul>
                                  <h3 className="dot-title">K</h3>
                                  <ul>
                                    <li>
                                      <Link to="#">Cotton</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Corn</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Clematis</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Cumin</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Carrot</Link>
                                    </li>
                                  </ul>
                                  <h3 className="dot-title">L</h3>
                                  <ul>
                                    <li>
                                      <Link to="#">Daylily</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dill</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dahlia</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dusty Miller</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dianthus</Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="list-block">
                                  <h3 className="dot-title">M</h3>
                                  <ul>
                                    <li>
                                      <Link to="#">African Daisy</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Aguja</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Amaranth</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Angelica</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Anemone</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Astilbe</Link>
                                    </li>
                                  </ul>
                                  <h3 className="dot-title">N</h3>
                                  <ul>
                                    <li>
                                      <Link to="#">Ballon Flower</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Begonia</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Blueberry</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Basil</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Bacopa</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Beech</Link>
                                    </li>
                                  </ul>
                                  <h3 className="dot-title">O</h3>
                                  <ul>
                                    <li>
                                      <Link to="#">Cotton</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Corn</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Clematis</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Cumin</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Carrot</Link>
                                    </li>
                                  </ul>
                                  <h3 className="dot-title">P</h3>
                                  <ul>
                                    <li>
                                      <Link to="#">Daylily</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dill</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dahlia</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dusty Miller</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dianthus</Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="list-block">
                                  <h3 className="dot-title">M</h3>
                                  <ul>
                                    <li>
                                      <Link to="#">African Daisy</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Aguja</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Amaranth</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Angelica</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Anemone</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Astilbe</Link>
                                    </li>
                                  </ul>
                                  <h3 className="dot-title">N</h3>
                                  <ul>
                                    <li>
                                      <Link to="#">Ballon Flower</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Begonia</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Blueberry</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Basil</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Bacopa</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Beech</Link>
                                    </li>
                                  </ul>
                                  <h3 className="dot-title">O</h3>
                                  <ul>
                                    <li>
                                      <Link to="#">Cotton</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Corn</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Clematis</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Cumin</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Carrot</Link>
                                    </li>
                                  </ul>
                                  <h3 className="dot-title">P</h3>
                                  <ul>
                                    <li>
                                      <Link to="#">Daylily</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dill</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dahlia</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dusty Miller</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dianthus</Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="list-block">
                                  <h3 className="dot-title">M</h3>
                                  <ul>
                                    <li>
                                      <Link to="#">African Daisy</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Aguja</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Amaranth</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Angelica</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Anemone</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Astilbe</Link>
                                    </li>
                                  </ul>
                                  <h3 className="dot-title">N</h3>
                                  <ul>
                                    <li>
                                      <Link to="#">Ballon Flower</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Begonia</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Blueberry</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Basil</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Bacopa</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Beech</Link>
                                    </li>
                                  </ul>
                                  <h3 className="dot-title">O</h3>
                                  <ul>
                                    <li>
                                      <Link to="#">Cotton</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Corn</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Clematis</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Cumin</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Carrot</Link>
                                    </li>
                                  </ul>
                                  <h3 className="dot-title">P</h3>
                                  <ul>
                                    <li>
                                      <Link to="#">Daylily</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dill</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dahlia</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dusty Miller</Link>
                                    </li>
                                    <li>
                                      <Link to="#">Dianthus</Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="/blog">
                      <span>Blog </span>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="branding">
                <Link to="/">BloomBuddy</Link>
              </div>
            </div>
            <div className="header-right">
              <div className="list-inline">
                <ul>
                  <li onClick={toggleSearch}>
                    <Link to="#0" data-target="search-float">
                      <i>
                        <RiSearchLine />
                      </i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          id="search-float"
          className={`search-float ${isSearchOpen ? "active" : ""}`}
        >
          <div className="ontainer wide">
            <form action="" className="search">
              <i>
                <RiSearchLine />
              </i>
              <input
                type="search"
                className="input"
                id=""
                placeholder="Search"
              />
              <i onClick={toggleSearch}>
                <RiCloseLine />
              </i>
            </form>
          </div>
        </div>
        <div
          className={`overlay ${
            isMobileMenuOpen || isSearchOpen ? "active" : ""
          }`}
          data-overlay
        ></div>
        <HomeMobileMenu
          isOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>
    </header>
  );
}

export default HomeHeader;

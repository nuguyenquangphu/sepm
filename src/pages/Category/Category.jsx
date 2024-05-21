import React from "react";
import { Link } from "react-router-dom";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";
import {
  RiEyeLine,
  RiLayoutGridLine,
  RiLayoutMasonryLine,
  RiListCheck2,
  RiPauseMiniLine,
} from "react-icons/ri";

function Category() {
  return (
    <HomeLayout>
      <div class="single-product" style={{ padding: 0 }}>
        <div class="container">
          <div class="wrapper">
            <div class="breadcrumb">
              <ul class="flexitem">
                <li>
                  <Link href="">Home</Link>
                </li>
                <li>
                  <Link href="">Rose</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container" style={{ padding: 0 }}>
        <div class="wrap">
          <div class="content">
            <div class="category-content">
              <div class="sorter">
                <Link href="#0" class="menu-trigger">
                  <i class="ri-filter-line"></i>
                </Link>
                <div class="sort-list">
                  <div class="wrap">
                    <div class="opt-trigger">
                      <span class="grey-color">Showing 9 of N results</span>
                    </div>
                    <ul>
                      <li class="active">
                        <Link href=""></Link>
                      </li>
                      <li>
                        <Link href=""></Link>
                      </li>
                      <li>
                        <Link href=""></Link>
                      </li>
                      <li>
                        <Link href=""></Link>
                      </li>
                      <li>
                        <Link href=""></Link>
                      </li>
                      <li>
                        <Link href=""></Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="list-inline">
                  <ul>
                    <list>
                      <Link href="">
                        <i>
                          <RiPauseMiniLine />
                        </i>
                      </Link>
                    </list>
                    <list>
                      <Link href="">
                        <i>
                          <RiListCheck2 />
                        </i>
                      </Link>
                    </list>
                    <list>
                      <Link href="">
                        <i>
                          <RiLayoutGridLine />
                        </i>
                      </Link>
                    </list>
                    <list>
                      <Link href="">
                        <i>
                          <RiLayoutMasonryLine />
                        </i>
                      </Link>
                    </list>
                  </ul>
                </div>
              </div>

              <div class="dotgrid">
                <div class="wrapper">
                  <div class="item">
                    <div class="dot-image">
                      <Link href="#" class="plant-permalink"></Link>
                      <div class="thumbnail">
                        <img src="assets/plant/rose1.jpg" alt="" />
                      </div>
                      <div class="actions">
                        <ul>
                          <li>
                            <Link href="plant-info.html">
                              <i>
                                <RiEyeLine />
                              </i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="dot-info">
                      <h2 class="dot-title">
                        <Link href="">Red Rose</Link>
                      </h2>
                    </div>
                  </div>
                  <div class="item">
                    <div class="dot-image">
                      <Link href="#" class="plant-permalink"></Link>
                      <div class="thumbnail">
                        <img src="assets/plant/dickclarkrose.webp" alt="" />
                      </div>
                      <div class="actions">
                        <ul>
                          <li>
                            <Link href="">
                              <i>
                                <RiEyeLine />
                              </i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="dot-info">
                      <h2 class="dot-title">
                        <Link href="">Dick Clark Rose</Link>
                      </h2>
                    </div>
                  </div>
                  <div class="item">
                    <div class="dot-image">
                      <Link href="#" class="plant-permalink"></Link>
                      <div class="thumbnail">
                        <img src="assets/plant/shrubrose.webp" alt="" />
                      </div>
                      <div class="actions">
                        <ul>
                          <li>
                            <Link href="">
                              <i>
                                <RiEyeLine />
                              </i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="dot-info">
                      <h2 class="dot-title">
                        <Link href="">Shrub Rose</Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div class="button">
                <Link href="" class="primary-btn">
                  Load more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default Category;

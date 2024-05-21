import React from "react";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";
import { Link } from "react-router-dom";
import {
  FaDropbox,
  FaSeedling,
  FaSun,
  FaTemperatureHigh,
} from "react-icons/fa";

function PlantInfo() {
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
                <li>Red Rose</li>
              </ul>
            </div>
            <div class="column">
              <div class="products one">
                <div class="flexwrap">
                  <div class="row">
                    <div class="item is_sticky">
                      <div class="big-image">
                        <div class="big-image-wrapper swiper-wrapper">
                          <div class="image-show swiper-slide">
                            <Link data-fslightbox>
                              <img src="assets/plant/rose.jpg" alt="" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="item">
                      <h1>Red Rose</h1>
                      <div class="content">
                        <div class="description collapse">
                          <ul>
                            <li class="has-child expand">
                              <Link href="" class="icon-small">
                                Information
                              </Link>
                              <ul class="content">
                                <li>
                                  <span>GENUS NAME</span> <span>Rosa</span>
                                </li>
                                <li>
                                  <span>COMMON NAME</span> <span>Rose</span>
                                </li>
                                <li>
                                  <span>PLANT TYPE</span> <span>Rose</span>
                                </li>
                                <li>
                                  <span>LIGHT</span> <span>Part Sun, Sun</span>
                                </li>
                                <li>
                                  <span>HEIGHT</span> <span>1 to 3 feet</span>
                                </li>
                                <li>
                                  <span>WIDTH</span> <span>2 to 5 feet</span>
                                </li>
                                <li>
                                  <span>FLOWER COLOR</span>{" "}
                                  <span>
                                    Orange, Pink, Purple, Red, White, Yellow
                                  </span>
                                </li>
                                <li>
                                  <span>FOLIAGE COLOR</span>{" "}
                                  <span>Blue/Green</span>
                                </li>
                                <li>
                                  <span>SEASON FEATURES</span>{" "}
                                  <span>
                                    Fall Bloom, Reblooming, Spring Bloom, Summer
                                    Bloom
                                  </span>
                                </li>
                                <li>
                                  <span>SPECIAL FEATURES</span>{" "}
                                  <span>
                                    Cut Flowers, Fragrance, Good for Containers
                                  </span>
                                </li>
                                <li>
                                  <span>ZONES</span>{" "}
                                  <span>4, 5, 6, 7, 8, 9</span>
                                </li>
                                <li>
                                  <span>PROPAGATION</span>{" "}
                                  <span>Layering, Stem Cuttings</span>
                                </li>
                                <li>
                                  <span>PROBLEM SOLVERS</span>{" "}
                                  <span>Slope/Erosion Control</span>
                                </li>
                              </ul>
                            </li>
                            <li class="has-child">
                              <Link href="" class="icon-small">
                                Details
                              </Link>
                              <div class="content">
                                <p>
                                  A rose is either a woody perennial flowering
                                  plant of the genus Rosa (/ˈroʊzə/),[4] in the
                                  family Rosaceae (/roʊˈzeɪsiːˌiː/),[4] or the
                                  flower it bears. There are over three hundred
                                  species and tens of thousands of
                                  cultivars.[citation needed] They form a group
                                  of plants that can be erect shrubs, climbing,
                                  or trailing, with stems that are often armed
                                  with sharp prickles.[5] Their flowers vary in
                                  size and shape and are usually large and
                                  showy, in colours ranging from white through
                                  yellows and reds. Most species are native to
                                  Asia, with smaller numbers native to Europe,
                                  North America, and northwestern Africa.[5]
                                  Species, cultivars and hybrids are all widely
                                  grown for their beauty and often are fragrant.
                                  Roses have acquired cultural significance in
                                  many societies. Rose plants range in size from
                                  compact, miniature roses, to climbers that can
                                  reach seven meters in height.[5] Different
                                  species hybridize easily, and this has been
                                  used in the development of the wide range of
                                  garden roses.
                                </p>
                              </div>
                            </li>
                            <li class="has-child">
                              <Link href="" class="icon-small">
                                Where to Plant Rose
                              </Link>
                              <div class="content">
                                <p>
                                  Plant English roses along walkways, near
                                  seating areas, or any place their scent can be
                                  enjoyed. Just be sure to allow plenty of
                                  clearance so the shrubs don’t snag passersby
                                  with their prickles. They also need lots of
                                  sunlight to thrive, so take care not to plant
                                  them too close to trees or structures that
                                  will prevent them from getting the sunlight
                                  they need. If your space allows, plant three
                                  English roses together in a triangular
                                  formation. You can plant them as close as 1
                                  foot apart for this grouping and when they
                                  grow, they will mesh together as one large,
                                  lovely shrub. Otherwise, plant your English
                                  roses at least 3 feet apart.
                                </p>
                              </div>
                            </li>
                            <li class="has-child">
                              <Link href="" class="icon-small">
                                When and How to Plant Rose
                              </Link>
                              <div class="content">
                                <p>
                                  Potted English roses can be planted after the
                                  last frost in the spring or six weeks before
                                  the first frost in the fall. If you plant
                                  early enough in the fall, the roots will have
                                  time to get established before going dormant
                                  for the winter. The hole you dig should be
                                  large enough to accommodate the entire root
                                  system. It should be approximately twice the
                                  width of the pot and slightly deeper. Once the
                                  plant is in the ground, fill in with soil and
                                  compost making sure the bud unions at the base
                                  of the plant are at ground level in mild
                                  climates and 2 to 3 inches below ground level
                                  in colder climates. Bare-root English roses
                                  should be planted in early spring or as early
                                  as January depending on your hardiness zone.
                                  If you are in zones 8 or higher, you can wait
                                  until mid to late winter if the danger of
                                  frost has passed. The key thing to remember is
                                  that bare-root roses should go in the ground
                                  as soon as possible after you have acquired
                                  them and are typically sold when it is safe to
                                  plant them. Place your bare-root rose in a
                                  bucket of water for at least two hours to
                                  rehydrate the roots. Dig a hole that is at
                                  least 12 to 18 inches deep and 2 feet wide and
                                  place the plant in the center, spreading the
                                  roots evenly around. Fill in the hole with
                                  soil and compost, making sure the rootstock is
                                  below the surface of the soil and any grafted
                                  points (or bud unions) are at least 1 inch
                                  above the soil line in warm climates and 1
                                  inch below in cooler climates. Water the plant
                                  thoroughly around the base of the rose and add
                                  a layer of mulch to help keep the soil moist.
                                </p>
                              </div>
                            </li>
                            <li class="has-child expand">
                              <Link href="" class="icon-small">
                                Care Tips
                              </Link>
                              <ul class="content">
                                <li>
                                  <span>
                                    <i class="fa-solid fa-sun">
                                      <FaSun />
                                    </i>
                                  </span>{" "}
                                  <span>
                                    Roses perform best in full sun. This
                                    produces the largest and biggest number of
                                    blossoms while preventing any foliar
                                    diseases. However, English roses do well in
                                    part sun, particularly in warmer climates
                                    where sheltered afternoon sun keeps them
                                    cool during the heat of the day and also
                                    helps create the most intense fragrance.
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i class="fa-solid fa-droplet">
                                      <FaDropbox />
                                    </i>
                                  </span>{" "}
                                  <span>
                                    Roses require well-drained soil to thrive.
                                    If your ground has clay components or is
                                    packed tightly, loosen it up about a foot
                                    into your hole to improve drainage. Without
                                    proper drainage, the roots of your English
                                    rose are likely to become waterlogged and
                                    rot. Water your roses regularly to keep them
                                    healthy (at least once or twice a week in
                                    most regions). Most shrub-type and
                                    container-grown English roses will want
                                    about 1 to 2 inches (or approximately a
                                    gallon) with each watering, but go slow and
                                    allow the water to gradually soak in. Direct
                                    your water in a soft spray or trickle at the
                                    base of the plant to avoid getting leaves
                                    and buds wet, which can result in fungal
                                    diseases. Climbing varieties, new plants,
                                    and roses planted in sandy soil may need
                                    more frequent watering.
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i class="fa-solid fa-temperature-three-quarters">
                                      <FaTemperatureHigh />
                                    </i>
                                  </span>{" "}
                                  <span>
                                    Roses are fairly tolerant of wintery weather
                                    but could do with some extra
                                    care—particularly if you live in a cooler
                                    Zone. Let your roses go into dormancy in
                                    November and December and once freezing
                                    temperatures hit, build a mound of soil,
                                    compost, and leaves over the base of the
                                    plant to keep it uniformly cold, but
                                    protected from fluctuating temperatures.
                                    Come January and February, when temperatures
                                    are in the teens and twenties, you can give
                                    them a good prune (to about one-third their
                                    size), but wait to remove the mound until
                                    new growth begins in the spring.
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i class="fa-solid fa-seedling">
                                      <FaSeedling />
                                    </i>
                                  </span>{" "}
                                  <span>
                                    If your garden has rich soil or you
                                    regularly amend it with compost or other
                                    forms of organic matter, you may not need to
                                    feed your roses. That said, feeding your
                                    roses once or twice a year will encourage
                                    abundant flowering—especially if you are
                                    growing a reblooming variety. Give your
                                    roses some granular fertilizer at the
                                    beginning of the growing season and, for
                                    reblooming varieties, another dose after the
                                    first bloom cycle finishes. If you're
                                    growing roses in containers, use an
                                    all-purpose fertilizer, but be careful not
                                    to overfeed, which can be damaging to your
                                    plants.
                                  </span>
                                </li>
                              </ul>
                            </li>
                            <li class="has-child">
                              <Link href="" class="icon-small">
                                Reputable address to buy products
                              </Link>
                              <div class="content">
                                <Link href="https://www.google.com/maps/d/u/0/viewer?mid=1kTIgGEj-TIGEjP9SHy2ybyvKh00&hl=en_US&ll=10.836868000000008%2C106.74400100000003&z=17">
                                  Shop Link
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default PlantInfo;

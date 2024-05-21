import React from "react";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import HomeArticle from "../../components/HomeArticle/HomeArticle";
import HomeBlog from "../../components/HomeBlog/HomeBlog";

function HomePage() {
  return (
    <HomeLayout>
      <HomeSlider />
      <HomeArticle />
      <HomeBlog />
    </HomeLayout>
  );
}

export default HomePage;

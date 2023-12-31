import React from "react";
import Landing_Image from "../Sub_Components/Page1/Landing_Image";
import Categories from "../Sub_Components/Page1/Categories";
import Blog from "../Sub_Components/Page1/Blog";

const Home = ({ categories }) => {
  return (
    <div>
      <Landing_Image />
      <Categories categories={categories} />
      <Blog />
    </div>
  );
};

export default Home;

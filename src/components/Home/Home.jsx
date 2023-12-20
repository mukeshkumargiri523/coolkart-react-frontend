import Banner from "./Banner/Banner";
import HomeCategory from "./HomeCategory/HomeCategory";
import "./Home.scss";
import Products from "../Products/Products";
import { useContext, useEffect } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);
  useEffect(() => {
    getCategories();
    getProducts();
  }, []);
  const getProducts = () => {
    fetchDataFromApi(
      "/api/products?populate=*&pagiation[start]=0&pagination[limit]=50"
    ).then((res) => {
      setProducts(res?.data);
    });
  };
  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res?.data);
    });
  };
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <HomeCategory categories={categories} />
          <Products products={products} headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;

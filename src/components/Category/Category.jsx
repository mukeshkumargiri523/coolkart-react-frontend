import { useParams } from "react-router-dom";

import Products from "../Products/Products";
import "./Category.scss";
import useFetch from "../../hooks/useFetch";
const Category = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );
  return (
    <div className="main-category-content">
      <div className="layout">
        <div className="category-title">
          {data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes.title}
        </div>

        <Products innerPage={true} products={data?.data} />
      </div>
    </div>
  );
};

export default Category;

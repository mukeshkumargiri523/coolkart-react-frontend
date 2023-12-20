import useFetch from "../../../hooks/useFetch";
import Products from "../../Products/Products";

const RelatedProducts = ({ productId, categoryId }) => {
  const { data } = useFetch(
    `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagiation[start]=0&pagination[limit]=6`
  );
  return (
    <div>
      <Products headingText="Related Products" products={data?.data} />
    </div>
  );
};

export default RelatedProducts;

import "./SingleProduct.scss";
import {
  FaFacebookSquare,
  FaCartPlus,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../../utils/context";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const { handleAddToCart } = useContext(Context);
  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState !== 1) {
        return prevState - 1;
      } else {
        return prevState;
      }
    });
  };

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  if (!data) return;
  const product = data?.data[0]?.attributes;
  return (
    <div className="single-product-main-content">
      <div className="product-layout">
        <div className="single-product-content">
          <div className="left">
            <div className="name">{product.title}</div>
            <div className="price">₹ {product.price}</div>
            <div className="desc">{product.desc}</div>
            <div className="card-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span className="quantity-no">{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add-cart-button"
                onClick={() => {
                  handleAddToCart(data.data[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={30} />
                Add To Cart
              </button>
            </div>
            <span className="divider"></span>
            <div className="info-item">
              <span className="text-bold">
                Category:{" "}
                <span>{product.categories.data[0].attributes.title}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaInstagramSquare size={20} />
                  <FaFacebookSquare size={20} />
                  <FaTwitterSquare size={20} />
                  <FaPinterest size={20} />
                  <FaLinkedinIn size={20} />
                </span>
              </span>
            </div>
          </div>
          <div className="right">
            <img
              src={
                //  process.env.REACT_APP_API_URL +
                product?.image?.data[0]?.attributes.url
              }
              alt=""
            />
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={product.categories.data[0].id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;

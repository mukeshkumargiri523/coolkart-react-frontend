import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../../utils/context";
const CartItem = () => {
  const { cartItems, handleCartProductQuantity, handleRemoveFromCart } =
    useContext(Context);
  return (
    <div className="cart-products">
      {cartItems?.map((item) => {
        return (
          <div key={item.id} className="cart-product">
            <div className="img-container">
              <img
                src={
                  //  process.env.REACT_APP_API_URL +
                  item?.attributes?.image?.data[0].attributes.url
                }
                alt=""
              />
            </div>
            <div className="prod-details">
              <span className="name">{item.attributes.title}</span>
              <MdClose onClick={() => handleRemoveFromCart(item)} />
              <div className="quantity-buttons">
                <span onClick={() => handleCartProductQuantity(item, "dec")}>
                  -
                </span>
                <span className="quantity-no">{item.attributes.quantity}</span>
                <span onClick={() => handleCartProductQuantity(item, "inc")}>
                  +
                </span>
              </div>
              <div className="text">
                <span>{item?.attributes.quantity}</span>
                <span>x</span>
                <span className="cart-prod-price">
                  ₹ {item?.attributes.price * item.attributes.quantity}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;

import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import "./Cart.scss";
import CartItem from "./CartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../utils/context";

import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "../../utils/api";

const Cart = ({ setShowCart }) => {
  const { cartItems, cartSubtotal } = useContext(Context);

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {
        products: cartItems,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="cart-panel">
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <div className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">Close</span>
          </div>
        </div>
        {!cartItems?.length && (
          <div className="empty-cart">
            <BsCartX />
            <span>No Products in your cart</span>
            <button className="return-shop">RETURN TO SHOP</button>
          </div>
        )}

        {!!cartItems?.length && (
          <>
            <CartItem />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">₹ {cartSubtotal}</span>
              </div>
              <div className="checkout-cart">
                <div className="checkout-button" onClick={handlePayment}>
                  Checkout
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="opac-layer"></div>
    </div>
  );
};

export default Cart;

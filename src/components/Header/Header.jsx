import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { cartCount } = useContext(Context);
  const navigate = useNavigate();

  const handleScroll = () => {
    const offset = window.scrollY;
    offset > 200 ? setScrolled(true) : setScrolled(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : null}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            CoolKart <FaBagShopping />
          </div>
          <div className="right">
            <IoIosSearch onClick={() => setShowSearch(true)} />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <MdOutlineShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;

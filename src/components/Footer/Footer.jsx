import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payment-strip-image.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            A smartwatch is a wearable device that can perform various functions
            such as tracking fitness, displaying notifications, making calls,
            playing music, and more. Earbuds are small headphones that fit
            inside the ear canal and can be used to listen to audio wirelessly
            or with a cable.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="contact-items">
            <FaLocationArrow />
            <div className="text">
              Mukesh Kumar Giri Flat No. 152, Shardha Apartments MG Road
              Bengaluru - 560001 Karnataka
            </div>
          </div>
          <div className="contact-items">
            <FaMobileAlt />
            <div className="text">0627-652-5444</div>
          </div>
          <div className="contact-items">
            <FaEnvelope />
            <div className="text">Email:mukeshkumargiri@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <div className="text">Home</div>
          <div className="text">About Us</div>
          <div className="text">Contact Us</div>
          <div className="text">Terms & Conditions</div>
          <div className="text">Returns</div>
          <div className="text">Privacy Policy</div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <div className="text">SmartWatch</div>
          <div className="text">Earbuds</div>
          <div className="text">Bluetooth Speaker</div>
          <div className="text">Home Theater</div>
          <div className="text">Headphones</div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            COOLKART 2023 CREATED BY Mukesh Giri. Smart Gadgets E-Commerce Site.
          </div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

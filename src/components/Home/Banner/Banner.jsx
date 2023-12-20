import "./Banner.scss";
import BannerImg from "../../../assets/banner_image_1.png";
import SaleImg from "../../../assets/coolkart_sale1.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <img className="banner-img" src={BannerImg} alt="" />
        <div className="text-content">
          <h1>
            SALES IS LIVE <span>LIVE</span>
          </h1>
          <div className="sale-text">
            <img src={SaleImg} alt="" />
          </div>
          <h3>Wear More Live More</h3>
          <p>
            Go Limitless With The Collection Of Smart Watches, Speaker, Earbuds,
            Headphone Men And Women
          </p>
          <div className="banner-list">
            <div className="banner-btn">Read More</div>
            <div className="banner-btn b2">Shop Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

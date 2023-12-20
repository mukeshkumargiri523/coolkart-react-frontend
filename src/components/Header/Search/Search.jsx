import "./Search.scss";
import { MdClose } from "react-icons/md";
import prodImg from "../../../assets/products/headphone-prod-4.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );
  if (query?.length === 0) {
    data = null;
  }
  return (
    <div className="search-container">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search for Products"
          value={query}
          onChange={handleChange}
        />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="serach-reasult-container">
        <div className="search-results">
          {data?.data?.map((item) => {
            return (
              <div
                key={item.id}
                className="search-result-item"
                onClick={() => {
                  navigate("/product/" + item.id);
                  setShowSearch(false);
                }}
              >
                <div className="img-container">
                  <img
                    src={
                      // process.env.REACT_APP_API_URL +
                      item?.attributes?.image?.data[0].attributes.url
                    }
                    alt=""
                  />
                </div>
                <div className="prod-details">
                  <span className="name">{item?.attributes.title}</span>
                  <span className="desc">{item?.attributes.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;

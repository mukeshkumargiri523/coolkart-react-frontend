import "./HomeCategory.scss";
import { useNavigate } from "react-router-dom";
const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="category-container">
      <div className="categories">
        {categories?.map((item) => {
          return (
            <div
              key={item.id}
              className="category"
              onClick={() => navigate(`/category/${item.id}`)}
            >
              <img
                src={
                  //   process.env.REACT_APP_API_URL+
                  item.attributes.image.data[0]?.attributes?.url
                  // item.attributes.image.data.attributes?.url
                }
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;

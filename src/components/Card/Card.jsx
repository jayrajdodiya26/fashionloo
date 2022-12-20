import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item, id }) => {
  return (
    <Link className="link" to={`/product/${id}`}>
      <div className="card">
        <div className="image">
          {item.isNew && <span>New Season</span>}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item?.img?.data?.attributes?.formats?.large?.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item?.img2?.data?.attributes?.formats?.large?.url
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item.title}</h2>{" "}
        <div className="prices">
          <h3>${item.oldPrice || item.price + 30}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;

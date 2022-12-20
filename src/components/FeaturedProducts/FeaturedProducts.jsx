import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  // const data = [
  //   {
  //     id: 1,

  //     img: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     img2: "https://images.pexels.com/photos/2388236/pexels-photo-2388236.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     title: "Skirt",
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 2,

  //     img: "https://images.pexels.com/photos/14342044/pexels-photo-14342044.png?auto=compress&cs=tinysrgb&w=1600",
  //     img2: "https://images.pexels.com/photos/14342044/pexels-photo-14342044.png?auto=compress&cs=tinysrgb&w=1600",
  //     title: "Cool Jackets",
  //     // isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 3,

  //     img: "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     img2: "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     title: "Summer Collection",
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 4,

  //     img: "https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     img2: "https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     title: "One Piece Suit",

  //     oldPrice: 19,
  //     price: 12,
  //   },
  // ];

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>Welcome to fashion loo, home of fashion</p>
      </div>
      <div className="bottom">
        {error
          ? "something went wrong"
          : loading
          ? "loading"
          : data?.map((item) => (
              <Card item={item.attributes} key={item.id} id={item.id} />
            ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

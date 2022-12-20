import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./List.scss";

const List = ({ subCats, maxPrice, sort, catId }) => {
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
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  //  const { data, loading, error } = useFetch(`/products?populate=*`);

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => (
            <Card item={item.attributes} key={item.id} id={item.id} />
          ))}
    </div>
  );
};

export default List;

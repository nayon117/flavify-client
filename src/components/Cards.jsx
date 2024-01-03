/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  const [isHeartFilted, setIsHeartFilted] = useState(false)

    const handleHeartClick = () => {
     setIsHeartFilted(!isHeartFilted)
 }

  return (
    <div className="card bg-base-100 shadow-xl">
      <Link to={`/menu/${item._id}`}>
        <figure>
          <img
            src={item.image}
            alt="food"
            className="hover:scale-105 transition-all duration-200 md:h-72"
          />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>Description of the item</p>
        <div className="card-actions mt-3 flex justify-between items-center">
          <h5 className="font-semibold">$ {item.price}</h5>
          <button className="btn bg-green text-white">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export default Cards;

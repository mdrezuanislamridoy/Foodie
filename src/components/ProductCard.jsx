import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ image, title, oldPrice, newPrice }) => {
  return (
    <div className="border rounded-lg p-4 text-center">
      <img
        src={image}
        alt={title}
        className="mx-auto rounded-full mb-4 w-24 h-24"
      />
      <div className="mb-2 text-green-600">
        {[...Array(5)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} />
        ))}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-gray-400 line-through">${oldPrice}</span>
        <span className="text-green-600 ml-2">${newPrice}</span>
      </div>
      <button className="border-2 border-green-600 text-green-600 font-bold py-2 px-4 rounded-lg inline-flex items-center hover:bg-green-600 hover:text-white transition duration-300">
        Buy Now <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
      </button>
    </div>
  );
};

export default ProductCard;

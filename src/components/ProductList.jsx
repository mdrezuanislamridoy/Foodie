import React from "react";
import ProductCard from "./ProductCard";
import Banana from "../assets/banana.png";
import Orange from "../assets/orange.png";
import papaya from "../assets/papaya.png";
import nut from "../assets/nut.png";

const products = [
  {
    image: Banana,
    title: "Summer Veganie",
    oldPrice: 25,
    newPrice: 29,
  },
  {
    image: Orange,
    title: "Greanie Seafood",
    oldPrice: 25,
    newPrice: 29,
  },
  {
    image: papaya,
    title: "Fresh Vegetable",
    oldPrice: 25,
    newPrice: 29,
  },
  {
    image: nut,
    title: "Fresh Meatyus",
    oldPrice: 25,
    newPrice: 29,
  },
];

const ProductList = () => {
  return (
    <div className="w-999 mx-auto text-center">
      <p className="text-gray-500">Our Product</p>
      <h2 className="text-4xl font-semibold mb-8">Most Popular Product</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            oldPrice={product.oldPrice}
            newPrice={product.newPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

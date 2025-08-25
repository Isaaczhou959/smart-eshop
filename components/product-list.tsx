"use client";

import Stripe from "stripe";
import { ProductCard } from "./product-card";
import { useState } from "react";

interface Props {
  products: Stripe.Product[];
}
export const Productlist = ({ products }: Props) => {
  const [searchUserInput, setSearchUserInput] = useState<string>("");
  const filteredProduct = products.filter((product) => {
    const userInput = searchUserInput.toLowerCase();
    const inputMatch = product.name.toLowerCase().includes(userInput);
    const descriptionMatch = product.description
      ? product.description.toLowerCase().includes(userInput)
      : false;
    return inputMatch || descriptionMatch;
  });
  return (
    <div>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          onChange={(e) => setSearchUserInput(e.target.value)}
          value={searchUserInput}
          placeholder="Search products..."
          className="w-full max-w-md rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProduct.map((product, key) => {
          return (
            <li key={key}>
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

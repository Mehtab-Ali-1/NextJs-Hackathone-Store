// components/newArrival.tsx

import Card1 from "@/components/newArrival";
import React from "react";
import Link from "next/link";

const ArivalProducts = [
  {
    title: "T-Shirt",
    imageUrl: "/shirt1.png",
    price: 120.0,
    discountPrice: 89.99,
    rating: 4.5,
  },
  {
    title: "Pant",
    imageUrl: "/pant1.png",
    price: 50.0,
    discountPrice: 35.99,
    rating: 3.8,
  },
  {
    title: "Shirt",
    imageUrl: "/shirt2.png",
    price: 150.0,
    discountPrice: 129.99,
    rating: 4.2,
  },
  {
    title: "Sleeve Stripted T-Shirt",
    imageUrl: "/shirt3.png",
    price: 160.0,
    discountPrice: 130,
    rating: 4.5/5,
  },
];

const Products: React.FC = () => {
  return (
    <div className="container mx-auto p-4 lg:mt-8 mt-4">
      <h2 className="text-2xl font-black text-gray-800 text-center mb-8">Our Best Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {ArivalProducts.map((product, index) => (
          <Card1 key={index} {...product} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-3 md:mt-6">
        <Link href="" className=" border border-gray-800 px-8 py-3 hover:bg-gray-900 hover:text-white rounded-lg">View All</Link>
      </div>
    </div>
  );
};

export default Products;

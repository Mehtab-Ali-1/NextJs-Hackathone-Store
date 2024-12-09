// components/productList.tsx
import Card2 from "@/components/productList";
import { Button } from "@/components/ui/button";
import React from "react";

const ProductsLists = [
  {
    title: "Vertical Stripted Shirt",
    imageUrl: "/pic12.png", 
    price: 232,
    discountPrice: 312,
    rating: 5.0/5,
  },
  {
    title: "Courage Graphic T-Shirt",
    imageUrl: "/pic22.png",
    price: 0,
    discountPrice: 145,
    rating: 4.0/5,
  },
  {
    title: "Loose Fit Bermuda Shorts",
    imageUrl: "/pic32.png",  
    price: 85,
    discountPrice: 80,
    rating: 3.0/5,
  },
  {
    title: "Faded Skinny Jeans",
    imageUrl: "/pic42.png", 
    price: 0,
    discountPrice: 210,
    rating: 4.5/5,
  },
];

const ProductsList: React.FC = () => {
  return (
    <div className="container mx-auto p-4 lg:mt-8 mt-4">
      <h2 className="text-2xl  text-gray-800 text-center mb-8 font-black">TOP SELLING </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {ProductsLists.map((product, index) => (
          <Card2 key={index} {...product} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-3 md:mt-6">
        <Button className=" border border-gray-800 px-8 py-3 hover:bg-gray-900 hover:text-white rounded-lg">View All</Button>
      </div>
    </div>
  );
};

export default ProductsList;

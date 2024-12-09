// app/product-list/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaRegStar } from "react-icons/fa";

type CardProps = {
  title: string;
  imageUrl: string;
  price: number;
  discountPrice: number;
  rating: number;
//   description: string;
};

const Card2: React.FC<CardProps> = ({ title, imageUrl, price, discountPrice, rating }) => {
  const totalStars = 5;
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  
  return (
    <div className="flex flex-col justify-start items-center w-full max-w-xs bg-white rounded-lg overflow-hidden">
      <Image src={imageUrl} alt={title} width={200} height={200} className="w-full h-64 object-cover rounded-lg" />
      
      <div className="p-4">
        <h3 className="md:text-lg text-sm font-semibold text-gray-800 text-nowrap">{title}</h3>
        {/* Star Rating */}
        <div className="flex mt-2">
          {Array.from({ length: totalStars }).map((_, index) => (
            <span key={index}>
              {index < filledStars ? (
                <FaStar className="text-yellow-400" />
              ) : index === filledStars && halfStar ? (
                <FaStar className="text-yellow-400" />
              ) : (
                <FaRegStar className="text-gray-300" />
              )}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="mt-2 flex items-center">
          <span className="text-xl font-semibold text-gray-800">${discountPrice}</span>
          <span className="line-through text-sm text-gray-500 ml-2">${price}</span>
        </div>

        {/* Add to Cart Button */}
        <Link href="/product-card" className="flex justify-center items-center my-7 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ">
          Add to Cart
        </Link>
      </div>
      {/* -------------------------------------------------- */}
      

      
    </div>
  );
};

export default Card2;

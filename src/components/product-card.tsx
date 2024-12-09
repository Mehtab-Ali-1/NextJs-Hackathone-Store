"use client"
import { useState } from "react";
import Image from "next/image";
import { MinusIcon, PlusIcon, StarIcon } from 'lucide-react';
import { cn } from "@/lib/utils";

interface ProductColor {
  name: string
  class: string
}

interface ProductSize {
  name: string
  label: string
}

const colors: ProductColor[] = [
  { name: "Olive", class: "bg-olive-800" },
  { name: "Black", class: "bg-black" },
  { name: "Navy", class: "bg-navy-800" },
]

const sizes: ProductSize[] = [
  { name: "small", label: "Small" },
  { name: "medium", label: "Medium" },
  { name: "large", label: "Large" },
  { name: "xlarge", label: "X-Large" },
]

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [selectedSize, setSelectedSize] = useState(sizes[2])
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 my-20">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Product Images */}
        <div className="relative">
          <div className="sticky top-0 flex gap-4">
            {/* Thumbnails */}
            <div className="hidden flex-col gap-4 lg:flex">
              {images.map((src, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "relative h-20 w-20 overflow-hidden rounded border",
                    selectedImage === index
                      ? "border-black"
                      : "border-gray-200"
                  )}
                >
                  <Image
                    src="/pic12.png"         // {src}
                    alt={`Product image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            {/* Main Image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
              <Image
                src="/pic12.png"                      //   {images[selectedImage]}
                alt="Main product image"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold md:text-3xl">
              ONE LIFE GRAPHIC T-SHIRT
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={cn(
                      "h-5 w-5",
                      i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-200"
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">4.66</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold">$260</span>
              <span className="text-lg text-gray-500 line-through">$300</span>
              <span className="rounded bg-red-100 px-2 py-1 text-sm font-medium text-red-600">
                -40%
              </span>
            </div>
            <p className="text-gray-600">
              This graphic t-shirt which is perfect for any occasion. Crafted from
              a soft and breathable fabric, it offers superior comfort and style.
            </p>
          </div>

          {/* Color Selection */}
          <div className="space-y-4">
            <span className="text-sm font-medium">Select Color</span>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={cn(
                    "h-8 w-8 rounded-full",
                    color.class,
                    selectedColor.name === color.name
                      ? "ring-2 ring-black ring-offset-2"
                      : ""
                  )}
                >
                  <span className="sr-only">{color.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="space-y-4">
            <span className="text-sm font-medium">Choose Size</span>
            <div className="flex md:flex-wrap gap-2 flex-nowrap ">
              {sizes.map((size) => (
                <button
                  key={size.name}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "border md:px-6 px-4 py-2 rounded-full",
                    selectedSize.name === size.name
                      ? "border-black bg-black text-white"
                      : "border-gray-200 hover:border-black"
                  )}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex items-center">
              <div
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="flex h-12 w-12 items-center justify-center rounded-l border border-r-0 border-gray-200 hover:bg-gray-50"
              >
                <MinusIcon className="h-4 w-4" />
              </div>
              <div className="flex h-12 w-12 items-center justify-center border border-gray-200 text-center">
                {quantity}
              </div>
              <div
                onClick={() => setQuantity(quantity + 1)}
                className="flex h-12 w-12 items-center justify-center rounded-r border border-l-0 border-gray-200 hover:bg-gray-50"
              >
                <PlusIcon className="h-4 w-4" />
              </div>
            </div>
            <button className="flex-1 rounded-md bg-black px-8 py-3 text-lg font-medium text-white hover:bg-black/90">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


import {ProductCard} from "@/components/productCard11"
import {FilterSidebar} from "@/components/filterSideBar"

const products = [
  {
    id: "1",
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 4,
    image: "/pic12.png",
  },
  {
    id: "2",
    name: "Polo with Tipping Details",
    price: 180,
    rating: 5,
    image: "/pic32.png",
  },
  {
    id: "3",
    name: "Black Striped T-shirt",
    price: 120,
    originalPrice: 150,
    rating: 4,
    onSale: true,
    image: "/pic22.png",
  },
  {
    id: "4",
    name: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    rating: 3,
    onSale: true,
    image: "/pic42.png",
  },
  {
    id: "5",
    name: "Checkered Shirt",
    price: 180,
    rating: 4,
    image: "/pant1.png",
  },
  {
    id: "6",
    name: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 150,
    rating: 5,
    onSale: true,
    image: "/shirt1.png",
  },
  {
    id: "7",
    name: "Vertical Striped Shirt",
    price: 212,
    originalPrice: 232,
    rating: 4,
    onSale: true,
    image: "/shirt2.png",
  },
  {
    id: "8",
    name: "Courage Graphic T-shirt",
    price: 145,
    rating: 3,
    image: "/shirt3.png",
  },
  {
    id: "9",
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    rating: 4,
    image: "/pant1.png",
  },
]

export default function CasualPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Casual</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Showing 258 of 2,563 Products</span>
          <select className="border rounded-md px-3 py-2 text-sm">
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
      
      <div className="flex max-md:flex-col gap-8">
        <FilterSidebar />
        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


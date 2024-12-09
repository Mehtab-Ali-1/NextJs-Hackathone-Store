const sizes = ["XS", "S", "M", "L", "XL", "2XL"]

export function SizeFilter() {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-900">Size</h3>
      <div className="grid grid-cols-3 gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            className="px-3 py-2 text-sm border rounded hover:bg-gray-50"
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}


interface ColorOption {
    name: string
    class: string
  }
  
  const colors: ColorOption[] = [
    { name: "Blue", class: "bg-blue-500" },
    { name: "Red", class: "bg-red-500" },
    { name: "Green", class: "bg-green-500" },
    { name: "Purple", class: "bg-purple-500" },
    { name: "Pink", class: "bg-pink-500" },
    { name: "Orange", class: "bg-orange-500" },
    { name: "Yellow", class: "bg-yellow-500" },
    { name: "Black", class: "bg-black" },
  ]
  
  export function ColorFilter() {
    return (
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-900">Colors</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color.name}
              className={`h-6 w-6 rounded-full ${color.class} ring-2 ring-offset-2 ring-transparent hover:ring-gray-300 focus:outline-none focus:ring-gray-300`}
              title={color.name}
            />
          ))}
        </div>
      </div>
    )
  }
  
  
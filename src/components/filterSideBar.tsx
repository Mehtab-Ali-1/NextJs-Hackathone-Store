
import { Slider } from "@radix-ui/react-slider"
import { ColorFilter } from "./colorFilter"
import { SizeFilter } from "./sizeFilter"

export function FilterSidebar() {
  return (
    <div className="w-64 space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <ul className="space-y-2 text-sm">
          <li>T-Shirts</li>
          <li>Jeans</li>
          <li>Shirts</li>
          <li>Shorts</li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Price</h3>
        <Slider defaultValue={[0, 100]} max={500} step={1} className="w-full" />
      </div>

      <ColorFilter />

      <SizeFilter />

      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Dress Style</h3>
        <div className="space-y-2">
          {["Casual", "Formal", "Party", "Gym"].map((style) => (
            <label key={style} className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 mr-2" />
              <span className="text-sm">{style}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}


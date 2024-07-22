import { useEffect, useState } from "react"
import { Category } from "./adapters/category.adapter"
import useCategories from "./hooks/useCategories"

export default function NavBarFood() {
  const { categories, loading, error } = useCategories()

  const [active, setActive] = useState<number | null>()

  useEffect(() => {
    if (categories.length > 0) {
      setActive(categories[0].id)
    }
  }, [categories])

  const handleActive = (id: number) => {
    setActive(id)
  }

  return (
    <nav>
      <ul className="w-full flex border-b-2 border-stroke">
        {
          loading
            ? <li>Loading...</li>
            : error
              ? <li>Error</li>
              :
              categories.map((category: Category) => (
                <li
                  key={category.id}
                  className={`capitalize font-semibold text-xl border-b-2 pb-4 px-4 transition-all cursor-pointer  ${active === category.id ? "text-primary border-primary" : "border-bg-100"}`}
                  onClick={() => handleActive(category.id)}
                >
                  {category.name}
                </li>
              ))
        }
      </ul>
    </nav>
  )
}


import { useEffect, useState } from "react"
import { ItemCategory } from "../../../../../models/ItemCategory.model"

interface ListCategoryProps {
  itemCategories: ItemCategory[]
}


export default function ListItemCategory({ itemCategories }: ListCategoryProps) {
  const [active, setActive] = useState<number | null>()

  useEffect(() => {
    if (itemCategories.length > 0) {
      setActive(itemCategories[0].id)
    }
  }, [itemCategories])

  const handleActive = (id: number) => {
    setActive(id)
  }

  return (
    <>
      {itemCategories.map((category: ItemCategory) => (
        <li
          key={category.id}
          className={`capitalize font-semibold text-xl border-b-2 pb-4 px-4 transition-all cursor-pointer  ${active === category.id ? "text-primary border-primary" : "border-bg-100"}`}
          onClick={() => handleActive(category.id)}
        >
          {category.name}
        </li>
      ))}
    </>
  )
}


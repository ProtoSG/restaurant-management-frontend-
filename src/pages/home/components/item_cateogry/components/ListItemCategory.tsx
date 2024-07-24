import { useEffect, useState } from "react"
import { ItemCategory } from "../../../../../models/ItemCategory.model"
import { useItemCategoryId } from "../../../hooks/useItemCategoryId"

interface ListCategoryProps {
  itemCategories: ItemCategory[]
}

export default function ListItemCategory({ itemCategories }: ListCategoryProps) {
  const idItemCategory = useItemCategoryId(state => state.id)
  const setId = useItemCategoryId(state => state.setId)

  useEffect(() => {
    if (itemCategories.length > 0) {
      setId(itemCategories[0].id)
    }
  }, [itemCategories])

  const handleActive = (id: number) => {
    setId(id)
  }

  return (
    <>
      {itemCategories.map((category: ItemCategory) => (
        <li
          key={category.id}
          className={`capitalize font-semibold text-xl border-b-2 pb-4 px-4 transition-all cursor-pointer  ${idItemCategory === category.id ? "text-primary border-primary" : "border-bg-100"}`}
          onClick={() => handleActive(category.id)}
        >
          {category.name}
        </li>
      ))}
    </>
  )
}


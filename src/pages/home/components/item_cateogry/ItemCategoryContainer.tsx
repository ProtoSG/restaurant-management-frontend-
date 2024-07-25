import ErrorItemCategory from "./components/ErrorItemCategory"
import ListItemCategory from "./components/ListItemCategory"
import LoadingItemCategory from "./components/LoadingItemCategory"
import useItemCategories from "./hooks/useItemCategories"

export default function ItemCategoryContainer() {
  const { itemCategories, loading, error } = useItemCategories()
  return (
    <nav>
      <ul className="w-full flex border-b-2 border-stroke">
        {
          loading ? <LoadingItemCategory />
            : error ? <ErrorItemCategory />
              : itemCategories.length > 0
                ? <ListItemCategory itemCategories={itemCategories} />
                : <p className="text-center text-sm text-text">No hay categorías</p>
        }
      </ul>
    </nav>
  )
}


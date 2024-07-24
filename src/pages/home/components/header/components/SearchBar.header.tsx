import { useState } from "react";
import IconSearch from "../../../../../assets/icons/IconSearch";
import useInventory from "../../inventory/hooks/useInventory";
import { useSearchDish } from "../../../hooks/useSearchItem";

export default function SearchBar() {
  const { inventory } = useInventory()
  const setInventories = useSearchDish(state => state.setInvetories)

  const handleChange = (event: any) => {
    const value = event.target.value
    if (value === "") {
      setInventories([])
    } else {

      const inventoriesFilter = inventory.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
      setInventories(inventoriesFilter)
    }
  }

  return (
    <div className="flex items-center justify-center">
      <label className="bg-bg-300 border-[1px] border-stroke flex items-center gap-1 px-2 rounded-lg py-1">
        <IconSearch />
        <input
          className="bg-bg-300 px-2 py-2 focus:outline-none"
          type="text"
          placeholder="Buscar por comida, beb...."
          onChange={handleChange}
        />
      </label>
    </div>
  )
}


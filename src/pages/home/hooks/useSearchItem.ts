import { create } from "zustand";
import { Inventory } from "../../../models/Inventory.model";

interface useSearchDishProps {
  inventories: Inventory[],
  setInvetories: (newDishes: Inventory[]) => void
}

export const useSearchDish = create<useSearchDishProps>((set) => ({
  inventories: [],
  setInvetories: (newDishes: Inventory[]) => set({ inventories: newDishes }),
}))

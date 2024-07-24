import { create } from "zustand";
import { ItemCategoryId } from "./useItemCategoryId";

export const useTableCategoryId = create<ItemCategoryId>((set) => ({
  id: 0,
  setId: (newId: number) => set({ id: newId })
}))

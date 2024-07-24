import { create } from 'zustand'

export type ItemCategoryId = {
  id: number;
  setId: (newId: number) => void
}

export const useItemCategoryId = create<ItemCategoryId>((set) => ({
  id: 0,
  setId: (newId: number) => set({ id: newId })
}))

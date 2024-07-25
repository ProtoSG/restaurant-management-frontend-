import { create } from 'zustand'

export type ItemCategoryId = {
  id: number;
  setId: (newId: number) => void

  value: string;
  setValue: (newValue: string) => void
}

export const useItemCategoryId = create<ItemCategoryId>((set) => ({
  id: 0,
  setId: (newId: number) => set({ id: newId }),

  value: "",
  setValue: (newValue: string) => set({ value: newValue }),
}))

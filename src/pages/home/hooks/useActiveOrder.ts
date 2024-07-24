import { create } from "zustand";

interface ActiveOrderProps {
  activeOrder: boolean,
  setActiveOrder: () => void,

  orderId: number,
  setOrderId: (id: number) => void
}

export const useActiveOrder = create<ActiveOrderProps>((set) => ({
  activeOrder: false,
  setActiveOrder: () => set((state) => ({ activeOrder: !state.activeOrder })),

  orderId: 0,
  setOrderId: (id: number) => set({ orderId: id })
}))

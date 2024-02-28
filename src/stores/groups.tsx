import { create } from 'zustand'

interface OpenMenuStore {
  openMenu: boolean[]
  toggleMenu: (index: number) => void
  resetMenu: () => void
}

export const useOpenStatesStore = create<OpenMenuStore>((set) => ({
  openMenu: [],
  toggleMenu: (index: number) => {
    set((state) => {
      const newOpenStates = [...state.openMenu]
      newOpenStates[index] = !newOpenStates[index]
      return { openMenu: newOpenStates }
    })
  },
  resetMenu: () => set({ openMenu: [] }),
}))

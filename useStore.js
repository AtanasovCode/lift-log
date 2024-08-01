import { create } from 'zustand'

const useStore = create((set) => ({
  theme: "night",
  changeTheme: (theme) => set({ theme })
}))

export { useStore };
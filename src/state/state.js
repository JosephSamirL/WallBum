import create from 'zustand'
export const useStore = create((set) => ({
    theme: true,
    setTheme: (inp) => set((state) => ({ theme: inp })),
  }));
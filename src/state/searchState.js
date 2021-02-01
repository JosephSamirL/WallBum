import create from 'zustand'
export const useSearch = create((set) => ({
    search: "cat",
    setSearch: (inp) => set((state) => ({ search: inp })),
    image: {},
    setImage: (inp)=>set((state)=>({image:inp}))
    
    
  }));
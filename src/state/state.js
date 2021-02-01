import create from 'zustand'
export const useStore = create((set) => ({
    theme: true,
    setTheme: (inp) => set((state) => ({ theme: inp })),
    page: 1,
    setPage: (inp)=> set((state)=>({page: inp})),
    img: [],
    setImg:(inp)=> set((state)=>({img:inp})),
    anime: true,
    setAnime: (inp)=>set((state)=>({anime: inp}))
  }));
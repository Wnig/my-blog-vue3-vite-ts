import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () =>({
    visitors: 0,
    totalVis: 0,
  }),
  getters: {
    
  },
  actions: {
    
  },
})
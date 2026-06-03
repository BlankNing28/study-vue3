import { defineStore } from 'pinia'


const useCount = defineStore('count', {
  state: () => {
    return {
      count: 0,
      name: 'Eduardo',
      isAdmin: true,
      items: [],
      hasChanged: true,
    }
  },
  actions: {
    increment(value){
        console.log(value)
        this.count += value
    }
  },
  getters: {
    bigSum: state => state.count * 10
  }
})

export default useCount
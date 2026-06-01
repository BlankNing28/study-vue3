import { ref } from 'vue'

export const useDogs = () => {
    const dogList = ref(['柯基', '边牧'])

    const changedong = () => {
        dogList.value.push('金毛')
    }

    return {dogList, changedong }
}
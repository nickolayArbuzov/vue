import axios from "axios";
import {ref, onMounted} from 'vue';

export function usePositions(limit) {
    const positions = ref([])
    const isPositionsLoading = ref(true)
    const fetching = async () => {
        try {
            const response = await axios.get('https://www.nbrb.by/api/exrates/currencies', {
                params: {
                }
            });
            positions.value = response.data;
        } catch (e) {
            alert('Ошибка')
        } finally {
            isPositionsLoading.value = false;
        }
    }

    onMounted(fetching)

    return {
        positions, isPositionsLoading
    }
}

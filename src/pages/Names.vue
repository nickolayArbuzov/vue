<template>
  <div>
    <h1>Страница с названиями валют</h1>
    <my-input v-model="searchQuery" placeholder="Поиск...." v-focus/>
    <position-list v-if="!isPositionsLoading"/>
    <div v-else>Идет загрузка...</div>
    <div v-intersection="loadMorePositions" class="observer"></div>
  </div>
</template>

<script>
import PositionList from "@/components/PositionList";
import MyButton from "@/components/UI/MyButton";
import axios from 'axios';
import MyInput from "@/components/UI/MyInput";

export default {
  components: {
    MyInput,
    MyButton,
    PositionList, 
  },
  data() {
    return {
      positions: [],
      isPositionsLoading: false,
    }
  },
  methods: {
    async fetchPositions() {
      try {
        this.isPositionsLoading = true;
        const response = await axios.get('https://www.nbrb.by/api/exrates/currencies', {
          params: {
          }
        });
        this.positions = response.data;
      } catch (e) {
        alert('Ошибка')
      } finally {
        this.isPositionsLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPositions();
  },
}
</script>

<style>

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 2px solid teal;
}

.observer {
  height: 30px;
}
</style>

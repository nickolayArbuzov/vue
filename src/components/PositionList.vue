<template>
    <h3>Список позиций</h3>
      <position-item v-for="position in positions" :position="position" :key="position.Cur_ID"/>
</template>

<script>
import PositionItem from "@/components/PositionItem";
export default {
  components: {PositionItem},
  props: {
    positions: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>

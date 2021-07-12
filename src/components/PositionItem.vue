<template>
  <div class="position">
    <div>
      <div>{{ position }}</div>
      <div><strong>Название:</strong> {{ position }}</div>
      <div><strong>Описание:</strong> {{ position }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.position {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

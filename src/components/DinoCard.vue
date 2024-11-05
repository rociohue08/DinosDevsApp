<template>
  <div class="dino-card">
    <h2>{{ dino.name }}</h2>
    <p>{{ dino.description }}</p>
    <img :src="dino.image" alt="Imagen de {{ dino.name }}" />
  </div>
</template>

<script setup>
defineProps(['dino'])
</script>

<style scoped>
.dino-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px;
}
</style>

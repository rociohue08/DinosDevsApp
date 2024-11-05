<!-- src/views/Informacion.vue -->
<template>
  <div>
    <h2>Información de Dinosaurios</h2>
    <DinoCard v-for="dino in dinosaurios" :key="dino.id" :dino="dino" />
  </div>
</template>

<script>
import DinoCard from '@/components/DinoCard.vue'
import dinosaurios from '@/data/dinosaurios.json'

export default {
  components: { DinoCard },
  data() {
    return {
      dinosaurios,
    }
  },
}
</script>

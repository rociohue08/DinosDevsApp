<template>
  <div class="dino-info">
    <h2>Información de Dinosaurios</h2>
    <div class="dino-grid">
      <DinoCard v-for="dino in dinosaurios" :key="dino.nombreCientifico" :dino="dino" />
    </div>
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

<style scoped>
/* Estilo principal */
.dino-info {
  background-color: #2e4d3d; /* Fondo verde oscuro tipo selva */
  color: #f0ead2; /* Texto color arena */
  padding: 20px;
  border-radius: 8px;
  font-family: 'Georgia', serif;
}

h2 {
  text-align: center;
  font-size: 2rem;
  color: #d4c9a1; /* Color arena */
  margin-bottom: 20px;
}

/* Estilo para la cuadrícula */
.dino-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 16px;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .dino-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .dino-grid {
    grid-template-columns: 1fr;
  }
}
</style>

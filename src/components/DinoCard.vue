<template>
  <div class="dino-card">
    <h2>{{ dino.nombreComun }} ({{ dino.nombreCientifico }})</h2>
    <img :src="dino.image" alt="Imagen de {{ dino.nombreComun }}" />
    <p><strong>Tipo de Alimentación:</strong> {{ dino.tipoAlimentacion }}</p>
    <p><strong>Periodo:</strong> {{ dino.periodo }}</p>
    <p><strong>Tamaño:</strong> {{ dino.tamano }}</p>
    <p><strong>Peso:</strong> {{ dino.peso }}</p>
    <p><strong>Ubicación Geográfica:</strong> {{ dino.ubicacionGeografica }}</p>
    <p><strong>Curiosidades:</strong> {{ dino.curiosidades }}</p>
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
  width: 300px;
  text-align: center;
}

.dino-card img {
  max-width: 100%;
  height: auto;
  margin-bottom: 8px;
}
</style>

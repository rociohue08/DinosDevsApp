<template>
  <div class="dino-card">
<<<<<<< HEAD
    <h2>{{ dino.nombreComun }} ({{ dino.nombreCientifico }})</h2>
    <img :src="dino.image" alt="Imagen de {{ dino.nombreComun }}" />
    <p><strong>Tipo de Alimentación:</strong> {{ dino.tipoAlimentacion }}</p>
    <p><strong>Periodo:</strong> {{ dino.periodo }}</p>
    <p><strong>Tamaño:</strong> {{ dino.tamano }}</p>
    <p><strong>Peso:</strong> {{ dino.peso }}</p>
    <p><strong>Ubicación Geográfica:</strong> {{ dino.ubicacionGeografica }}</p>
    <p><strong>Curiosidades:</strong> {{ dino.curiosidades }}</p>
=======
    <h2>{{ dino.name }}</h2>
    <p>{{ dino.description }}</p>
    <img :src="dino.image" alt="Imagen de {{ dino.name }}" />
>>>>>>> 76a4494177e8c86dceca107c080705cf4c606608
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
<<<<<<< HEAD
  width: 300px;
  text-align: center;
}

.dino-card img {
  max-width: 100%;
  height: auto;
  margin-bottom: 8px;
=======
>>>>>>> 76a4494177e8c86dceca107c080705cf4c606608
}
</style>

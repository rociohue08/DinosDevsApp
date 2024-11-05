<!-- src/views/RealidadAumentada.vue -->
<template>
  <a-scene embedded arjs>
    <a-marker preset="hiro">
      <a-entity
        gltf-model="#dinoModel"
        scale="0.1 0.1 0.1"
        position="0 0 0"
      ></a-entity>
    </a-marker>
    <a-entity camera></a-entity>
  </a-scene>
</template>

<script>
export default {
  mounted() {
    // Configuración adicional si es necesario
  },
}
</script>

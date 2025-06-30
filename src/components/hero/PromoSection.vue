<script setup lang="ts">
// 1. Props simplificadas: solo necesitamos la imagen
defineProps({
  imageSrc: { type: String, required: true },
  imageAlt: { type: String, default: 'Imagen decorativa con borde curvo' },
});
</script>

<template>
  <section class="curved-image-section">
    <img :src="imageSrc" :alt="imageAlt" class="background-image" />
    
    <div class="curve-shape">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
      </svg>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

.curved-image-section {
  position: relative; // Contenedor principal
  line-height: 0; // Evita espacios extra
}

.background-image {
  display: block;
  width: 100%;
  height: 50vh; // Altura de la imagen, puedes ajustarla
  min-height: 300px;
  object-fit: cover; // La imagen cubre el espacio sin deformarse
}

.curve-shape {
  position: absolute;
  bottom: 0; // Lo pegamos a la parte inferior de la sección
  left: 0;
  width: 100%;
  overflow: hidden;

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 100px; // Altura de la curva, ajústala a tu gusto
  }

  .shape-fill {
    // El color de la curva. Debería ser el color de fondo de la siguiente sección.
    // Usamos $white como un valor seguro, pero puedes cambiarlo.
    fill: $white;
  }
}
</style>
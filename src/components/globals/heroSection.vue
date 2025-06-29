<script setup lang="ts">
import SearchFilters from '@/forms/SearchFilters.vue';

import VideoHero from '@/assets/videos/disney-cruise.mp4'

</script>

<template>
  <section class="hero-section">
    <video
      autoplay
      loop
      muted
      playsinline
      class="hero-video"
      aria-label="Video de fondo de un crucero navegando en el océano"
    >
      <source :src="VideoHero" type="video/mp4" />
      Tu navegador no soporta videos HTML5.
    </video>
    <div class="hero-overlay"></div>

    <div class="hero-content">
      <div class="search-filters-container">
        <SearchFilters />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

.hero-section {
  position: relative;
  height: 90vh;
  min-height: 700px;
  color: $white;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  z-index: 1;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(25, 20, 35, 0.4);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  max-width: 1200px; // Coincide con el ancho de la barra
  margin: 0 auto;
  padding: 24px;

  // Usamos Flexbox para posicionar el título arriba y la barra abajo
  display: flex;
  flex-direction: column;
  justify-content: space-between; // ¡La clave!
}

.title-area {
  text-align: center;
  padding-top: 10vh; // Le da aire en la parte superior
}

.hero-title {
  font-size: clamp(32px, 5vw, 64px);
  font-weight: 700;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  margin-bottom: 24px;
}

.hero-link {
  font-size: 18px;
  font-weight: 500;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
}

.search-filters-container {
  padding-bottom: 5vh; // Le da aire en la parte inferior
}
</style>
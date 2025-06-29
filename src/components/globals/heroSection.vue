<script setup lang="ts">
import { ref } from 'vue'; // --> 1. Importamos 'ref' para manejar el estado
import VideoHero from '@/assets/videos/disney-cruise.mp4';
import VideHeroComplete from '@/assets/videos/disney-cruise-complete.mp4';
import SearchFilters from '@/forms/SearchFilters.vue';

// --> 2. Estado para controlar la visibilidad del modal
const isModalOpen = ref(false);

// --> 3. Funciones para abrir y cerrar el modal
const openVideoModal = () => {
  isModalOpen.value = true;
};
const closeVideoModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <section class="hero-section">
    <video autoplay loop muted playsinline class="hero-video">
      <source :src="VideoHero" type="video/mp4" />
      Tu navegador no soporta videos HTML5.
    </video>
    <div class="hero-overlay"></div>

    <div class="hero-content">
      <div class="search-filters-container">
        <SearchFilters />
      </div>
      <div class="title-area">
        <h1 class="hero-title">Donde la Magia se Une con el Mar</h1>
        <div class="hero-actions">
          <a href="#" class="hero-link" @click.prevent="openVideoModal">
            ▶️ Ver Video Completo
          </a>
          <RouterLink to="/planning" class="hero-link" @click.prevent="openVideoModal">
            Empezar a planear
          </RouterLink>
        </div>
      </div>
    </div>
    <Transition name="modal-fade">
      <div v-if="isModalOpen" class="video-modal-overlay" @click="closeVideoModal">
        <div class="video-modal-content" @click.stop>
          <button class="close-btn" @click="closeVideoModal">&times;</button>
          <video
            controls
            autoplay
            class="modal-video-player"
            aria-label="Video completo del crucero Disney"
          >
            <source :src="VideHeroComplete" type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

// ... (Todos los estilos anteriores del Hero se mantienen igual)
.hero-section {
  position: relative;
  height: 90vh;
  min-height: 700px;
  color: $white;
  overflow: hidden
}

.hero-video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  z-index: 1;
  object-fit: cover
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(25, 20, 35, .4);
  z-index: 2
}

.hero-content {
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column
}

.title-area {
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
}

.hero-title {
  font-size: clamp(32px, 5vw, 64px);
  font-weight: 700;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, .8);
  margin-bottom: 24px
}

.hero-link {
  font-size: 18px;
  font-weight: 500;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, .7);
  transition: transform .2s ease;
  background-color: rgba(0, 0, 0, .3);
  padding: 10px 20px;
  border-radius: 30px;
  color: $white;
  text-decoration: none;
  outline: none;
}

.hero-link:hover {
  transform: scale(1.05)
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 24px
}

.search-filters-container {
  padding-bottom: 5vh
}


// --- --> 6. NUEVOS ESTILOS PARA EL MODAL DE VIDEO ---
.video-modal-overlay {
  position: fixed; // Fijo sobre toda la ventana
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 2000; // Un z-index muy alto para estar por encima de todo
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-modal-content {
  position: relative;
  width: 90%;
  max-width: 1200px;
  background-color: #000;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
}

.modal-video-player {
  width: 100%;
  height: auto;
  max-height: 90vh; // Para que no sea más alto que la ventana
  display: block;
}

.close-btn {
  position: absolute;
  top: -40px;
  right: -10px;
  background: none;
  border: none;
  color: $white;
  font-size: 40px;
  font-weight: 300;
  cursor: pointer;
  line-height: 1;
}

// Transición para el modal
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
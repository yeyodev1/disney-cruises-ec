<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
// Asegúrate de que la ruta a tus datos es correcta.
// Si tu archivo se llama `cruiseShips.ts` usa esa importación.
import { cruiseShips } from '@/data/cruices';
import FleetCard from '@/components/cards/FleetCard.vue';
import IconMickey from '../icons/IconMickey.vue';

const sliderWrapperRef = ref<HTMLElement | null>(null);
const activeSlideIndex = ref(0);

const scrollSlider = (direction: 'left' | 'right') => {
  const wrapper = sliderWrapperRef.value;
  if (!wrapper) return;
  const scrollAmount = wrapper.clientWidth * 0.8;
  wrapper.scrollBy({ left: direction === 'right' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
};

let observer: IntersectionObserver;

onMounted(() => {
  const wrapper = sliderWrapperRef.value;
  if (!wrapper) return;

  // ✅ CORRECCIÓN 1: Obtenemos la lista de slides individuales para observar.
  const slides = Array.from(wrapper.querySelectorAll('.slide'));
  if (slides.length === 0) return;

  const observerOptions = {
    root: wrapper, // El 'viewport' es el contenedor que hace scroll.
    threshold: 0.7, // El slide debe estar 70% visible.
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // ✅ CORRECCIÓN 2: Buscamos el índice del slide visible en nuestra lista de slides.
        const slideIndex = slides.indexOf(entry.target as HTMLElement);
        if (slideIndex > -1) {
          activeSlideIndex.value = slideIndex;
        }
      }
    });
  }, observerOptions);

  // ✅ CORRECCIÓN 3: Le decimos al observer que vigile cada slide individualmente.
  slides.forEach(slide => observer.observe(slide));
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <section class="fleet-slider">
    <div class="fleet-slider__header">
      <span class="header-icon">🚢</span>
      <h2>Conozca nuestra flota</h2>
      <p>
        Con sus distintivas chimeneas rojas y proas con remolinos dorados, los cruceros de Disney inspiran asombro dondequiera que atracan. ¡El viaje en sí es una parte épica de la diversión!
      </p>
    </div>

    <div class="fleet-slider__main">
      <button @click="scrollSlider('left')" class="slider-nav-btn --prev" aria-label="Previous Ship">‹</button>
      
      <div class="slider-wrapper" ref="sliderWrapperRef">
        <div class="slider-track">
          <FleetCard 
            v-for="ship in cruiseShips" 
            :key="ship.id" 
            :ship="ship" 
            class="slide" 
          />
        </div>
      </div>

      <button @click="scrollSlider('right')" class="slider-nav-btn --next" aria-label="Next Ship">›</button>
    </div>
    
    <div class="pagination-dots">
      <div v-for="(ship, index) in cruiseShips" :key="`dot-${ship.id}`" class="dot-container">
        <IconMickey v-if="index === activeSlideIndex" class="mickey-icon" />
        <span v-else class="dot"></span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

.fleet-slider {
  background-color: #f7f8fa;
  padding: 60px 0;
  border-top: 1px solid #e0e4e7;
  border-bottom: 1px solid #e0e4e7;
}

.fleet-slider__header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
  padding: 0 20px;

  .header-icon {
    font-size: 32px;
    color: $disney-blue-primary;
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
    margin: 8px 0 16px;
    color: $color-accent;
  }

  p {
    font-size: 16px;
    color: #555;
    line-height: 1.6;
  }
}

.fleet-slider__main {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.slider-wrapper {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.slider-track {
  display: flex;
  gap: 24px;
  padding: 12px 60px;
}

.slide {
  flex: 0 0 250px;
  scroll-snap-align: center;
}

.slider-nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 28px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s, transform 0.2s;
  display: none; // Ocultos por defecto

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background-color: $white;
    transform: translateY(-50%) scale(1.1);
  }

  &.--prev {
    left: 15px;
  }

  &.--next {
    right: 15px;
  }
}

.pagination-dots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #cbd5e0;
}

.mickey-icon {
  font-size: 20px;
  color: $disney-blue-primary;
}

.dot-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px; // Altura fija para evitar saltos de layout
}
</style>
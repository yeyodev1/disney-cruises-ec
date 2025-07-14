<script setup lang="ts">
import type { EnrichedItinerary } from '@/types/itineraries';
import type { PropType } from 'vue';

const props = defineProps({
  itinerary: {
    type: Object as PropType<EnrichedItinerary>,
    required: true,
  },
});
</script>

<template>
  <article class="itinerary-card">
    <div v-if="itinerary.ship" class="itinerary-card__image-wrapper">
      <img :src="itinerary.ship.imageUrl" :alt="itinerary.ship.name" loading="lazy" />
    </div>
    <div class="itinerary-card__content">
      <h4 class="itinerary-card__name">{{ itinerary.name }}</h4>
      <div class="itinerary-card__details">
        <p><strong>Barco:</strong> {{ itinerary.ship?.name || 'No disponible' }}</p>
        <p><strong>Región:</strong> {{ itinerary.region }}</p>
        <p><strong>Puerto:</strong> {{ itinerary.port }}</p>
      </div>
    </div>
  </article>
</template>a

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

// Definimos un punto de quiebre para la transición de móvil a escritorio.
$breakpoint-tablet: 768px;

// --- ESTILOS BASE (MOBILE-FIRST) ---
// Por defecto, la tarjeta tiene un layout vertical.
.itinerary-card {
  display: flex;
  flex-direction: column; // ✅ Tarjeta en formato vertical para móvil.
  background: $white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
}

.itinerary-card__image-wrapper {
  width: 100%; // ✅ La imagen ocupa todo el ancho en móvil.
  flex-shrink: 0;
  aspect-ratio: 16 / 9; // ✅ Mantiene una proporción consistente para la imagen.

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.itinerary-card__content {
  padding: 20px;
  flex-grow: 1;
}

.itinerary-card__name {
  font-size: 20px;
  font-weight: 600;
  color: $disney-blue-primary;
  margin-bottom: 16px;
}

.itinerary-card__details p {
  margin: 0 0 8px;
  font-size: 16px;
  color: $color-accent;
}


// --- ESTILOS PARA PANTALLAS MÁS GRANDES ---
// A partir del punto de quiebre, aplicamos el layout horizontal.
@media (min-width: $breakpoint-tablet) {
  .itinerary-card {
    flex-direction: row; // ✅ Cambiamos a layout horizontal.
    gap: 20px;
  }

  .itinerary-card__image-wrapper {
    width: 250px; // ✅ Asignamos un ancho fijo a la imagen en desktop.
    aspect-ratio: auto; // Reseteamos la proporción para que la altura se ajuste al contenido.
  }

  .itinerary-card__content {
    padding: 24px; // Opcional: un poco más de aire en desktop.
  }
}
</style>
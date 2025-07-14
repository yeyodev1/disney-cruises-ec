<script setup lang="ts">
import { computed } from 'vue';
import { allItineraries } from '@/data/itineraries';
import ItineraryCard from '@/components/cards/ItineraryCard.vue';
import type { EnrichedItinerary } from '@/types/itineraries';
import { cruiseShips } from '@/data/cruices';

// ✅ --- LÓGICA PROFESIONAL AQUÍ --- ✅
// Creamos un "Modelo de Vista" computado que enriquece cada itinerario
// con la información completa del barco correspondiente.
const enrichedItineraries = computed((): EnrichedItinerary[] => {
  // Creamos un mapa para búsqueda rápida de barcos por ID (mucho más eficiente que 'find' en un loop)
  const shipsMap = new Map(cruiseShips.map(ship => [ship.id, ship]));

  return allItineraries.map(itinerary => ({
    ...itinerary,
    // Buscamos el barco en el mapa. Si no existe, devuelve 'undefined'.
    ship: shipsMap.get(itinerary.shipId),
  }));
});
</script>

<template>
  <section class="results-section">
    <div class="results-header">
      <h3>Mostrando {{ enrichedItineraries.length }} de {{ enrichedItineraries.length }} cruceros</h3>
    </div>
    <div class="results-list">
      <ItineraryCard
        v-for="itinerary in enrichedItineraries"
        :key="itinerary.id"
        :itinerary="itinerary"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

.results-section {
  padding: 40px 20px;
  max-width: 1250px;
  margin: 0 auto;
}

.results-header {
  margin-bottom: 24px;
  color: #666;
}

.results-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
<script setup lang="ts">
import CruiseCard from './CruiseCard.vue';
import { allDestinations } from '@/data/destinations';
</script>

<template>
  <section class="results-section">
    <div class="results-header">
      <h3>Mostrando {{ allDestinations.length }} de {{ allDestinations.length }} cruceros</h3>
    </div>
    <div class="results-list">
      <CruiseCard 
        v-for="cruise in allDestinations" 
        :key="cruise.ID" 
        :cruise="cruise" 
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

.results-section {
  padding: 40px 0;
  max-width: 1250px;
  margin: 0 auto;
}

.results-header {
  margin-bottom: 24px;
  color: #666;
}

// ✅ --- CAMBIO DE ESTILO AQUÍ --- ✅
// Cambiamos el grid por un flexbox en columna
.results-list {
  display: flex;
  flex-direction: column;
  gap: 24px; // Espacio entre cada tarjeta
}
</style>
<script setup lang="ts">
import { ref } from 'vue';
// 1. Importamos las opciones de filtros desde nuestro nuevo archivo
import { filterOptionsData } from '@/data/filterOptions';

const emit = defineEmits(['close', 'update-filters']);

// 2. El estado local ahora refleja las nuevas categorías
const selectedFilters = ref({
  specialOccasions: [] as string[],
  ships: [] as string[],
  departurePorts: [] as string[],
  lengths: [] as string[],
  portAdventures: [] as string[],
  destinations: [] as string[],
});

// 3. La estructura para renderizar ahora es más limpia y directa
const filterSections = [
  { id: 'specialOccasions', title: 'Ocasiones Especiales', options: filterOptionsData.specialOccasions },
  { id: 'ships', title: 'Barcos', options: filterOptionsData.ships },
  { id: 'departurePorts', title: 'Puertos de Salida', options: filterOptionsData.departurePorts },
  { id: 'lengths', title: 'Duración', options: filterOptionsData.lengths },
  { id: 'portAdventures', title: 'Aventuras en Puerto', options: filterOptionsData.portAdventures },
  { id: 'destinations', title: 'Destinos', options: filterOptionsData.destinations },
];

// Las funciones no cambian, ¡la lógica sigue siendo válida!
const applyFilters = () => emit('update-filters', selectedFilters.value);
const clearAll = () => {
  selectedFilters.value = { specialOccasions: [], ships: [], departurePorts: [], lengths: [], portAdventures: [], destinations: [] };
};
</script>

<template>
  <div class="more-filters-panel">
    <div class="panel-header">
      <span class="panel-label">MÁS FILTROS</span>
      <button class="clear-btn" @click="clearAll">Limpiar Todo</button>
    </div>
    <div class="panel-body">
      <div class="filters-grid">
        <div v-for="section in filterSections" :key="section.id" class="filter-section">
          <h4 class="section-title">{{ section.title }}</h4>
          <div v-for="option in section.options" :key="option" class="checkbox-wrapper">
            <input type="checkbox" :id="`${section.id}-${option}`" :value="option" v-model="selectedFilters[section.id as keyof typeof selectedFilters]">
            <label :for="`${section.id}-${option}`">{{ option }}</label>
          </div>
        </div>
      </div>
    </div>
    <div class="panel-footer">
      <button class="view-btn" @click="applyFilters">Ver Cruceros</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

.more-filters-panel {
  background: $white;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, .15);
  width: 1000px;
  max-width: 95vw;
  color: $color-text-on-light
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #eee
}

.panel-label {
  font-size: 12px;
  font-weight: 600;
  color: #888;
  letter-spacing: 1px
}

.clear-btn {
  background: 0 0;
  border: none;
  color: $color-primary;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer
}

.panel-body {
  padding: 24px;
  max-height: 60vh;
  overflow-y: auto
}

// Ajustamos el grid para que se vea bien con más columnas
.filters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px 32px
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 16px;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px
}

.checkbox-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  label {
    margin-left: 8px;
    cursor: pointer;
    font-size: 15px;
  }
}

.panel-footer {
  padding: 16px;
  text-align: right;
  border-top: 1px solid #eee
}

.view-btn {
  background-color: $color-primary;
  color: $white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer
}
</style>
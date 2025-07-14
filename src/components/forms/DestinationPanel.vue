<script setup lang="ts">
import { ref, computed } from 'vue';
import { allDestinations, type Destination } from '@/data/destinations';

const emit = defineEmits(['close', 'select-destination']);

// 1. Estado para la pestaña activa. 'All' es la pestaña por defecto.
const activeTab = ref('All');

// 2. Generamos la lista de pestañas dinámicamente desde los datos
const tabs = computed(() => {
  // Usamos un Set para obtener regiones únicas y luego lo convertimos a un array
  const uniqueRegions = [...new Set(allDestinations.map((d: any) => d.REGION))];
  return ['All', ...uniqueRegions]; // Añadimos 'All' al principio
});

// 3. Filtramos los destinos a mostrar según la pestaña activa
const filteredDestinations = computed(() => {
  if (activeTab.value === 'All') {
    return allDestinations; // Si la pestaña es 'All', mostramos todos
  }
  // Si no, filtramos por la región seleccionada
  return allDestinations.filter((d: any) => d.REGION === activeTab.value);
});

const selectDestination = (destination: Destination) => {
  console.log('Destino seleccionado:', destination);
  emit('close');
}
</script>

<template>
  <div class="destination-panel">
    <div class="panel-header">
      <span class="panel-label">DESTINOS</span>
      <button class="clear-btn" @click="emit('close')">Cerrar</button>
    </div>
    <div class="panel-content">
      <aside class="tabs-sidebar">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          class="tab-button"
          :class="{ 'is-active': activeTab === tab }"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </aside>

      <main class="destinations-list-container">
        <ul class="destination-list">
          <li v-for="dest in filteredDestinations" :key="dest.ID">
            <a href="#" class="destination-link" @click.prevent="selectDestination(dest)">
              {{ dest.DESTINO }}
            </a>
          </li>
        </ul>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

.destination-panel {
  background: $white;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  max-width: 95vw;
  color: $color-text-on-light;
  overflow: hidden; // Importante para que los bordes redondeados se apliquen al contenido
}

.panel-header {
  /* ... (estilos idénticos que ya teníamos) ... */
}

.panel-label,
.clear-btn {
  /* ... (estilos idénticos que ya teníamos) ... */
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
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


.panel-content {
  display: flex;

}

.tabs-sidebar {
  width: 200px;
  flex-shrink: 0; // Evita que la barra lateral se encoja
  background-color: #f5f6f7;
  border-right: 1px solid #e0e0e0;
  padding: 16px 0;
  overflow-y: auto;
}

.tab-button {
  display: block;
  width: 100%;
  padding: 12px 24px;
  border: none;
  background: none;
  text-align: left;
  font-size: 16px;
  font-weight: 500;
  color: $color-text-on-light;
  cursor: pointer;
  border-left: 3px solid transparent; // Borde para el estado activo

  &.is-active {
    background-color: $white;
    color: $color-primary;
    font-weight: 600;
    border-left-color: $color-primary;
  }

  &:hover:not(.is-active) {
    background-color: #e9ebee;
  }
}

.destinations-list-container {
  flex-grow: 1; // Ocupa el resto del espacio
  padding: 24px;
  overflow-y: auto; // Scroll si la lista es muy larga
}

.destination-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.destination-link {
  color: $color-accent;
  text-decoration: none;
  font-size: 15px;

  &:hover {
    text-decoration: underline;
    color: $color-primary;
  }
}
</style>
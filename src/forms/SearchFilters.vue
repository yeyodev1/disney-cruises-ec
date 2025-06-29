<script setup lang="ts">
import { ref, computed } from 'vue';
import { useClickOutside } from '@/composables/useClickOutside';
import DateSelectionPanel from '@/components/forms/DateSelectionPanel.vue';
import DestinationPanel from '@/components/forms/DestinationPanel.vue';
import PortPanel from '@/components/forms/PortPanel.vue';
import GuestPanel from '@/components/forms/GuestPanel.vue';
// ✅ 1. Importamos el panel que faltaba
import MoreFiltersPanel from '@/components/forms/MoreFiltersPanel.vue';

// --- ESTADO CENTRAL DE LA BÚSQUEDA ---
const searchState = ref({
  leaving: 'Cualquier Fecha',
  sailing: 'Cualquier Destino',
  departing: 'Cualquier Puerto',
  guests: { adults: 2, children: 0 },
  // ✅ 2. Añadimos el estado para los filtros avanzados
  advancedFilters: {
    ports: [] as string[],
    ships: [] as string[],
    destinations: [] as string[],
  },
});

// --- DATOS PARA EL TEMPLATE ---
const mainFilters = [
  { id: 'leaving', mainLabel: 'Salida' },
  { id: 'sailing', mainLabel: 'Navegando a' },
  { id: 'departing', mainLabel: 'Saliendo desde' },
];

// --- LÓGICA DE PANELES ---
const openPanel = ref<string | null>(null);
const filtersWrapperRef = ref(null);
const togglePanel = (panelId: string) => openPanel.value = openPanel.value === panelId ? null : panelId;
const closePanel = () => openPanel.value = null;
useClickOutside(filtersWrapperRef, closePanel);

// --- LÓGICA DE HUÉSPEDES ---
const guestLabel = computed(() => {
  const total = searchState.value.guests.adults + searchState.value.guests.children;
  return `${total} Huésped${total > 1 ? 'es' : ''}`;
});
const updateGuests = (newGuests: { adults: number; children: number }) => {
  searchState.value.guests = newGuests;
};

// ✅ 3. Añadimos la función para actualizar los filtros avanzados
const updateAdvancedFilters = (newFilters: { ports: string[], ships: string[], destinations: string[] }) => {
  searchState.value.advancedFilters = newFilters;
};

// --- LÓGICA DE WHATSAPP ---
const openWhatsApp = () => { /* ...código sin cambios... */ };
const panelAlignmentClass = computed(() => { if (openPanel.value === 'guests' || openPanel.value === 'moreFilters') { return '--align-right'; } return '--align-left'; });

</script>

<template>
  <div class="search-filters-wrapper" ref="filtersWrapperRef">
    <h3 class="explore-label">Explorar Destinos</h3>
    <div class="search-filters-bar">
      <button v-for="filter in mainFilters" :key="filter.id" @click="togglePanel(filter.id)" class="filter-item" :class="{ 'is-active': openPanel === filter.id }">
        <span class="filter-item__main-label">{{ filter.mainLabel }}</span>
        <span class="filter-item__sub-label">{{ searchState[filter.id as keyof Omit<typeof searchState, 'guests' | 'advancedFilters'>] }}</span>
      </button>

      <div class="filter-item filter-item--compound" :class="{ 'is-active': openPanel === 'guests' || openPanel === 'moreFilters' }">
        <button @click="togglePanel('guests')" class="compound-part">
          <span class="icon">👥</span>
          <span>{{ guestLabel }}</span>
        </button>
        <div class="separator"></div>
        <button @click="togglePanel('moreFilters')" class="compound-part">
          <span class="icon">📶</span>
          <span>Más Filtros</span>
        </button>
      </div>

      <button class="view-dates-btn" @click="openWhatsApp">Ver Fechas</button>
    </div>

    <div class="panel-container" :class="panelAlignmentClass">
      <Transition name="fade">
        <DateSelectionPanel v-if="openPanel === 'leaving'" @close="closePanel" />
        <DestinationPanel v-else-if="openPanel === 'sailing'" @close="closePanel" />
        <PortPanel v-else-if="openPanel === 'departing'" @close="closePanel" />
        <GuestPanel v-else-if="openPanel === 'guests'" :initial-adults="searchState.guests.adults" :initial-children="searchState.guests.children" @update:guests="updateGuests" @close="closePanel" />
        <MoreFiltersPanel
          v-else-if="openPanel === 'moreFilters'"
          @close="closePanel"
          @update-filters="updateAdvancedFilters"
        />
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

.search-filters-wrapper {
  position: relative;
}

.explore-label {
  font-size: 20px;
  font-weight: 600;
  color: $white;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 16px;
  text-align: left;
}

.search-filters-bar {
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  padding: 12px;
  display: grid;
  grid-template-columns: repeat(3, 1fr) 1.5fr auto;
  gap: 8px;
  align-items: stretch;
}

.filter-item {
  background-color: $white;
  padding: 12px 16px;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  font-family: inherit;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  &__main-label {
    font-size: 16px;
    font-weight: 600;
    color: $color-accent;
  }

  &__sub-label {
    font-size: 14px;
    color: #666;
  }
}

.filter-item--compound {
  flex-direction: row;
  align-items: center;
  padding: 0;

  .compound-part {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    flex-grow: 1;
    justify-content: center;
    height: 100%;

    .icon {
      font-size: 20px;
    }
  }

  .separator {
    width: 1px;
    height: 60%;
    background-color: #e0e0e0;
  }
}

.view-dates-btn {
  background-color: $disney-blue-primary;
  color: $white;
  border: none;
  border-radius: 8px;
  padding: 12px 28px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: darken($disney-blue-primary, 8%);
  }
}

.filter-item.is-active {
  border-color: $color-primary;
}

.panel-container {
  position: absolute;
  top: calc(100% + 12px);
  z-index: 100;

  &.--align-left {
    left: 0;
  }

  &.--align-right {
    right: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
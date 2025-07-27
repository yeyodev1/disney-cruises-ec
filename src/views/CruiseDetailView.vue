<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import ShipGallery from '@/components/details/ShipGallery.vue';
import { cruiseShips } from '@/data/cruices';
import SearchFilters from '@/forms/SearchFilters.vue';

const route = useRoute();

const currentShip = computed(() => {
  return cruiseShips.find(ship => ship.id === route.params.id);
});
</script>

<template>
  <div v-if="currentShip" class="cruise-detail-view">
    <div class="container">
      <header class="ship-header">
        <h1>{{ currentShip.name }}</h1>
        <p class="tagline">{{ currentShip.tagline }}</p>
        <SearchFilters/>
      </header>

      <div class="content-layout">
        <main class="main-content">
          <ShipGallery :ship="currentShip" />
          <section class="description-section">
            <h2>Acerca de este barco</h2>
            <p>{{ currentShip.description }}</p>
          </section>
        </main>
        <aside class="sidebar">
          <div class="highlights-card">
            <h3>Datos Clave</h3>
            <ul>
              <li v-for="highlight in currentShip.highlights" :key="highlight.label">
                <span class="icon">{{ highlight.icon }}</span>
                <div>
                  <strong>{{ highlight.label }}</strong>
                  <span>{{ highlight.value }}</span>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </div>
  <div v-else class="not-found">
    <h2>Barco no encontrado</h2>
    <p>No pudimos encontrar un crucero con ese identificador.</p>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px;
}

.ship-header {
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-size: 48px;
    color: $disney-blue-primary;
  }

  .tagline {
    font-size: 20px;
    color: $color-accent;
    margin-top: 8px;
  }
}

// Layout de 2 columnas para el contenido principal y la barra lateral
.content-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: 992px) {
    grid-template-columns: 3fr 1fr;
  }
}

.description-section {
  margin-top: 40px;

  h2 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  p {
    line-height: 1.7;
    font-size: 16px;
  }
}

.highlights-card {
  background-color: #f7f8fa;
  padding: 24px;
  border-radius: 16px;

  h3 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;

    li {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .icon {
      font-size: 24px;
    }

    strong {
      display: block;
      font-weight: 600;
    }

    span {
      color: #555;
    }
  }
}

.not-found {
  text-align: center;
  padding: 80px 24px;
}
</style>
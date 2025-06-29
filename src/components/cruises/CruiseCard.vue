<script setup lang="ts">
import type { PropType } from 'vue';
import type { Destination } from '@/data/destinations';

// Este componente recibe un objeto 'cruise' como propiedad (prop)
defineProps({
  cruise: {
    type: Object as PropType<Destination>,
    required: true,
  }
});
</script>

<template>
  <div class="cruise-card">
    <div class="card-image-container">
      <img src="https://images.unsplash.com/photo-1540449914091-769534927039?q=80&w=600&auto=format&fit=crop" :alt="`Crucero ${cruise.DESTINO}`" class="card-image">
      <span class="ship-badge">{{ cruise.SHIP }}</span>
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ cruise.DESTINO }}</h3>
      <div class="card-details">
        <div class="detail-item">
          <span class="icon">🗺️</span>
          <span>{{ cruise.REGION }} - Saliendo de {{ cruise.PUERTO }}</span>
        </div>
        <div class="detail-item">
          <span class="icon">🗓️</span>
          <!-- <span>{{ cruise.DURACION }} Noches</span> -->
        </div>
        <div class="detail-item">
          <span class="icon">💲</span>
          <span>Desde $1,250 USD (ejemplo)</span>
        </div>
      </div>
      <a href="#" class="card-button">Ver Detalles</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

.cruise-card {
  background: $white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, .08);
  overflow: hidden;
  text-align: left;
  display: flex;
  flex-direction: column;
  transition: transform .3s ease, box-shadow .3s ease
}

.cruise-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, .12)
}

.card-image-container {
  height: 220px;
  position: relative
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover
}

.ship-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: rgba(0, 0, 0, .6);
  backdrop-filter: blur(5px);
  color: $white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600
}

.card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 16px;
  color: $color-text-on-light;
  min-height: 44px
}

.card-details {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px
}

.detail-item {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;
  gap: 8px
}

.card-button {
  display: inline-block;
  background-color: transparent;
  color: $color-primary;
  border: 2px solid $color-primary;
  text-decoration: none;
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: 600;
  text-align: center;
  margin-top: auto;
  transition: all .2s ease
}

.card-button:hover {
  background-color: $color-primary;
  color: $white
}
</style>
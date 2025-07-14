<script setup lang="ts">
import type { PropType } from 'vue';
import type { CruiseShip } from '@/data/cruices'; // Asegúrate que esta ruta sea correcta

defineProps({
  ship: {
    type: Object as PropType<CruiseShip>,
    required: true,
  },
});
</script>

<template>
  <router-link :to="`/nuestros-cruceros/${ship.id}`" class="fleet-card-link">
    <div class="fleet-card">
      <div class="fleet-card__image-wrapper">
        <img :src="ship.imageUrl" :alt="ship.name" loading="lazy" />
      </div>
      <h4 class="fleet-card__name">{{ ship.name }}</h4>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

// ✅ 2. AÑADIMOS ESTILOS PARA EL ENLACE
// Esto asegura que el enlace ocupe toda la tarjeta y no tenga el subrayado azul.
.fleet-card-link {
  text-decoration: none;
  color: inherit;
  display: block; // Importante para que el enlace ocupe todo el espacio
}

.fleet-card {
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }

  &__image-wrapper {
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    aspect-ratio: 4 / 3;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    // Mantenemos el efecto hover en la imagen
    .fleet-card-link:hover & img {
      transform: scale(1.05);
    }
  }

  &__name {
    font-size: 16px;
    font-weight: 600;
    color: $color-accent;
  }
}
</style>
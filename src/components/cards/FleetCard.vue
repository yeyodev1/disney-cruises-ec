<script setup lang="ts">
import type { CruiseShip } from '@/data/cruices';
import type { PropType } from 'vue';

defineProps({
  ship: {
    type: Object as PropType<CruiseShip>,
    required: true,
  },
});
</script>

<template>
  <div class="fleet-card">
    <div class="fleet-card__image-wrapper">
      <img :src="ship.imageUrl" :alt="ship.name" loading="lazy" />
    </div>
    <h4 class="fleet-card__name">{{ ship.name }}</h4>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

.fleet-card {
  text-align: center;

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

    &:hover img {
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
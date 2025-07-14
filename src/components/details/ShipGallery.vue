<script setup lang="ts">
import type { CruiseShip } from '@/data/cruices';
import { ref, type PropType } from 'vue';

const props = defineProps({
  ship: {
    type: Object as PropType<CruiseShip>,
    required: true,
  },
});

// Estado para mantener la imagen seleccionada actualmente
const selectedImage = ref(props.ship.gallery[0]);

const selectImage = (image: CruiseShip['gallery'][0]) => {
  selectedImage.value = image;
};
</script>

<template>
  <div class="ship-gallery">
    <div class="featured-image-wrapper">
      <Transition name="fade" mode="out-in">
        <img :key="selectedImage.id" :src="selectedImage.url" :alt="selectedImage.alt" />
      </Transition>
    </div>
    <div class="thumbnail-track">
      <button
        v-for="image in ship.gallery"
        :key="image.id"
        class="thumbnail"
        :class="{ 'is-active': image.id === selectedImage.id }"
        @click="selectImage(image)"
      >
        <img :src="image.url" :alt="image.alt" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ship-gallery {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.featured-image-wrapper {
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  overflow: hidden;
  background-color: #f0f0f0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.thumbnail-track {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.thumbnail {
  border: 2px solid transparent;
  border-radius: 8px;
  padding: 0;
  cursor: pointer;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  transition: border-color 0.2s ease, transform 0.2s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
  }

  &.is-active {
    border-color: #0076ce; // O tu variable $disney-blue-primary
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
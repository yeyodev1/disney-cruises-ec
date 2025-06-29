<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, Controller } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SearchFilters from '@/forms/SearchFilters.vue';

import image1 from '@/assets/carousel/primer_foto_carousel.avif'
import image2 from '@/assets/carousel/segunda_foto_carousel.avif'
import image3 from '@/assets/carousel/tercer_foto_carousel.jpg'
import CruiseResults from '@/components/cruises/CruiseResults.vue';

const swiperModules = [Navigation, Pagination, Autoplay];

const carouselSlides = [
  { id: 1, image: image1, title: '' },
  { id: 2, image: image2, title: '' },
  { id: 3, image: image3, title: '' },
];
</script>

<template>
  <div class="select-cruise-view">
    <section class="carousel-hero">
      <Swiper
        :modules="swiperModules"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :pagination="{ clickable: true }"
        :navigation="true"
        class="main-carousel"
      >
        <SwiperSlide v-for="slide in carouselSlides" :key="slide.id">
          <div class="slide-content">
            <img :src="slide.image" :alt="slide.title" class="slide-image" />
            <div class="slide-overlay"></div>
            <h1 class="slide-title">{{ slide.title }}</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>

    <section class="filters-section">
        <SearchFilters />
    </section>
     <CruiseResults />

    </div>
</template>

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

.carousel-hero {
  position: relative;
  height: 50vh; // Un hero más corto para esta vista
  width: 100%;
  background-color: $color-background-dark; // Color de fondo mientras carga la imagen
}

.main-carousel {
  width: 100%;
  height: 100%;
}

.slide-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $white;
}

.slide-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.6) 100%);
  z-index: 2;
}

.slide-title {
  position: relative;
  z-index: 3;
  font-size: clamp(36px, 5vw, 72px);
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
  text-align: center;
  padding: 0 24px;
}

.filters-section {
  margin-top: -120px;
  position: relative;
  z-index: 10;
  padding: 0 24px;
  width: 1250px;
  margin: 0 auto;
}


:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: $white;
  background-color: rgba(0, 0, 0, 0.3);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    font-size: 20px;
  }
}

:deep(.swiper-pagination-bullet) {
  background-color: rgba(255, 255, 255, 0.8);
  width: 12px;
  height: 12px;
  opacity: 0.8;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: $white;
  opacity: 1;
}
</style>
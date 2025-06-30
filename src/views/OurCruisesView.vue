<script setup lang="ts">
import PromoSection from '@/components/hero/promoSection.vue';

import HeroImage from '@/assets/cruises/hero_our_cruises.jpg'
</script>

<template>
  <div class="our-cruises-view">
    <PromoSection
      :image-src="HeroImage"
    />

    <div class="page-content">
      <h2>Más sobre Nuestros Cruceros</h2>
      <p>Aquí podríamos colocar una lista de los barcos, detalles sobre los camarotes, actividades a bordo, etc.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

.page-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 24px;
}
</style>
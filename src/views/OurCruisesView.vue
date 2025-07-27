<script setup lang="ts">
import PromoSection from '@/components/hero/PromoSection.vue';

import HeroImage from '@/assets/cruises/hero_our_cruises.jpg'
import ItineraryResults from '@/components/content/ItineraryResults.vue';
import FleetSlider from '@/components/content/FleetSlider.vue';
import DisneyDifference from '@/components/content/DisneyDifference.vue';
import SearchFilters from '@/forms/SearchFilters.vue';
</script>

<template>
  <div class="our-cruises-view">
    <PromoSection
      :image-src="HeroImage"
    />
    <SearchFilters/>
    <FleetSlider/>
    <DisneyDifference/>
    <ItineraryResults />
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
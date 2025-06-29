<script setup lang="ts">
import HeroSection from '@/components/globals/heroSection.vue';

</script>

<template>
  <div class="app-wrapper">
    <main class="main-content">
      <HeroSection />
      <div class="container placeholder">
        <h2>Próxima Sección</h2>
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
// Los estilos de App.vue que ya teníamos
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
}

// Estilos del placeholder para futuras secciones
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 24px;
}

.placeholder {
  text-align: center;
}
</style>
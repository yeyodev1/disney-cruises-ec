<script setup lang="ts">
import Header from './components/globals/header.vue'
import Footer from './components/globals/footer.vue'
</script>

<template>
  <Header/>
  <main class="main-content">
    <RouterView />
  </main>
  <Footer />
</template>


<style lang="scss">
@use '@/styles/index.scss' as *;

.main-content {
  min-height: 100vh;
}

.main-content.with-header {
  margin-top: 56px;
}
</style>

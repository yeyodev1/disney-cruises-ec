<script setup lang="ts">
import LogoDisney from '@/assets/logo/disney-cruise-logo.svg';

const topBarLinks = [
  { text: 'Visita Disney.com', href: '#' },

  { text: 'Ayuda', href: '#' },
];

const mainNavLinks = [
  { text: 'Nuestros Cruceros', href: '/nuestros-cruceros' },
];
</script>

<template>
  <header class="main-header">
    <div class="top-bar">
      <div class="container top-bar__container">
        <div class="top-bar__start">
          <a :href="topBarLinks[0].href" class="top-bar__link">{{ topBarLinks[0].text }}</a>
        </div>
        <div class="top-bar__end">
          <nav class="top-bar__nav">
            <a :href="topBarLinks[1].href" class="top-bar__link">{{ topBarLinks[1].text }}</a>
          </nav>
        </div>
      </div>
    </div>

    <div class="main-nav">
      <div class="container main-nav__container">
        <a href="/" class="main-nav__logo">
          <img :src="LogoDisney" alt="" srcset="">
        </a>
        <nav class="main-nav__links">
          <RouterLink v-for="link in mainNavLinks" :key="link.text" :to="link.href" class="main-nav__link">
            {{ link.text }}
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
// ¡NUEVA SINTAXIS! Limpia, moderna y eficiente.
@use '@/styles/index.scss' as *;

.container {
  width: 100%;
  max-width: 1380px;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
}

.main-header {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: $white; // La variable viene de nuestro index.scss
}

.top-bar {
  background-color: $color-background-dark;
  color: $color-text-on-dark;
  font-size: 13px;

  &__container,
  &__end {
    display: flex;
    align-items: center;
  }

  &__container {
    justify-content: space-between;
    height: 40px;
  }

  &__end {
    gap: 24px;
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__link {
    color: #c9d5e0;
    transition: color 0.2s ease;

    &:hover {
      color: $white;
    }
  }

  &__separator {
    color: #4a4a4a;
  }

  &__search {
    display: flex;
    align-items: center;
    background-color: $white;
    border-radius: 20px;
    padding: 4px 12px;
    color: #555;

    input {
      border: none;
      outline: none;
      background: transparent;
      padding-left: 8px;
      font-size: 13px;
      width: 150px;
    }
  }
}

.main-nav {
  background-color: $color-background-light;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }

  &__logo {
    width: 220px;
    height: auto;
  }

  &__links {
    display: flex;
    gap: 40px;
  }

  &__link {
    font-size: 17px;
    font-weight: 500;
    color: $color-accent;
    padding: 10px 0;
    border-bottom: 3px solid transparent;
    transition: color 0.2s ease, border-color 0.2s ease;

    &:hover {
      color: $color-primary;
      border-bottom-color: $color-primary;
    }
  }
}
</style>
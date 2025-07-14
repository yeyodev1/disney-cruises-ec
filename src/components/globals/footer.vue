<script setup lang="ts">
import { computed } from 'vue';

// Definir los datos del footer aquí hace que sea muy fácil de actualizar.
const footerColumns = [
  {
    title: 'Navegación',
    links: [
      { text: 'Nuestros Cruceros', href: '/nuestros-cruceros' },
    ],
  },
];

const socialLinks = [
  { name: 'Facebook', icon: 'FB', href: '#' },
  { name: 'Instagram', icon: 'IG', href: '#' },
  { name: 'Twitter', icon: 'TW', href: '#' },
];

// Calculamos el año actual para que el copyright nunca esté desactualizado.
const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <footer class="main-footer">
    <div class="container">
      <div class="footer-content">
        <div v-for="column in footerColumns" :key="column.title" class="footer-column">
          <h3 class="column-title">{{ column.title }}</h3>
          <ul class="column-links">
            <li v-for="link in column.links" :key="link.text">
              <RouterLink :to="link.href" class="column-link">{{ link.text }}</RouterLink>
            </li>
          </ul>
        </div>

        <div class="footer-column">
          <h3 class="column-title">Síguenos</h3>
          <div class="social-links">
            <a v-for="social in socialLinks" :key="social.name" :href="social.href" class="social-link">
              {{ social.icon }}
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom-bar">
        <p>&copy; {{ currentYear }} Disney Cruceros Ecuador. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

.main-footer {
  background-color: $color-background-dark;
  color: $color-text-on-dark;
  padding: 60px 0 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer-content {
  display: grid;
  // Creamos un grid responsive: en pantallas grandes 4 columnas, en pequeñas se apilan.
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  padding-bottom: 40px;
}

.column-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: $white;
}

.column-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.column-link {
  color: #c9d5e0;
  text-decoration: none;
  transition: color 0.2s ease, padding-left 0.2s ease;

  &:hover {
    color: $white;
    padding-left: 5px;
  }
}

.social-links {
  display: flex;
  gap: 16px;
}

.social-link {
  // Estilo de placeholder para los íconos sociales
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #c9d5e0;
  border-radius: 50%;
  color: #c9d5e0;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background-color: $color-primary;
    border-color: $color-primary;
    color: $white;
    transform: scale(1.1);
  }
}

.footer-bottom-bar {
  border-top: 1px solid #3a3a3a;
  padding: 24px 0;
  text-align: center;
  font-size: 14px;
  color: #a0a0a0;
}
</style>
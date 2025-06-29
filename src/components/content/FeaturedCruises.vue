<script setup lang="ts">
// 1. Datos de Mockup: Simulamos la data que vendría de Storyblok.
//    En el futuro, esta data será reemplazada por una llamada a la API.
const mockCruises = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1599988172252-c28f3a3f7f8f?q=80&w=800&auto=format&fit=crop',
    title: 'Caribe Mágico',
    duration: '7 Noches',
    route: 'Saliendo de Miami',
    link: '#',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=800&auto=format&fit=crop',
    title: 'Aventura en Alaska',
    duration: '5 Noches',
    route: 'Saliendo de Vancouver',
    link: '#',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1540449914091-769534927039?q=80&w=800&auto=format&fit=crop',
    title: 'Riviera Mediterránea',
    duration: '10 Noches',
    route: 'Saliendo de Barcelona',
    link: '#',
  },
];
</script>

<template>
  <section class="featured-cruises">
    <div class="container">
      <h2 class="section-title">Cruceros Destacados</h2>
      <p class="section-subtitle">
        Embárcate en una aventura inolvidable con nuestros destinos más populares.
      </p>
      
      <div class="cruises-grid">
        <div v-for="cruise in mockCruises" :key="cruise.id" class="cruise-card">
          <div class="card-image-container">
            <img :src="cruise.image" :alt="`Imagen del crucero ${cruise.title}`" class="card-image" />
          </div>
          <div class="card-content">
            <h3 class="card-title">{{ cruise.title }}</h3>
            <p class="card-details">{{ cruise.duration }} / {{ cruise.route }}</p>
            <a :href="cruise.link" class="card-button">Ver Detalles</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

.featured-cruises {
  padding: 80px 0;
  background-color: #f9f9f9; // Un fondo suave para diferenciar la sección
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  color: $color-text-on-light;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 18px;
  color: #666;
  max-width: 600px;
  margin: 0 auto 60px auto;
}

.cruises-grid {
  display: grid;
  // Grid responsive: 3 columnas en escritorio, 2 en tablet, 1 en móvil
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.cruise-card {
  background: $white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  text-align: left;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }
}

.card-image-container {
  height: 200px;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover; // Asegura que la imagen cubra el espacio sin deformarse
}

.card-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1; // Permite que el botón se alinee abajo
}

.card-title {
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: $color-text-on-light;
}

.card-details {
  font-size: 14px;
  color: #888;
  margin: 0 0 24px 0;
}

.card-button {
  display: inline-block;
  background-color: $color-primary;
  color: $white;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  text-align: center;
  margin-top: auto; // Empuja el botón al final de la tarjeta
  transition: background-color 0.2s ease;

  &:hover {
    background-color: darken($color-primary, 8%);
  }
}
</style>
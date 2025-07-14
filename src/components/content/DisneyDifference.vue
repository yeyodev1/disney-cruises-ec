<script setup lang="ts">
// Principio de Componentes Autocontenidos:
// Para contenido estático como este, es una excelente práctica definir los datos
// directamente en el script. Esto hace que el componente sea portátil y fácil de entender.

interface Feature {
  title: string;
  description: string;
  imageUrl: string;
}

const features: Feature[] = [
  {
    title: 'Comodidades de Última Generación',
    description: 'Todos los camarotes cuentan con amenidades modernas y abundante espacio de almacenamiento. Durante tu crucero, estarás rodeado de una meticulosa atención al detalle combinada con encantadores toques de polvo mágico que solo Disney puede crear.',
    imageUrl: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/fantasy/stateroom/DD05c-deluxe-oceanview-stateroom-with-verandah-1-2x3.jpg?2024-07-08T19:31:26+00:00',
  },
  {
    title: 'Legendario Servicio Disney',
    description: 'Desde el atento cuidado de los anfitriones de tu camarote hasta los serviciales meseros que recuerdan tus preferencias gastronómicas—además de todos los toques mágicos personalizados entre medio—un crucero Disney ofrece un servicio galardonado a cada paso.',
    imageUrl: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/fleet-overview/disney-difference/DCL_Wish_1923_0612ZO_0542AS-1-2x3.jpg?2024-05-21T16:11:47+00:00',
  },
  {
    title: 'Entretenimiento de Fama Mundial',
    description: 'Disfruta de espectáculos nocturnos al estilo Broadway; conoce a los queridos personajes de Disney, Pixar, Marvel y Star Wars; diviértete en áreas acuáticas temáticas; y deléitate con espectaculares fiestas en cubierta. En la mayoría de los viajes, déjate deslumbrar por brillantes fuegos artificiales en el mar.',
    imageUrl: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/entertainment/beauty-and-the-beast/011018_1502-2x3.jpg?2022-03-23T06:18:29+00:00',
  },
];
</script>

<template>
  <section class="disney-difference">
    <div class="container">
      <div class="section-header">
        <h2>Experience the Disney Difference</h2>
      </div>
      <div class="features-grid">
        <article v-for="feature in features" :key="feature.title" class="feature-card">
          <div class="feature-card__image-wrapper">
            <img :src="feature.imageUrl" :alt="feature.title" loading="lazy" />
          </div>
          <div class="feature-card__content">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

.disney-difference {
  padding: 60px 0;
  background-color: $white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: $color-accent;
  }
}

// Mobile-First: Una columna por defecto
.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  // Tres columnas en pantallas más grandes
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

  &__image-wrapper {
    aspect-ratio: 4 / 3;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    padding: 24px;

    h3 {
      font-size: 22px;
      font-weight: 600;
      color: $disney-blue-primary;
      margin-bottom: 12px;
    }

    p {
      font-size: 15px;
      line-height: 1.6;
      color: #555;
    }
  }
}
</style>
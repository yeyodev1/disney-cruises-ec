<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CruisesService from '@/api/CruisesService';
import ItineraryCard from '@/components/cards/ItineraryCard.vue';
import type { CruceroStory } from '@/types/cruceros';

// ✅ --- LÓGICA PROFESIONAL CON STORYBLOK --- ✅
// Estado reactivo para los cruceros obtenidos de Storyblok
const cruceros = ref<CruceroStory[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

// Instancia del servicio de cruceros
const cruisesService = new CruisesService();

// Función para cargar los cruceros desde Storyblok
const loadCruceros = async () => {
  try {
    loading.value = true;
    error.value = null;
    
    const response = await cruisesService.getAllCruceros();
    cruceros.value = response.stories || [];
    
    console.log('🚢 Cruceros cargados desde Storyblok:', cruceros.value);
  } catch (err) {
    console.error('❌ Error al cargar cruceros:', err);
    error.value = 'Error al cargar los cruceros. Por favor, intenta de nuevo.';
  } finally {
    loading.value = false;
  }
};

// Cargar cruceros al montar el componente
onMounted(() => {
  loadCruceros();
});
</script>

<template>
  <section class="results-section">
    <!-- Estado de carga -->
    <div v-if="loading" class="loading-state">
      <p>🚢 Cargando cruceros...</p>
    </div>
    
    <!-- Estado de error -->
    <div v-else-if="error" class="error-state">
      <p>❌ {{ error }}</p>
      <button @click="loadCruceros" class="retry-button">Reintentar</button>
    </div>
    
    <!-- Contenido principal -->
    <div v-else>
      <div class="results-header">
        <h3>Mostrando {{ cruceros.length }} de {{ cruceros.length }} cruceros</h3>
      </div>
      
      <div v-if="cruceros.length === 0" class="empty-state">
        <p>No se encontraron cruceros disponibles.</p>
      </div>
      
      <div v-else class="results-list">
        <div
          v-for="crucero in cruceros"
          :key="crucero.id"
          class="crucero-card"
        >
          <h4>{{ crucero.content.titulo }}</h4>
          <p><strong>Barco:</strong> {{ crucero.content.barco }}</p>
          <p><strong>Puerto:</strong> {{ crucero.content.puerto }}</p>
          <p><strong>Región:</strong> {{ crucero.content.region }}</p>
          <p><strong>Slug:</strong> {{ crucero.slug }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

.results-section {
  padding: 40px 20px;
  max-width: 1250px;
  margin: 0 auto;
}

.results-header {
  margin-bottom: 24px;
  color: #666;
}

.results-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

// Estados de la aplicación
.loading-state,
.error-state,
.empty-state {
  text-align: center;
  padding: 60px 20px;
  
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
}

.loading-state {
  color: #007bff;
}

.error-state {
  color: #dc3545;
  
  .retry-button {
    background: #007bff;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    
    &:hover {
      background: #0056b3;
    }
  }
}

.empty-state {
  color: #6c757d;
}

// Tarjetas de crucero
.crucero-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
  
  h4 {
    color: #2c3e50;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
    border-bottom: 2px solid #007bff;
    padding-bottom: 8px;
  }
  
  p {
    margin-bottom: 8px;
    color: #555;
    
    strong {
      color: #2c3e50;
      font-weight: 600;
    }
  }
}

// Responsive design
@media (max-width: 768px) {
  .results-section {
    padding: 20px 16px;
  }
  
  .crucero-card {
    padding: 16px;
    
    h4 {
      font-size: 18px;
    }
  }
  
  .loading-state,
  .error-state,
  .empty-state {
    padding: 40px 16px;
    
    p {
      font-size: 16px;
    }
  }
}
</style>
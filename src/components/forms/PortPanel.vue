<script setup lang="ts">
import { computed } from 'vue';
import { allDestinations } from '@/data/destinations';

const emit = defineEmits(['close', 'select-port']);

// Lógica para obtener una lista de puertos ÚNICA y ordenada
const uniquePorts = computed(() => {
  // 1. Creamos un Set para guardar solo los valores únicos de la propiedad 'PUERTO'.
  const ports = new Set(allDestinations.map(d => d.PUERTO));
  // 2. Convertimos el Set de nuevo a un Array y lo ordenamos alfabéticamente.
  return [...ports].sort();
});

const selectPort = (port: string) => {
  console.log('Puerto seleccionado:', port);
  emit('close');
}
</script>

<template>
  <div class="port-panel">
    <div class="panel-header">
      <span class="panel-label">PUERTOS DE SALIDA</span>
      <button class="clear-btn" @click="emit('close')">Cerrar</button>
    </div>
    <div class="panel-body">
      <ul class="ports-list">
        <li v-for="port in uniquePorts" :key="port">
          <a href="#" class="port-link" @click.prevent="selectPort(port)">
            {{ port }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

.port-panel {
  background: $white;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  width: 400px; // Un panel más angosto es suficiente
  max-width: 90vw;
  color: $color-text-on-light;
}

.panel-header {
  /* ... (estilos idénticos a los otros paneles) ... */
}

.panel-label,
.clear-btn {
  /* ... (estilos idénticos a los otros paneles) ... */
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  border-bottom: 1px solid #eee
}

.panel-label {
  font-size: 12px;
  font-weight: 600;
  color: #888;
  letter-spacing: 1px
}

.clear-btn {
  background: 0 0;
  border: none;
  color: $color-primary;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer
}


.panel-body {
  padding: 16px;
  max-height: 400px;
  overflow-y: auto;
}

.ports-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.port-link {
  display: block;
  padding: 12px 16px;
  color: $color-text-on-light;
  text-decoration: none;
  font-size: 16px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f5f6f7;
    color: $color-primary;
  }
}
</style>
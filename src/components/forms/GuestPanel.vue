<script setup lang="ts">
import { ref, watch, type PropType } from 'vue';

// 1. Definimos las propiedades que este componente recibe de su padre
const props = defineProps({
  initialAdults: {
    type: Number as PropType<number>,
    required: true
  },
  initialChildren: {
    type: Number as PropType<number>,
    required: true
  }
});

// 2. Definimos los eventos que puede emitir
const emit = defineEmits(['update:guests', 'close']);

// 3. Estado local para los contadores
const adults = ref(props.initialAdults);
const children = ref(props.initialChildren);

// Funciones para modificar los contadores con límites
const increment = (type: 'adults' | 'children') => {
  if (type === 'adults' && adults.value < 9) adults.value++;
  if (type === 'children' && children.value < 9) children.value++;
};

const decrement = (type: 'adults' | 'children') => {
  if (type === 'adults' && adults.value > 1) adults.value--; // Mínimo 1 adulto
  if (type === 'children' && children.value > 0) children.value--;
};

// 4. Observador: Cuando los contadores cambian, emite un evento al padre
watch([adults, children], ([newAdults, newChildren]) => {
  emit('update:guests', { adults: newAdults, children: newChildren });
});
</script>

<template>
  <div class="guest-panel">
    <div class="panel-body">
      <div class="counter-row">
        <span class="counter-label">Adultos</span>
        <div class="counter-controls">
          <button @click="decrement('adults')" :disabled="adults <= 1">-</button>
          <span>{{ adults }}</span>
          <button @click="increment('adults')" :disabled="adults >= 9">+</button>
        </div>
      </div>
      <div class="counter-row">
        <span class="counter-label">Niños (0-17)</span>
        <div class="counter-controls">
          <button @click="decrement('children')" :disabled="children <= 0">-</button>
          <span>{{ children }}</span>
          <button @click="increment('children')" :disabled="children >= 9">+</button>
        </div>
      </div>
    </div>
    <div class="panel-footer">
      <button class="done-btn" @click="emit('close')">Hecho</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

.guest-panel {
  background: $white;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  width: 350px;
  color: $color-text-on-light;
}

.panel-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.counter-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.counter-label {
  font-size: 16px;
  font-weight: 500;
}

.counter-controls {
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #ccc;
    background-color: $white;
    font-size: 20px;
    font-weight: bold;
    color: $color-primary;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover:not(:disabled) {
      background-color: #f0f0f0;
    }

    &:disabled {
      color: #ccc;
      cursor: not-allowed;
    }
  }

  span {
    font-size: 18px;
    font-weight: 600;
    width: 20px;
    text-align: center;
  }
}

.panel-footer {
  padding: 16px;
  border-top: 1px solid #eee;
  text-align: right;
}

.done-btn {
  background-color: $color-primary;
  color: $white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
}
</style>
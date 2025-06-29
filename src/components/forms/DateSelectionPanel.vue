<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['close', 'clear-filters']);

const generateDates = () => {
  const yearData: { [key: number]: string[] } = {};
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  // --> Meses traducidos para mostrar
  const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  yearData[currentYear] = monthNames.slice(currentMonth);
  yearData[currentYear + 1] = monthNames;
  return yearData;
};

const availableDates = generateDates();
const activeMonth = ref<string | null>(null);

const selectMonth = (year: number, month: string) => {
  activeMonth.value = `${month} ${year}`;
  emit('close');
}
</script>

<template>
  <div class="date-panel">
    <div class="panel-header">
      <span class="panel-label">FECHAS</span>
      <button class="clear-btn" @click="emit('clear-filters')">Limpiar Filtros</button>
    </div>
    <div class="panel-body">
      <p class="panel-question">¿Cuándo te gustaría zarpar?</p>
    <div v-for="(months, year) in availableDates" :key="year" class="year-section">
        <h4 class="year-title">{{ year }}</h4>
        <div class="months-grid">
          <button
            v-for="month in months"
            :key="month"
            class="month-btn"
            @click="selectMonth(Number(year), month)"
          >
            {{ month }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

.date-panel {
  background: $white;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  width: 600px; // Ancho fijo para el panel
  color: $color-text-on-light;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #eee;
}

.panel-label {
  font-size: 12px;
  font-weight: 600;
  color: #888;
  letter-spacing: 1px;
}

.clear-btn {
  background: none;
  border: none;
  color: $color-primary;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.panel-body {
  padding: 24px;
}

.panel-question {
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 24px 0;
}

.year-section {
  &+.year-section {
    margin-top: 24px;
  }
}

.year-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 16px 0;
}

.months-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 12px;
}

.month-btn {
  background-color: #f5f6f7;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: $color-primary;
    color: $color-primary;
  }
}
</style>
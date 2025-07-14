<script setup lang="ts">
const phoneNumber = '593997610852';
const preFilledMessage = 'Hola, estoy interesado en uno de sus cruceros.';

const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(preFilledMessage)}`;
</script>

<template>
  <a
    :href="whatsappUrl"
    class="floating-whatsapp"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    title="Contactar por WhatsApp"
  >
    <i class="fa-brands fa-whatsapp"></i>
  </a>
</template>

<style lang="scss" scoped>
@use '@/styles/index.scss' as *;

.floating-whatsapp {
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 999;
  width: 60px;
  height: 60px;
  background-color: #25D366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(#000000, 0.3);
  text-decoration: none;
  transform: scale(1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(#000000, 0.4);
  }

  i {
    font-size: 2.25rem;
  }
}
</style>
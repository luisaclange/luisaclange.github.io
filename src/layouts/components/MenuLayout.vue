<template>
  <header class="header">
    <div class="container">
      <a class="title">Meu Portfólio</a>
      <div v-if="widthPage >= 768" class="items">
        <a>Sobre</a>
        <a>Formação</a>
        <a>Projetos</a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const widthPage = ref(window.innerWidth);

window.addEventListener('resize', () => {
  widthPage.value = window.innerWidth;
});
</script>

<style scoped>
.header {
  position: fixed;
  width: 100vw;
  z-index: 50;
  height: 6rem;
  background: rgb(20, 20, 27, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.container {
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-weight: 700;
  font-size: 1.75rem;
}

.items {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  font-size: 1.5rem;
}
</style>

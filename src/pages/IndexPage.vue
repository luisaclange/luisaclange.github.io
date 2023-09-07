<template>
  <q-page class="row items-center justify-evenly">
    <section
      class="overflow-hidden relative-position"
      style="width: 100vw; height: 100vh"
    >
      <q-img
        src="../assets/background_home.jpg"
        style="width: 100vw; height: 100vh"
      />
      <div class="background">
        <div class="container">
          <h5>Ops, esta página ainda está em contrução</h5>
          <p>
            Por enquanto esta página não está pronta, mas em breve será
            atualizada
          </p>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts"></script>

<style scoped>
.background {
  position: absolute;
  bottom: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  background-color: rgb(20, 20, 27, 0.9);
  height: 50vh;
  border-radius: 50px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  margin: 0 1rem;
  text-align: center;
  max-width: 1200px;
  width: 100%;
}
</style>

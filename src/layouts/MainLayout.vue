<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <MenuLayout />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import MenuLayout from './components/MenuLayout.vue';
</script>

<script setup lang="ts">
import { Header } from 'src/widgets/header';
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <Header />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

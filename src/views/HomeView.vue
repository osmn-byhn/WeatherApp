<script setup>
  import axios from "axios"
  import { ref, onMounted } from 'vue'
  import { useAPIStore } from '../stores/api-store'
  const store = useAPIStore()

  onMounted(() => {
    store.getLocation()
  })

  
</script>

<template>
  <!--
  <div class="content">
    <h1>Weather for {{ store.city }}</h1>
    <div class="search">
      <input type="search" name="" id="" placeholder="Country or city" v-model="store.city">
      <i class="bi bi-search" @click="store.getCordinate()"></i>
    </div>

  </div>
  -->
  <h1>Deneme</h1>
</template>

<style scoped lang="scss">
  @import '../../public/styles/HomeView.scss';
</style>
<script setup>
  import axios from "axios"
  import { ref, onMounted } from 'vue'
  import Navbar from "../components/desktop/Navbar.vue";
  import City from "../components/City.vue";
  import { useAPIStore } from '../stores/api-store'
  const store = useAPIStore()

  onMounted(() => {
    store.getLocation()
  })

  
</script>

<template>
  <Navbar />
  <City />

  <!--
  <div class="content">
    <h1>Weather for {{ store.city }}</h1>
    <div class="search">
      <input type="search" name="" id="" placeholder="Country or city" v-model="store.city">
      <i class="bi bi-search" @click="store.getCordinate()"></i>
    </div>

  </div>
  -->
  
</template>

<style scoped lang="scss">
  @import '../../public/styles/views/HomeView.scss';
</style>
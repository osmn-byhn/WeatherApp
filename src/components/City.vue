<script setup>
    import { useAPIStore } from '../stores/api-store'
    const store = useAPIStore()
</script>

<template>
    <h1>{{ store.city }}</h1>
    <i :class="store.weatherIcon"></i>
    <h2>Hava durumu: {{ store.celcius }}</h2>
    <h2>Windspeed: {{ store.windspeed }}</h2>

</template>

<style scoped lang="scss">
    @import '../../public/styles/components/City.scss'
</style>
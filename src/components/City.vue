<script setup>
    import { useAPIStore } from '../stores/api-store'
    const store = useAPIStore()
</script>

<template>
    <div class="city-content">
        <ul class="city">
            <li>
                <h1>{{ store.city }}</h1>
            </li>
            <li>
                <i class="bi bi-bookmark-plus-fill"></i>
            </li>
        </ul>
        <ul class="weather-status">
            <li>
                <i :class="store.weatherIcon"></i>
            </li>
            <li>
                <h2>{{ store.celcius }} °C</h2>
            </li>
        </ul>
    </div>
    
    <!--
    <h2>Windspeed: {{ store.windspeed }}</h2>
    -->
</template>

<style scoped lang="scss">
    @import '../../public/styles/components/City.scss'
</style>
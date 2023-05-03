<script setup>
    import { useAPIStore } from '../stores/api-store'
    const store = useAPIStore()
</script>

<template>
    <div class="content">
        <ul>
            <li>
                <h1>{{ store.city }}</h1>
            </li>
            <li>
                <i class="fa-solid fa-plus"></i>
            </li>
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
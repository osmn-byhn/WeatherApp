<script setup>
    import { useAPIStore } from '../stores/api-store'
    const store = useAPIStore()
</script>

<template>
    <div class="wind-content">
        <ul>
            <li>
                <h1>Windspeed</h1>
            </li>
            <li class="value-class">
                <i class="fa-solid fa-wind"></i> 
                <h2>{{ store.windspeed }}</h2>
            </li>
        </ul>
    </div>
    
    <!--
    <h2>Windspeed: {{ store.windspeed }}</h2>
    -->
</template>

<style scoped lang="scss">
    @import '../../public/styles/components/WindSpeed.scss'
</style>
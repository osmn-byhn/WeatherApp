<script setup>
    import { useAPIStore } from '../../stores/api-store'
    import SearchBox from './SearchBox.vue';
    const store = useAPIStore()
</script>

<template>
    <nav>
        <ul>
            <li>
                <h1>
                    <a href="/">WeatherApp</a>
                </h1>
                <ul>
                    <li>
                        <i class="fa-sharp fa-solid fa-magnifying-glass-location" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-location-dot" @click="store.getLocation()"></i>   
                    </li>
                    <li>
                        <i class="fa-solid fa-thumbtack"></i>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
    <SearchBox />
</template>

<style scoped lang="scss">
    @import '../../../public/styles/desktop/Navbar.scss'
</style>
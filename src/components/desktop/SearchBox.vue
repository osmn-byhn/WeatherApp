<script setup>
    import { useAPIStore } from '../../stores/api-store'
    const store = useAPIStore()
    
</script>

<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        <label for="search">
                            Search city or country
                        </label>
                    </h1>
                    <button type="button" class="btn-close" id="search" data-bs-dismiss="modal" aria-label="Close" autofocus></button>
                </div>
                <div class="modal-body">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" v-model="store.city">
                        <button class="btn btn btn-success" type="button" id="button-addon2" @click="store.getCordinate()" data-bs-dismiss="modal">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import '../../../public/styles/desktop/SearchBox.scss'
</style>
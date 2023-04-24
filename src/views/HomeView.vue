<script setup>
  import axios from "axios"
  import { ref } from 'vue';
  const latitude = ref('')
  const longitude = ref('')
  const city = ref('')

  const config = {
    headers: {
      'X-Api-Key': 's5SL05gab6RhqE5d2y+DMQ==A07dstY0pQec3TA5'
      }
  }



  function showPosition(position) {
      latitude.value = position.coords.latitude
      longitude.value = position.coords.longitude
      axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude.value}&longitude=${longitude.value}&current_weather=true&timezone=GMT&daily=temperature_2m_max`)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(err=> console.log(err))
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      const cordinate = "Geolocation is not supported by this browser.";
      console.log(cordinate);
      }
  }

  
  function getCordinate() {
    axios.get(`https://api.api-ninjas.com/v1/geocoding?city=${city.value}`, config)
      .then(function (res) {
        axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${res.data[0].latitude}&longitude=${res.data[0].longitude}&current_weather=true&timezone=GMT&daily=temperature_2m_max`)
        .then(function (response) {
            console.log(response.data);
          })
        .catch(err=> console.log(err))
      })
      .catch(err=> console.log(err))
  }
  

  
  
</script>

<template>
  <div class="content">
    <div class="search">
      <input type="search" name="" id="" placeholder="Country or city" v-model="city">
      <i class="bi bi-search" @click="getCordinate()"></i>
      <i class="bi bi-geo-alt-fill" @click="getLocation()"></i>
    </div>
  </div>
  <p>Weather for {{ city }}</p>
</template>

<style scoped lang="scss">
  @import '../../public/styles/HomeView.scss';
</style>
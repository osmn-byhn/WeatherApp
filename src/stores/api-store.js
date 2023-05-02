import { defineStore } from 'pinia'
import axios from 'axios'

export const useAPIStore = defineStore('store', {
  state: () => ({
    latitude: '',
    longitude: '',
    city: '',
    config: {
      headers: {
        'X-Api-Key': 's5SL05gab6RhqE5d2y+DMQ==A07dstY0pQec3TA5'
      }
    }
  }),
  actions: {
    showPosition(position) {
      this.latitude = position.coords.latitude
      this.longitude = position.coords.longitude
      this.city = 'Your Location'
      axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&current_weather=true&timezone=GMT&daily=temperature_2m_max`)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(err=> console.log(err))
    },
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else { 
        const cordinate = "Geolocation is not supported by this browser.";
        console.log(cordinate);
      }
    },
    getCordinate() {
      axios.get(`https://api.api-ninjas.com/v1/geocoding?city=${this.city}`, this.config)
        .then(function (res) {
          axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${res.data[0].latitude}&longitude=${res.data[0].longitude}&current_weather=true&timezone=GMT&daily=temperature_2m_max`)
          .then(function (response) {
              console.log(response.data);
            })
          .catch(err=> console.log(err))
        })
        .catch(err=> console.log(err))
    }
  },
})
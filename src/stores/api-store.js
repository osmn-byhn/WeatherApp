import { defineStore } from 'pinia'
import axios from 'axios'

export const useAPIStore = defineStore('store', {
  state: () => ({
    latitude: '',
    longitude: '',
    city: '',
    celcius: '',
    windspeed: '',
    weatherCode: '',
    weatherIcon: '',
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
      this.city = ''
      axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&current_weather=true&timezone=GMT&daily=temperature_2m_max`)
      .then((response) => {
        console.log(response.data);
        this.celcius = response.data.current_weather.temperature
        this.windspeed = response.data.current_weather.windspeed
        this.weatherCode = response.data.current_weather.weathercode
        if (this.weatherCode <= 3) {
          this.weatherIcon = 'bi bi-brightness-high-fill'
        }
        else if ( this.weatherCode > 3 && this.weatherCode <= 45) {
          this.weatherIcon = 'bi bi-clouds-fill'
        }
        else if ( this.weatherCode > 45 && this.weatherCode <= 51) {
          this.weatherIcon = 'bi bi-cloud-fog2'
        }
        else if ( this.weatherCode > 51 && this.weatherCode <= 61) {
          this.weatherIcon = 'bi bi-cloud-drizzle-fill'
        }
        else if ( this.weatherCode > 61 && this.weatherCode <= 71) {
          this.weatherIcon = 'bi bi-cloud-lightning-rain-fill'
        }
        else if ( this.weatherCode > 71 && this.weatherCode <= 80) {
          this.weatherIcon = 'bi bi-snow3'
        }
        else if ( this.weatherCode > 80 && this.weatherCode <= 95) {
          this.weatherIcon = 'bi bi-snow2'
        }
        else if ( this.weatherCode > 95) {
          this.weatherIcon = 'bi bi-lightning-fill'
        }
        axios.get(`https://api.api-ninjas.com/v1/reversegeocoding?lat=${this.latitude}&lon=${this.longitude}`, this.config)
        .then((res) => {
          console.log(res.data);
          this.city = res.data[0].name
        })
        .catch(err=> console.log(err))
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
        .then((res) => {
          axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${res.data[0].latitude}&longitude=${res.data[0].longitude}&current_weather=true&timezone=GMT&daily=temperature_2m_max`)
          .then((response) => {
              console.log(response.data);
              this.celcius = response.data.current_weather.temperature
              this.windspeed = response.data.current_weather.windspeed
              this.weatherCode = response.data.current_weather.weathercode
              if (this.weatherCode <= 3) {
                this.weatherIcon = 'bi bi-brightness-high-fill'
              }
              else if ( this.weatherCode > 3 && this.weatherCode <= 45) {
                this.weatherIcon = 'bi bi-clouds-fill'
              }
              else if ( this.weatherCode > 45 && this.weatherCode <= 51) {
                this.weatherIcon = 'bi bi-cloud-fog2'
              }
              else if ( this.weatherCode > 51 && this.weatherCode <= 61) {
                this.weatherIcon = 'bi bi-cloud-drizzle-fill'
              }
              else if ( this.weatherCode > 61 && this.weatherCode <= 71) {
                this.weatherIcon = 'bi bi-cloud-lightning-rain-fill'
              }
              else if ( this.weatherCode > 71 && this.weatherCode <= 80) {
                this.weatherIcon = 'bi bi-snow3'
              }
              else if ( this.weatherCode > 80 && this.weatherCode <= 95) {
                this.weatherIcon = 'bi bi-snow2'
              }
              else if ( this.weatherCode > 95) {
                this.weatherIcon = 'bi bi-lightning-fill'
              }
              console.log(this.weatherCode);
            })
          .catch(err=> console.log(err))
        })
        .catch(err=> console.log(err))
    }
  },
})
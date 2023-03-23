const { createApp } = Vue

createApp({
  data() {
    return {
      randomEmails: []
    }
  },

  mounted () {
    for (let i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
          this.randomEmails.push(response.data.response)
        })
    }
  }
}).mount('#app')

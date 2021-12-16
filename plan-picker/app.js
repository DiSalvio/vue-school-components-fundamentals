const app = Vue.createApp({
})
.component('plan-picker', {
  template: '#plan-picker-template',
  data() {
    return {
      plans: [
        'The Hacker',
        'The Single',
        'The Curious',
        'The Addict'
      ]
    }
  }
})

.component('plan', {
  template: '#plan-template',
  props: {
    name: {type: String, required: true},
    price: Number
  }
})
.mount('#app')

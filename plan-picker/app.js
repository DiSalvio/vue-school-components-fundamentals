let planComponent = {
  template: '#plan-template',
  props: {
    name: {type: String, required: true},
    price: Number
  }
}

let planPickerComponent = {
  template: '#plan-picker-template',
  components: { 'plan': planComponent },
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
}

const app = Vue.createApp({
  components: { 'plan-picker': planPickerComponent },
})
.mount('#app')

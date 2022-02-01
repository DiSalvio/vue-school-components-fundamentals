let planPickerItemComponent = {
  template: '#plan-picker-item-template',
  props: {
    name: {type: String, required: true},
    price: Number,
    selected: {type: Boolean, default: false, required: true},
  },
  methods: {
    select(){
      this.$emit('select', this.name)
    }
  }
}

let planPickerComponent = {
  template: '#plan-picker-template',
  components: { 'plan-picker-item': planPickerItemComponent },
  data() {
    return {
      plans: [
        'The Hacker',
        'The Single',
        'The Curious',
        'The Addict'
      ],
      selectedPlan: null
    }
  },
  methods: {
    selectPlan(plan){
      this.selectedPlan = plan
    }
  }
}

const app = Vue.createApp({
  components: { 'plan-picker': planPickerComponent },
})
.mount('#app')

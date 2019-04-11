import Vue from 'vue'
import App from './App.vue'
import Table from './components/Table.vue'
import Tooltable from './components/Toolbox.vue'
import { Chrome } from 'vue-color'

Vue.component("chrome-picker", Chrome)
Vue.component("toolbox", Tooltable)

const tableVue = new Vue({
  el: '#table',
  render: h => h(Table),
  components: {
    'Chrome': Chrome
  }
})

console.log(tableVue)
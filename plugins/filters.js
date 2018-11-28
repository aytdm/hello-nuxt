import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('YYYY/MM/DD HH:mm')
  }
})

Vue.filter('description', function (value) {
  if (value) {
    return value.slice(0, 100) + '...'
  }
})

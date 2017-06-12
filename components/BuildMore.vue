<template lang="pug">
.copy The {{ type }} will need to add over 
  b {{ homes }} 
  | new apartment homes each year on average to keep up with demand. The industry averaged just  
  b {{ completions }} 
  | {{ wording }} from 2011-2016 
</template>

<script>
let numeral = require('numeral')
export default {
  props: [ 'choice' ],

  methods: {
    populate () {

      console.log(this.choice.type)

      let json = {}

      switch (this.choice.type) {
        case 'national':
          json = require('../store/US Building 2.json').data
          this.homes = numeral(json[2017][1]).format('0,0a')
          this.completions = numeral(json[2017][3]).format('0,0a')
          this.type = 'country'
          break
        case 'state':
          json = require('../store/State Building Needed.json')
          this.homes = numeral(json.data[2017][json.labels.indexOf(this.choice.value)]).format('0,0a')
          json = require('../store/State Building Current.json')
          this.completions = numeral(json.data[2017][json.labels.indexOf(this.choice.value)]).format('0,0a')
          this.type = 'state'
          this.wording = 'permits'
          break
      }
    },
  },

  mounted () {
    this.populate()
  },
  watch: {
    '$route' () {
      this.populate()
    }
  },
  data () {
    return {
      homes: 0,
      completions: 0,
      type: 'country',
      wording: 'completions',
    }
  }
}
</script>

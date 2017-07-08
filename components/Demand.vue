<template lang="pug">
doctype
p(v-in-viewport) New research shows that demand for apartments is on the rise.  Whether it's young professionals, couples, families or empty nesters, 
  span(v-if="type === 'national'") the country will see a demand for an additional 
    span {{ households }} 
    | new apartment households 
    span by 2030
  span(v-if="type === 'state'") the state will add 
    span {{ households }} 
    | new apartment households 
    span by 2030
  span(v-if="type === 'metro'") the metro will add 
    span {{ households }} 
    | new apartment households 
    span by 2030
  span(v-if="type === 'district'") the district will add 
    span {{ households }} 
    | new apartment households 
    span by 2030
</template>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
  props: [ 'type', 'value' ],
  methods: {
    populate () {

      let json = {}
      let index = false
      const numeral = window.numeral

      switch (true) {

        case (this.type === 'national'):
          json = require('../static/US Units Needed.json').data
          this.households = numeral(json['Total U.S.'][0]).format('0.0a')
          break

        case (this.type === 'state'):
          json = require('../static/State New Apt HHs Per Year.json')
          index = json.labels.indexOf(this.value)
          this.households = numeral(json.data[""][index]).format('0,0a')
          break

        case (this.type === 'metro'):
          json = require('../static/Metros Units Needed.json')
          this.households = numeral(json.data[this.value][0]).format('0,0a')
          break
      }

    }
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
      households: 0
    }
  }
}

</script>

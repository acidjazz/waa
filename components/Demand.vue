
// Between now and 2030, [geography name] will need to build [number] new apartment homes each year to meet demand. However, producing enough new apartments to meet demand requires new development approaches, more incentives and fewer restrictions
<template lang="pug">
doctype
p(v-in-viewport)  Between now and 2030, 

  span(v-if="type === 'national'") the country will need to build 
    span {{ households }} 
    | new apartment homes each year to meet demand. 
  span(v-else) {{ value }} will add 
    span {{ households }} 
    | new apartment homes each year to meet demand. 
  //span(v-if="type === 'state'") this state will add 
    span {{ households }} 
    | new apartment homes each year to meet demand 
  //span(v-if="type === 'metro'") this metro will add 
    span {{ households }} 
    | new apartment homes each year to meet demand 
  //span(v-if="type === 'district'") this district will add 
    span {{ households }} 
    | new apartment homes each year to meet demand 
    //| However, new housing approaches are needed as only an average of {{ needed }} apartment homes were built each year between 2011 - 2016.
  | However, producing enough new apartments to meet demand requires new development approaches, more incentives and fewer restrictions
</template>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
import numeral from 'numeraljs'
export default {
  directives: { 'in-viewport': inViewportDirective },
  props: [ 'type', 'value' ],
  methods: {
    populate () {

      let json = {}
      let index = false
      // const numeral = window.numeral

      switch (true) {

        case (this.type === 'national'):
          json = require('../static/US Units Needed.json').data
          this.households = numeral(json['Total U.S.'][0]).format('0.0a')
          this.needed = numeral(json['Total U.S.'][1]).format('0%')
          break

        case (this.type === 'state'):
          json = require('../static/State New Apt HHs Per Year.json')
          index = json.labels.indexOf(this.value)
          this.households = numeral(json.data[""][index]).format('0,0a')
          this.needed = numeral(json.data["Needed per Year"][index]).format('0,0a')
          break

        case (this.type === 'metro'):
          json = require('../static/Metros Units Needed.json')
          this.households = numeral(json.data[this.value][0]).format('0,0a')
          this.needed = numeral(json.data[this.value][1]).format('0%')
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
    this.populate()
    if (this.type === 'state') {
      return {
        title: this.value + ' - Learn about the demand for apartments in your area',
        description: 'The state of ' + this.value + ' will see a demand for an additional ' + this.households + ' new apartment homes by 2030',
        households: 0,
        needed: 0,
      }
    }
    if (this.type === 'metro') {
      return {
        title: this.value + ' - Learn about the demand for apartments in your area',
        description: this.value + ' will see a demand for an additional ' + this.households + ' new apartment homes by 2030',
        households: 0,
        needed: 0,
      }
    }
    return {
      title: 'Learn about the demand for apartments in your area',
      description: 'This country will see a demand for an additional ' + this.households + ' new apartment homes by 2030',
      households: 0,
      needed: 0,
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:url', property: 'og:url', content: this.$route.path },
        { hid: 'og:title', property: 'og:title', content: this.title },
        { hid: 'og:description', property: 'og:description', content: this.description },
        { hid: 'twitter:title', name: 'twitter:title', content: this.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.description },
      ]
    }
  },
}

</script>

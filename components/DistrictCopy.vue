<template lang="pug">
.DistrictCopy
  .inner
    .copy did you know?
    .copy Just 100 apartments in your district creates a powerful economic benefit.
  .pointers
    .pointer
      .icon.icon-residents
      .copy The residents
      .copy Who live in those 
        b 100 apartments 
        | annually generate an additional 
        b {{ residents.impact }} 
        | for the local economy and support 
        b {{ residents.jobs }} jobs.
    .pointer
      .icon.icon-operation
      .copy The Operation
      .copy of those
        b 100 apartments 
        | anually generates an extra 
        b {{ operations.impact }}  
        | in economic contribution and supports  
        b {{ operations.jobs }} jobs.
    .pointer
      .icon.icon-graph
      .copy The Construction
      .copy of 
        b 100 new apartments 
        | generates 
        b {{ construction.impact }}  
        | in economic contribution to the state economy and supports 
        b {{ construction.jobs }} jobs.
    .clear
</template>

<script>
import filtermixin from '~plugins/filter-mixin.js'
let numeral = require('numeral')
import datas from '../store/district economic impact.json'
export default {
  props: ['district'],
  mixins: [ filtermixin ],
  mounted () {
    this.populate()
  },
  watch: {
    '$route' (newVal, oldVal) {
      this.populate()
    }
  },
  methods: {
    populate () {
      let data = datas.data[this.choice().value]
      this.operations.impact = numeral(data[0]).format('$0.00a')
      this.operations.jobs = numeral(data[1]).format('0,0')
      this.residents.impact = numeral(data[2]).format('$0.00a')
      this.residents.jobs = numeral(data[3]).format('0,0')
      this.construction.impact = numeral(data[4]).format('$0.00a')
      this.construction.jobs = numeral(data[5]).format('0,0')
    }
  },
  data () {
    return {
      operations: {
        impact: 0,
        jobs: 0,
      },
      residents: {
        impact: 0,
        jobs: 0,
      },
      construction: {
        impact: 0,
        jobs: 0,
      }
    }
  }
}

</script>

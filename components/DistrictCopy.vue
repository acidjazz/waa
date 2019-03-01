<template lang="pug">
.DistrictCopy
  .inner
    .copy did you know?
    .copy Just 100 apartments in your district creates a powerful economic benefit.
  .pointers
    .pointer
      .icon.icon-residents
      .copy The Residents
      .copy who live in those&nbsp;
        b 100 apartments&nbsp;
        | annually generate&nbsp;
        b {{ residents.impact }}&nbsp;
        | in economic contribution to the state economy and support&nbsp;
        b {{ residents.jobs }} jobs.
    .pointer
      .icon.icon-operation
      .copy The Operation
      .copy of those&nbsp;
        b 100 apartments&nbsp;
        | annually generates&nbsp;
        b {{ operations.impact }}&nbsp;
        | in economic contribution to the state economy and supports
        b &nbsp;{{ operations.jobs }} jobs.
    .pointer
      .icon.icon-graph
      .copy The Construction
      .copy of&nbsp;
        b 100 new apartments
        | &nbsp;generates&nbsp;
        b {{ construction.impact }}
        | &nbsp;in economic contribution to the state economy and supports&nbsp;
        b {{ construction.jobs }} jobs.
    .clear
</template>

<script>
import filtermixin from '@/plugins/filter-mixin.js'
import datas from '../static/district economic impact.json'
export default {
  props: ['district'],
  mixins: [ filtermixin ],
  mounted () {
    this.populate()
  },
  watch: {
    '$route' () {
      this.populate()
    }
  },
  methods: {
    populate () {
      const numeral = window.numeral
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

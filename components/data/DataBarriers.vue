<template lang="pug">
#DataBarriers
  DataName(:area="area")
  .flex.flex-row.flex-wrap
    .flex.w-1_4(v-for="index in restrictionMetro")
      .text-bolder.text-right.w-8.mr-4(:class="`text-${color(index.Restriction_Index)}`")
        no-ssr
          VueCountUp(:endVal="index.Restriction_Index")
      .metro {{ index.Metro_Area }}

</template>


<script>
import data from '@/mixins/data'
import DataName from '@/components/data/DataName'
export default {
  components: { DataName },
  mixins: [ data ],
  data () {
    return {
      colors: [
        {
          name: 'bpink',
          min: 5,
        },{
          name: 'orange',
          min: 2,
        }, {
          name: 'mountainmeadow',
          min: -10,
        },
      ]
    }
  },
  methods: {
    color (value) { return this.colors.find(c => value >= c.min).name },
  },
}
</script>

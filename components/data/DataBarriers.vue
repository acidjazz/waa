<template lang="pug">
#DataBarriers
  DataName(:area="area",name="national data")
  .flex.flex-col.lg_flex-row
    .w-full.lg_w-1_3
      .text-bolder.text-4xl Barriers to new apartments
      .text-2xl.font-bold.my-4 Multifamily supply restrictions index
      .text Based on specific factors like local regulations and available land to develop, the Barriers to Apartment Construction Index ranks 50 metro areas on how hard it is to build new apartments. See how your city stacks up.
      RestrictionIndex.mt-4(
        v-if="area.type === 'metro'",
        :metro="cmetro",
        :color="color(cmetro.Restriction_Index)")
    .w-full.lg_w-2_3.mt-8.lg_mt-0
      .flex.flex-col.lg_flex-row.justify-between.mb-4.text-sm
        span
          i.mdi.mdi-circle.mx-4.text-bpink
          span.text-alum Difficult Entry Point
        span
          i.mdi.mdi-circle.mx-4.text-orange
          span.text-alum Moderate Entry Point
        span
          i.mdi.mdi-circle.mx-4.text-mountainmeadow
          span.text-alum Easier Entry Point
      .flex.flex-row.flex-wrap
        .flex.w-1_2.lg_w-1_4(v-for="metro in sorted")
          .text-bolder.text-right.w-8.mr-4.tran-text-4s(:class="`text-${color(val(metro.Restriction_Index))}`")
            no-ssr
              VueCountUp(:endVal="val(metro.Restriction_Index)",:options="{decimalPlaces: 1}")
          span(:class="{'text-bolder': metro.Metro_Area === area.value}") {{ metro.Metro_Area }}

</template>


<script>
import data from '@/mixins/data'
import inViewport from 'vue-in-viewport-mixin'
import DataName from '@/components/data/DataName'
import RestrictionIndex from '@/components/data/RestrictionIndex'
export default {
  components: { DataName, RestrictionIndex },
  mixins: [ data, inViewport ],
  data () {
    return {
      fire: false,
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
  computed: {
    sorted () {
      return Object
        .values(this.restrictionMetro)
        .sort((a, b) => a.Restriction_Index <= b.Restriction_Index ? 1 : -1)
    },
    cmetro () {
      return this.restrictionMetro[this.area.key]
    },
  },
  watch: {
    'inViewport.now' (visible) {
      if (visible) return this.fire = true
      if (!visible) return this.fire = false
    }
  },
  methods: {
    color (value) { return this.colors.find(c => value >= c.min).name },
    val (value) { return  this.fire ? value : 0 },
  },
}
</script>

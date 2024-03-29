<template>
<div id="DataBarriers">
  <DataName :area="area" name="metro data"></DataName>
  <div class="flex flex-col lg_flex-row justify-between">
    <div class="w-full lg_w-1_4 flex flex-col lg_mr-8">
      <div class="text-bolder text-4xl">Barriers to New Apartments</div>
      <div class="text-2xl font-bold my-4">Multifamily supply restrictions index</div>
      <div class="text lg_mr-4">Development costs and local regulations are making it difficult to build new apartments everywhere, but some areas are harder than others. See how your metro stacks up.</div>
      <RestrictionIndex class="mt-4" v-if="area.type === 'metro'" :metro="cmetro" :color="color(cmetro.Restriction_Index)"></RestrictionIndex>
    </div>
    <div class="w-full lg_w-3_4 mt-8 lg_mt-0">
      <div class="flex flex-col lg_flex-row mb-8 text-sm"><span><i class="mdi mdi-circle mr-4 text-bpink"></i><span class="text-alum">Difficult Entry Point</span></span><span><i class="mdi mdi-circle mr-4 lg_ml-4 text-orange"></i><span class="text-alum">Moderate Entry Point</span></span><span><i class="mdi mdi-circle mr-4 lg_ml-4 text-mountainmeadow"></i><span class="text-alum">Easier Entry Point</span></span></div>
      <div class="flex flex-row flex-wrap">
        <div v-for="metro in sorted" :key="metro.Metro_Area" class="flex w-1_2 lg_w-1_4 mb-4">
          <div class="text-bolder w-8 mr-4 tran-text-4s" :class="`text-${color(val(metro.Restriction_Index))}`">
            <client-only>
              <VueCountUp :endVal="val(metro.Restriction_Index)" :options="{decimalPlaces: 1}"></VueCountUp>
            </client-only>
          </div>
          <nuxt-link :to="`/data/${metro.Metro_Area.replace(/ /g, '_')}`" :class="{'text-bolder underline': metro.Metro_Area === area.value}">{{ metro.Metro_Area }}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</div>
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

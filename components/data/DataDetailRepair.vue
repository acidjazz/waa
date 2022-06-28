<template>
  <div id="DataDetailRepair">
    <div class="text-bolder text-6xl print:text-3xl">
      <VueCountUp class="print:hidden" :end-val="count_val(Math.round(before_eighty*100))" :options="{}" />
      <span class="hidden print:inline">{{ before_eighty*100 | numeral('0,0a') }}</span>%
      <div class="text-bolder text-2xl print:text-lg">{{ copy }}</div>
    </div>
    <div class="mt-4 mb-8 print:my-2 print:text-sm">
      The renovation and repair of apartments helps preserve
      {{ loc_copy }}’s
      older more affordable units, contributing
      <div class="data-val">{{ contribution.Repair_Economic_Impact | numeral('$0,0a') }}</div>to the local economy annually and creating
      <div class="data-val">{{ contribution.Repair_Employment_Impact | numeral('0,0a') }}</div>jobs.
    </div>
  </div>
</template>

<script>
import count from '@/mixins/count'
import data from '@/mixins/data'
export default {
  mixins: [ count, data ],
  computed:{
    stock_sum () { return Object.values(this.stock).slice(1).reduce((a,b) => a + b) },
    before_eighty () { return (this.stock['Before_1959'] + this.stock['1960_1979']) / this.stock_sum },
    copy () {
      return this.loc_copy === 'the country' ?
        'Share of U.S. Apartments Built Before 1980' :
        `Share of ${this.loc_copy}${this.plural} Apartments Built Before 1980`
    },
    plural () { return this.loc_copy.substr(-1) === 's' ? "'" : "'s" },
  },
}
</script>

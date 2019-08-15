<template lang="pug">
#DataDetailRepair
  .text-bolder.text-6xl.print_text-3xl
    VueCountUp.print_hidden(:endVal="count_val(Math.round(before_eighty*100))", :options="{}")
    span.hidden.print_inline {{ before_eighty*100 | numeral('0,0a') }}
    | %
    .text-bolder.text-2xl.print_text-lg {{ copy }}
  .my-8.print_my-2.print_text-sm
    | The renovation and repair of apartments helps preserve
    | {{ loc_copy }}’s
    | older more affordable units, contributing
    .data-val {{ contribution.Repair_Economic_Impact | numeral('$0,0a') }}
    | to the local economy annually and creating
    .data-val {{ contribution.Repair_Employment_Impact | numeral('0,0a') }}
    | jobs.
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
      return this.loc_copy === 'The country' ?
        'Share of U.S. Apartments Built Before 1980' :
        `Share of ${this.loc_copy}${this.plural} Apartments Built Before 1980`
    },
    plural () { return this.loc_copy.substr(-1) === 's' ? "'" : "'s" }
  },
}
</script>

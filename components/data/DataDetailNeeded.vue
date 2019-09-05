<template lang="pug">
#DataDetailNeeded.text-center
  .text-bolder.text-6xl.print_hidden
    VueCountUp(:endVal="count_val(building, '0,0a')",:options="count_opts(building, '', 0, '0,0a')")
  .text-bolder.text-3xl.hidden.print_block {{ building | numeral('0,0a') }}
  .text-bolder.text-2xl New Apartments Needed Annually
  .my-8.print_my-2.print_text-sm
  .text-lg.print_text-sm.mb-2.print_mb-0 Apartment demand is growing and the industry needs to keep up. However, producing enough new apartments to meet demand requires new development approaches, more incentives and fewer restrictions.

  .text-lg.print_text-sm(v-if="area.district")
    | The construction of every 100 apartment units in your district contributes
    .data-val ${{ contribution.Construction_Economic_Impact | numeral }}
    | and
    .data-val {{ contribution.Construction_Employment_Impact | numeral('0,0a') }}
    | jobs to the state economy.

  .text-lg.print_text-sm(v-else)
    | {{ loc_copy_caps }}
    | needs to build
    .data-val {{ building | numeral('0,0a') }}
    | new apartment homes each year to meet demand.  Apartment construction contributes
    .data-val ${{ contribution.Construction_Economic_Impact | numeral }}
    | to {{ loc_copy }}'s economy annually, creating
    .data-val {{ contribution.Construction_Employment_Impact | numeral('0,0a') }}
    | jobs.




</template>

<script>
import count from '@/mixins/count'
import data from '@/mixins/data'
export default { mixins: [ count, data ], }
</script>

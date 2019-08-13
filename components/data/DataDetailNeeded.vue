<template lang="pug">
#DataDetailNeeded
  .text-bolder.text-6xl.print_hidden
    VueCountUp(:endVal="count_val(building, '0,0a')",:options="count_opts(building, '', 0, '0,0a')")
  .text-bolder.text-3xl.hidden.print_block {{ building | numeral('0,0a') }}
  .text-bolder.text-2xl New Apartments Needed Annually
  .my-8.print_my-2.print_text-sm
    | {{ loc_copy }}
    | needs to build
    .data-val {{ building | numeral('0,0a') }}
    | new apartment homes each year to meet demand.  Apartment construction contributes
    .data-val ${{ contribution.Construction_Economic_Impact | numeral }}
    | to {{ loc_copy }}'s economy annually, creating
    .data-val {{ contribution.Construction_Employment_Impact | numeral('0,0a') }}
    | jobs
</template>

<script>
import count from '@/mixins/count'
import data from '@/mixins/data'
export default { mixins: [ count, data ], }
</script>

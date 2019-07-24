<template lang="pug">
#DataDetailNeeded
  .text-trueblue.text-bolder.text-3xl.mt-8
    VueCountUp(:endVal="count_val(building, '0,0a')",:options="count_opts(building)")
  .text-2xl.font-bold.text-steel New Apartments Needed Annually
  .my-8
    | {{ loc_copy }}
    | needs to build
    .data-val {{ building | numeral }}
    | new apartment homes each year to meet demand.  Apartment construction contributes
    .data-val ${{ contribution.Construction_Economic_Impact | numeral }}
    | to {{ loc_copy }}'s economy annually, creating
    .data-val ${{ contribution.Construction_Employment_Impact | numeral }}
    | jobs
</template>

<script>
import count from '@/mixins/count'
import data from '@/mixins/data'
export default { mixins: [ count, data ], }
</script>

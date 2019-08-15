<template lang="pug">
#DataDetailResidents.lg_h-64.print_h-48
  .text-bolder.text-6xl.print_hidden: VueCountUp(:endVal="count_val(residents)",:options="count_opts(residents)")
  .text-bolder.text-3xl.hidden.print_block {{ residents | numeral }}
  .text-bolder.text-2xl Apartment Residents
  .my-6.lg_mt-6.print_mt-2.print_my-2.print_text-sm
    | Spending from {{ loc_copy }}'s apartment residents contributes
    .data-val ${{ contribution.Renter_Economic_Impact | numeral }}
    | to the local economy each year (including
    .data-val ${{ contribution.Spending_Economic_Impact | numeral }}
    | in taxes), creating
    .data-val {{ contribution.Renter_Employment_Impact | numeral('0,0a') }}
    | jobs.
</template>

<script>
import count from '@/mixins/count'
import data from '@/mixins/data'
export default { mixins: [ count, data ] }
</script>

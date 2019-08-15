<template lang="pug">
#DataDetailsHomes.lg_h-64.print_h-48
  .text-bolder.text-6xl.print_hidden: VueCountUp(:endVal="count_val(apartments)",:options="count_opts(apartments)")
  .text-bolder.text-3xl.hidden.print_block {{ apartments | numeral }}
  .text-bolder.text-2xl Apartment Homes
  .my-6.lg_mt-6.print_mt-2.print_my-2.print_text-sm
    | The operation of {{ loc_copy }}'s apartment homes contributes
    .data-val ${{ contribution.Property_Economic_Impact | numeral }}
    | to the local economy each year (including
    .data-val ${{ contribution.Tax_Economic_Impact | numeral }}
    | in property taxes), creating
    .data-val {{ contribution.Property_Employment_Impact | numeral('0,0a') }}
    | jobs.
</template>


<script>
import count from '@/mixins/count'
import data from '@/mixins/data'
export default { mixins: [ count, data ], }
</script>

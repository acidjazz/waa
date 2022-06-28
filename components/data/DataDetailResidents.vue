<template>
  <div id="DataDetailResidents" class="lg:h-64 print:h-48 flex flex-col">
    <div class="text-bolder text-6xl print:hidden">
      <VueCountUp :end-val="count_val(residents)" :options="count_opts(residents)" />
    </div>
    <div class="text-bolder text-3xl hidden print:block">{{ residents | numeral }}</div>
    <div class="text-bolder text-2xl">Apartment Residents</div>
    <div class="my-6 lg:mt-6 print:mt-2 print:my-2 print:text-sm">
      Spending from {{ loc_copy }}'s apartment residents contributes
      <div class="data-val">${{ contribution.Renter_Economic_Impact | numeral }}</div>to the local economy each year (including
      <div class="data-val">${{ contribution.Spending_Economic_Impact | numeral }}</div>in taxes), creating
      <div class="data-val">{{ contribution.Renter_Employment_Impact | numeral('0,0a') }}</div>jobs.
    </div>
  </div>
</template>

<script>
import count from '@/mixins/count'
import data from '@/mixins/data'
export default { mixins: [ count, data ] }
</script>

<template>
  <div class="lg:mt-24 mt-16 pt-24 bg-trantrue text-center text-white pb-64 -mb-48 print:m-0 print:p-4 print:mb-0">
    <div v-if="area.metro" class="font-os uppercase">{{ metro_msa.MSA }}</div>
    <div v-if="area.district" class="font-os uppercase">{{ area.state_value }}</div>
    <div class="text-5xl mb-4 text-bolder ani-sit print:text-4xl print:mb-1">{{ area.value }}</div>
    <div class="lg:max-w-lg text-2xl mx-auto ani-sit ani-d-1 mb-8 px-2 print:mb-2">
      <span v-if="area.value !== 'National'">{{ area.value }} a</span>
      <span v-else>A</span>partments and their residents contribute
      <span v-if="contribution">
        <span class="text-bolder" title="Total_Economic_Impact">${{ impact | numeral }}</span>
      </span>
      to the
      <span>{{ area.type }}</span>
      economy annually<span v-if="jobs">, supporting
        <span class="text-bolder" title="Total_Employment_Impact">{{ jobs | numeral }}</span>
        jobs.</span><span v-else>.</span>
      <span v-if="state_impact">*</span>
    </div>
  </div>
</template>

<script>
import data from '@/mixins/data'
import count from '@/mixins/count'
export default {
  mixins: [ data, count ],
  computed: {
    impact () { return this.contribution.Total_Economic_Impact.replace(/\$/, '') },
    jobs () { return this.contribution.Total_Employment_Impact },
  },
}
</script>

<template lang="pug">
.lg_mt-24.mt-16.pt-24.bg-trantrue.text-center.text-white.pb-64.-mb-48.print_m-0.print_p-4.print_mb-0
  .font-os.uppercase(v-if="area.metro") {{ area.state }}
  .font-os.uppercase(v-if="area.district") {{ area.state }}
  .text-5xl.mb-4.text-bolder.ani-sit.print_text-4xl {{ area.value }}
  .lg_w-128.text-2xl.mx-auto.ani-sit.ani-d-1.mb-8.px-2.print_mb-2
    | {{ area.value }} apartments and their residents contribute
    |
    no-ssr(v-if="contribution")
      span.text-bolder(title="Total_Economic_Impact"): VueCountUp(:endVal="count_val(impact)",:options="count_opts(impact, '$')")
    |
    | to the
    |
    span {{ area.type }}
    |
    | economy annually
    no-ssr(v-if="jobs")
      | , supporting
      |
      span.text-bolder(title="Total_Employment_Impact"): VueCountUp(:endVal="count_val(jobs)",:options="count_opts(jobs)")
      |
      | jobs.
    span(v-else) .
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

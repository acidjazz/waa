<template lang="pug">
.mt-24.pt-24.bg-trantrue.text-center.text-white.pb-64.-mb-48
  .font-os.uppercase(v-if="area.metro") {{ area.state }}
  .font-os.uppercase(v-if="area.district") {{ area.state }}
  .text-5xl.mb-4.font-bolder.ani-sit {{ area.location }}
  .lg_w-128.text-lg.mx-auto.ani-sit.ani-d-1.mb-8.px-2
    | {{ area.location }} apartments and their residents contribute
    |
    no-ssr(v-if="contribution")
      span.text-bolder(title="Total_Economic_Impact / 365"): VueCountUp(:endVal="count_val(impact)",:options="count_opts(impact, '$')")
    |
    | to the
    |
    span {{ area.type }}
    |
    | economy annually
    no-ssr(v-if="jobs")
      | , supporting
      |
      span.text-bolder(title="Total_Employment_Impact / 365"): VueCountUp(:endVal="count_val(jobs)",:options="count_opts(jobs)")
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
    impact () { return this.contribution.Total_Economic_Impact.replace(/\$/, '') / 365 },
    jobs () { return this.contribution.Total_Employment_Impact / 365 },
  },
  mounted () {
    console.log()
  },

}
</script>

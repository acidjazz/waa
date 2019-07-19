<template lang="pug">
.mt-32.pt-16.bg-trantrue.text-center.text-white.pb-64.-mb-48
  .text-5xl.mb-4.font-bolder.ani-sit {{ area.location }}
  .lg_w-128.text-lg.mx-auto.ani-sit.ani-d-1.mb-8.px-2
    | {{ area.location }} apartments and their residents contribute
    |
    no-ssr(v-if="contribution")
      span.text-bolder: VueCountUp(:endVal="count_val(contribution / 365)",:options="count_opts(contribution / 365, '$')")
    |
    | to the
    |
    span {{ area.type }}
    |
    | economy annually
    no-ssr(v-if="jobs")
      | , supporting
      |
      span.text-bolder: VueCountUp(:endVal="count_val(jobs)",:options="count_opts(jobs)")
      |
      | jobs.
    span(v-else) .
</template>

<script>
import data from '@/mixins/data'
import count from '@/mixins/count'
export default {
  mixins: [ data, count ],
}
</script>

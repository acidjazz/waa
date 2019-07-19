<template lang="pug">
#DataDetails
  .font-os.uppercase.text-2xl.mb-8
    | {{ area.type }} data
    span(v-if="area.location != 'National'")
      |
      | -
      | {{ area.location }}
  .flex.lg_w-5_6.mx-auto.-p-4.flex-col.lg_flex-row

    .lg_w-1_2.p-4
      .text-bolder.text-6xl: VueCountUp(:endVal="count_val(residents)",:options="count_opts(residents)")
      .text-bolder.text-2xl Apartment Residents
      .my-8.h-24
        | Spending from {{ loc_copy }}'s apartment residents contributes
        |
        span.text-trueblue.font-bold ${{ format(contribution) }}
        |
        | to the local economy each year (including
        |
        span.text-trueblue.font-bold $?.?
        |
        | in taxes), creating
        |
        span.text-trueblue.font-bold ??.?k
        |
        | jobs
      .bg-black.h-2
      .text-trueblue.text-bolder.text-3xl.mt-8: VueCountUp(:endVal="count_val(building)",:options="count_opts(building)")
      .text-2xl.font-bold.text-steel New Apartments Needed Annually
      .my-8
        | {{ loc_copy }}
        | needs to build
        |
        span.text-trueblue.font-bold {{ building | numeral }}
        |
        | new apartment homes each year to meet demand.  Apartment construction contributes
        |
        span.text-trueblue.font-bold $?.?b
        |
        | to {{ loc_copy }}'s economy annually, creating
        |
        span.text-trueblue.font-bold ?.?k
        |
        | jobs


    .lg_w-1_2.p-4
      .text-bolder.text-6xl: VueCountUp(:endVal="count_val(apartments)",:options="count_opts(apartments)")
      .text-bolder.text-2xl Apartment Homes
      .my-8.h-24
        | The operation of {{ loc_copy }}'s apartment homes contributes
        |
        span.text-trueblue.font-bold $?.?b
        |
        | to the local economy each year (including
        |
        span.text-trueblue.font-bold $?.?b
        |
        | in property taxes), creating
        |
        span.text-trueblue.font-bold ?.?b
        |
        | jobs

      .bg-black.h-2

      .text-trueblue.text-bolder.text-3xl.mt-8 ??% of {{ loc_copy }}'s
      .text-2xl.font-bold.text-steel Apartments Built Before 1980

      .my-8
        | {{ loc_copy }}
        | needs to build
        |
        span.text-trueblue.font-bold ??,???
        |
        | new apartment homes each year to meet demand.  Apartment construction contributes
        |
        span.text-trueblue.font-bold $?.?b
        |
        | to {{ loc_copy }}'s economy annually, creating
        |
        span.text-trueblue.font-bold ?.?k
        |
        | jobs
</template>

<script>
import count from '@/mixins/count'
import data from '@/mixins/data'
import numeral from 'numeral'
export default {
  mixins: [ data, count ],
  props: {
    area: {
      type: Object,
      required: true,
    }
  },
  filters: {
    numeral (value) {
      return numeral(value).format('0,0')
    },
  },
  computed: {
    loc_copy () {
      if (this.area.type === 'national') return 'the country'
      return this.area.location
    }
  },
}
</script>

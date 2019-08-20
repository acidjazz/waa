<template lang="pug">
OffsetSection(bg="supernova",fg="black")
  .font-os.my-4(v-in-vp).vp-r  NATIONAL DATA
  .text-4xl.text-bolder(v-in-vp).vp-r
    | The country needs to build 328,000 new apartment homes each year to meet demand.
  .mt-4.w-12.h-1.bg-white(v-in-vp).vp-r
  .mt-4.text-bolder(v-in-vp).vp-r Forecasted by the year 2030
</template>

<script>
import OffsetSection from '@/components/global/OffsetSection'
import count from '@/mixins/count'
export default {
  components: { OffsetSection },
  mixins: [ count ],
  data () {
    return {
      build: {
        endVal: 328000,
        options: {
          decimalPlaces: 0,
          duration: 4,
        }
      },
    }
  }
}
</script>

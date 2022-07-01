<template>
  <offset-section bg="supernova" fg="black">
    <div v-in-vp class="font-os my-4 vp-r"> NATIONAL DATA</div>
    <div v-in-vp class="text-4xl text-bolder vp-r">
      Apartments and their residents contribute $3.4 trillion to the U.S. economy annually, supporting 17.5 million jobs.
    </div>
    <!--
    <div v-in-vp class="mt-4 w-12 h-1 bg-white vp-r" />
    <div v-in-vp class="mt-4 text-bolder vp-r">Forecasted by the year 2030</div>
    -->
  </offset-section>
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
        },
      },
    }
  },
}
</script>

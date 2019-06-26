<template lang="pug">
.bg-white.my-10.mr-10(v-in-vp).vp-r-f
  .-mr-10.py-20.px-10
    .container.mx-auto
      .flex.mr-10
        div(class="w-1/4").mr-4
          .font-os.mb-4 NATINOAL DATA
          .text-3xl.font-bold.mb-4 The Demand
          .text-xl.font-bold.mb-4 4.6 million new apartment homes needed in the U.S. by the year 2020
          .text-black Population growth, immigration and changing lifestyle preferences mean more people will be living in apartments in the future. The challenge, however, is building the number of apartment homes to meet that growing demand.
        div(class="w-3/4")
          .chart.w-full
            OnDemandChart(:width="700",:height="300")
</template>

<script>
import OnDemandChart from '@/components/charts/OnDemandChart'
import inViewport from 'vue-in-viewport-mixin'
import sheets from '@/mixins/sheets'
export default {
  mixins: [ inViewport, sheets ],
  components: { OnDemandChart },
  watch: {
    'inViewport.now' (visible) {
      if (visible) {
      }
    }
  },
  mounted () {
    /*
    let labels = []
    let values = []
    let data = this.getRange('Home-Demand')
    for (let row of data) {
      labels.push(row[0])
      row.shift()
      values.push(row)
    }
    this.data.labels = labels
    this.data.datasets[0].data = values
    */
  },
}
</script>

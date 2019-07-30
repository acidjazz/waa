<template lang="pug">
#StockAge.my-4.print_my-0
  .flex.items-center.my-4.print_my-0
    .w-2.h-2.mr-4.bg-trueblue
    .text-2xl.font-bold.print_text-lg Age of Stock
  PercChart(:datas="datas",:width="200").print_hidden
  PercChart(:datas="datas",:width="200",:print="true").hidden.print_block
</template>

<script>
import data from '@/mixins/data'
import PercChart from '@/components/charts/PercChart'
export default {
  components: { PercChart },
  mixins: [ data ],
  data () {
    return {
      keys: {
        'Before_1959': 'Before 1959',
         '1960_1979':  '1960 - 1979',
         '1980_1999':  '1980 - 1999',
         '2000_or_Later': '2000 or Later',
      }
    }
  },
  computed: {
    datas () {
      let growth = this.stock
      let keyed = {}
      for (let k in growth) {
        if (Object.keys(this.keys).includes(k))
          keyed[this.keys[k]] = growth[k]
      }
      return keyed
    }
  },
}
</script>

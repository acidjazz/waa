<template lang="pug">
#DataHouseType
  .text-bolder.text-2xl.mb-8 Household type
  PercChart(:datas="datas")
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
        Single_Living_Alone: 'Single Living Alone',
        'Married_or_Partners_w/_Children': 'Married or partners with children',
        'Married_or_Partners_without_Children': 'Married or partners without children',
        //Roommate: 'Roommate',
        Other: 'Other',
      }
    }
  },
  computed: {
    datas () {
      let result = {}
      Object.keys(this.keys).forEach((key) => { result[this.keys[key]] = this.housetype[key] })
      return result
    }
  },
}
</script>

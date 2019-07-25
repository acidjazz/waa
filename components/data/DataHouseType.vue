<template lang="pug">
.flex.lg_flex-row.flex-col.items-center
  .lg_w-1_2.lg_mr-8.mb-8
    .text-bolder.text-4xl.lg_w-1_2.mb-4 Household type
    .text justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  justo duo dolores et ea rebum.
  .lg_w-1_2.lg_ml-8.mb-8
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
        Roommate: 'Roommate',
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
  mounted () {
    console.log(this.datas)
    console.log(this.housetype)
  },
}
</script>

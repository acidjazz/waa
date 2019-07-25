<template lang="pug">
.flex.lg_flex-row-reverse.flex-col.items-center
  .lg_w-1_2.lg_ml-8.mb-8
    .text-bolder.text-4xl.lg_w-1_2.mb-4 Persons in households
    .text justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  justo duo dolores et ea rebum.
  .lg_w-1_2.lg_mr-8.mb-8
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
        One: 'One Person',
        Two: 'Two Persons',
        Three: 'Three Persons',
        Four: 'Four or more Persons',
      }
    }
  },
  computed: {
    datas () {
      let result = {}
      Object.keys(this.keys).forEach((key) => { result[this.keys[key]] = this.persons_national[key] })
      return result
    }
  },
}
</script>

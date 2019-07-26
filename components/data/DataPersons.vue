<template lang="pug">
#DataPersons
  .text-bolder.text-2xl.mb-8 Persons in households
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

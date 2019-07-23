<template lang="pug">
div hi
</template>


<script>
import sheets from '@/mixins/sheets'
export default {
  mixins: [ sheets ],
  props: {
    metros: {
      type: Array,
      required: true,
    }
  },
  computed: {
    apartments () { return this.sheet('main', 'dataApartmentsMetro', 'Metro Area') },
    operations () {  return this.sheet('calc', 'operationImpactsMetro', 'Metro') },
    contribution () { return this.sheet('main', 'dataContributionMetro', 'Metro Area') },
    construction () { return this.sheet('calc', 'constructionImpactsMetro', 'Metro') },
    spending () { return this.sheet('calc', 'spendingImpactsMetro', 'Metro') },
  },

  mounted () {
    console.log('hi there', this.metros)
    /*
    console.log(this.apartments)
    console.log(this.operations)
    console.log(this.contribution)
    console.log(this.construction)
    console.log(this.spending)
    */
  },

}
</script>

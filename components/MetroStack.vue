<template lang="pug">
#MetroStack
  .inner
    .title Stacking up the Metros
    .copy Based on specific factors like local regulations and available land to develop, the Barriers to Apartment Construction Index ranks 50 metro areas on how hard it is to add new apartments. See how your city stacks up. 
</template>

<script>
import restrictIndex from '~/store/Metro Restriction Index.json'
export default {

  mounted () {
    console.log(restrictIndex)
  },

  data () {
    return {
      metros: {}
    }
  }
}
</script>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#MetroStack
  > .inner
    > .title
      font h1
      text-align center
    > .copy
      text-align center
      color grey
</style>

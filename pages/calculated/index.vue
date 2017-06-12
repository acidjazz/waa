<template lang="pug">
.page.page_calc
  Top(type="light")
  .clear
  .page_content
    .inner 
      Calculator
  Bottom
</template>

<script>
import Top from '~/components/Top.vue'
import Calculator from '~/components/Calculator.vue'
import Bottom from '~/components/Bottom.vue'
export default { components: { Top, Calculator, Bottom } }
</script>

<style lang="stylus">
json('../../assets/colors.json')
json('../../assets/fonts.json')
.page.page_calc
  > .page_content
    margin 180px 0 0 0
    background-color tomato
    background linear-gradient(-67deg, rgba(#e7266f, 1), rgba(#f59c43, 1))
    padding 60px 0
    > .inner
      background-color white
      border-radius 5px
      width 1000px
      margin 0 auto
      padding 60px 0
</style>

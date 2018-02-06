<template lang="pug">
.page.page_calc
  Top(type="dark")
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
</style>

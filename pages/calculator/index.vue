<template lang="pug">
.page.page_calc
  Top(type="light")
  .clear
  .page_content
    div test one two
  Bottom
</template>

<script>

import Top from '~/components/Top.vue'
import Bottom from '~/components/Bottom.vue'

export default {
  components: { Top, Bottom }
}

</script>

<style lang="stylus">
json('../../assets/colors.json')
json('../../assets/fonts.json')
.page.page_calc
  > .page_content
    margin 180px 0 0 0
    height 100px
    background-color tomato
    font h1
</style>


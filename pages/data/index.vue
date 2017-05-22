<template lang="pug">
.page.page_data
  Top(type="light")
  .clear
  .filters
    .inner
      .copy filter apartment data by:
      .options
        a.option national
        a.option state
        a.option metro
        a.option district
      .clear
</template>

<script>
import Top from '~/components/Top.vue'
export default { components: { Top } }
</script>

<style lang="stylus">
json('../../assets/colors.json')
.page.page_data
  > .filters
    clear both
    margin 60px 0 0 0
    padding 60px 0
    border-top 2px solid lightgrey
    height 100px
    > .inner
      width 670px
      margin auto
      text-transform uppercase
      font-size 14px
      letter-spacing 0.5px
      > .copy
        float left
        display inline-block
        padding 11px 0
      > .options
        float left
        > .option
          cursor pointer
          display inline-block
          margin 0 10px
          border-radius 3px
          padding 10px 15px
          color grey
          border 1px solid transparent
          &:hover
            color blue
            background-color lightwhite
            border 1px solid lightgrey
            text-decoration underline
</style>

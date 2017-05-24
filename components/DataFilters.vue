<template lang="pug">
#Filters
  .filters
    .inner
      .copy filter apartment data by:
      .options
        a.option national
        a.option(@mouseover="modalState = !modalState") state
        a.option metro
        a.option district
      .clear
  .modals
    .modal.modal_states(:class="{ on: modalState, off: !modalState }",@mouseover="modalState = true",@mouseout="modalState = false")
      .option(v-for="State in data",:class="{ active: (state === State.State) }")
        router-link(v-bind:to="'/data/state/' + State.State.toLowerCase().replace(' ', '-')") {{ State.State }}
    .chevron.chevron_states(:class="{ on: modalState, off: !modalState }")
</template>

<script>
import Filters from '../store/Filters.json'
export default {
  props: {
    state: {
      type: String,
      default: 'National'
    }
  },
  data () {
    return {
      data: Filters.data,
      modalState: false,
      modalMetro: false,
      modalDistrict: false
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/stylus/mixins.styl'
json('../assets/colors.json')
#Filters
  position relative
  margin 60px 0 0 0
  > .modals
    > .chevron
      top 110px
      left 50%
      position absolute
      width 20px
      height 20px
      border-radius 3px
      border-left 1px solid lightgrey
      border-top 1px solid lightgrey
      background-color lightwhite
      transform rotate(45deg)
      onoff()
      &.chevron_states
        margin-left 25px

    > .modal
      position absolute
      top 120px
      left 50%
      margin-left -300px
      width 600px
      height 200px
      overflow scroll
      background-color lightwhite
      border 1px solid lightgrey
      border-radius 3px
      onoff()
      > .option
        &.active > a
          color green !important
        > a
          display block
          float left
          color grey
          width 130px
          padding 5px
          margin 5px
          &:hover
            color blue
            text-decoration underline


  > .filters
    clear both
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
          user-select none
          cursor pointer
          display inline-block
          margin 0 10px
          padding 10px 15px
          color grey
          border-radius 3px
          border 1px solid transparent
          &:hover
            color blue
            background-color lightwhite
            border 1px solid lightgrey
            text-decoration underline
</style>

<template lang="pug">
#Filters
  .filters
    .inner
      .copy filter apartment data by:
      .options
        // a.option national
        a.option(@click="modalState = !modalState",v-if="this.state === 'National'"): .copy state
        a.option.active(@click="modalState = !modalState",v-else)
          .copy {{ state }}
          router-link.close(to="/data") X
        a.option: .copy metro
        a.option: .copy district
      .clear
  .modals
    .modal.modal_states(:class="{ on: modalState, off: !modalState }")
      .option(v-for="State in data",:class="{ active: (state === State.State) }")
        router-link(v-bind:to="'/data/state/' + State.State.toLowerCase().replace(' ', '-')") {{ State.State }}
    .chevron.chevron_states(:class="{ on: modalState, off: !modalState }")
      .inner
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
      position absolute
      top 108px
      left 50%
      width 0
      height 0
      border-left 13px solid transparent
      border-right 13px solid transparent
      border-bottom 13px solid lightgrey
      onoff()
      &.chevron_states
        margin-left -100px
      > .inner
        position relative
        top 1px
        left -13px
        width 0
        height 0
        border-left 13px solid transparent
        border-right 13px solid transparent
        border-bottom 13px solid lightwhite
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
          > .copy
            float left
          &.active
            color green
            text-decoration underline
            > .close
              float right
              padding 0 0 0 10px
              text-decoration none
          &:hover
            color blue
            background-color lightwhite
            border 1px solid lightgrey
            text-decoration underline
</style>

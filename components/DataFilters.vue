<template lang="pug">
#Filters
  .filters
    .inner
      .copy filter apartment data by:
      .options
        router-link.option.enabled(to="/data/",:class="{active: (choice().value === 'National')}") National
        a.option.enabled(:class="{active: (this.state !== 'National')}",@click="modal('state')")
          | state
          .chevron.chevron_states(:class="{ on: modals.state, off: !modals.state }")
            .inner
        a.option(:class="{active: (this.choice().type === 'metro'), enabled: (this.metros.length > 0)}",@click="modal('metro')")
          | metro
          .chevron.chevron_metros(:class="{ on: modals.metro, off: !modals.metro }")
            .inner
        a.option(:class="{active: (this.choice().type === 'district'), enabled: (districts.length > 0)}",@click="modal('district')")
          | district
          .chevron.chevron_districts(:class="{ on: modals.district, off: !modals.district }")
            .inner
      .clear
  .modals(v-on-clickaway="away")

    .modal.modal_states(:class="{ on: modals.state, off: !modals.state }")
      .option(v-for="State in data",:class="{ active: (state === State.State) }")
        router-link.choice(v-bind:to="'/data/state/' + State.State.toLowerCase().replace(/ /g, '-')",@click.native="modal(false)") {{ State.State }}

    .modal.modal_metros(:class="{ on: modals.metro, off: !modals.metro }")
      .option(v-for="Metro in metros",:class="{ active: (metro === Metro) }")
        router-link.choice(v-bind:to="'/data/metro/' + Metro.trim().toLowerCase().replace(/ /g, '-')",@click.native="modal(false)") {{ Metro }}

    .modal.modal_districts(:class="{ on: modals.district, off: !modals.district }")
      .option(v-for="District in districts",:class="{ active: (district === District) }")
        router-link.choice(v-bind:to="'/data/district/' + District.trim().toLowerCase().replace(/ /g, '-')",@click.native="modal(false)") {{ District }}
</template>

<script>
import Filters from '../store/Filters.json'
import { mixin as clickaway } from 'vue-clickaway'
import filtermixin from '~plugins/filter-mixin.js'
import ordinal from 'ordinal'
export default {
  mixins: [ clickaway, filtermixin ],
  methods: {
    away () {
      for (let modal in this.modals) this.modals[modal] = false
    },
    modal (type) {
      for (let modal in this.modals) this.modals[modal] = false
      setTimeout(() => {
        if (type === 'state') this.modals[type] = true
        if (type === 'district' && this.districts.length > 0) this.modals[type] = true
        if (type === 'metro' && this.metros.length > 0) this.modals[type] = true
      }, 20)
    },
    populate () {
      this.metros = []
      this.districts = []
      if (this.choice().type === 'state' || this.choice().type === 'district') {
        for (let item of Filters.data) {
          if (item.State === this.choice().state) {
            if (item.Metro !== undefined) {
              this.metros = item.Metro.split(',')
            }

            for (let i = 1; i !== item.District; i++) {
              this.districts.push(this.choice().state + " " + ordinal(i))
            }
          }
        }
      }
    }
  },
  created () {
    this.populate()
  },
  data () {
    return {
      data: Filters.data,
      metros: [],
      districts: [],
      modals: {
        state: false,
        metro: false,
        district: false
      }
    }
  },
  mounted () {
    this.popupItem = this.$el
  },

}
</script>

<style lang="stylus">
@import '../assets/stylus/mixins.styl'
json('../assets/colors.json')

.chevron
  position absolute
  left 50%
  margin-left -13px
  bottom -12px
  width 0
  height 0
  border-left 13px solid transparent
  border-right 13px solid transparent
  border-bottom 13px solid lightblue
  z-index 20
  onoff()
  > .inner
    position relative
    top 1px
    left -13px
    width 0
    height 0
    border-left 13px solid transparent
    border-right 13px solid transparent
    border-bottom 13px solid lightwhite

#Filters
  position relative
  margin 120px 0 0 0
  > .modals
    > .modal
      position absolute
      top 120px
      left 50%
      margin-left -300px
      width 600px
      max-height 280px
      overflow scroll
      background-color lightwhite
      border 1px solid lightblue
      border-radius 3px
      box-shadow 0px 0px 1px 0px rgba(black, 0.2)
      animation fadeIn 0.2s ease-in-out 0s both
      z-index 10
      
      &.modal_metros
        width 300px
        margin-left -50px
      &.modal_districts
        width 600px
        margin-left -250px
      onoff()
      > .option
        &.active
          color blue
        > a
          display block
          float left
          color grey
          width 130px
          padding 5px
          margin 5px
          text-decoration none
          &:hover
            color blue
            text-decoration underline

  > .filters
    clear both
    padding 60px 0
    border-top 2px solid lightgrey
    height 100px
    > .inner
      width 792px
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
        > a.option
          position relative
          user-select none
          display inline-block
          margin 0 10px
          padding 10px 20px
          color grey
          border-radius 3px
          border 1px solid transparent
          text-align center
          cursor pointer
          &.enabled
            color black
            text-decoration underline
          > .copy
            display inline-block
          &.active, &.router-link-exact-active
            color blue
            text-decoration underline
            background-color lightwhite
            cursor pointer
            color blue
            border 1px solid lightblue
          &.enabled:hover
            background-color lightwhite
</style>

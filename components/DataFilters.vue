<template lang="pug">
#Filters
  .filters
    .inner
      .copy filter apartment data by:
      .options
        a.option.enabled(v-if="this.state === 'National'",@click="modal('state')")
          .copy state
          .chevron.chevron_states(:class="{ on: modals.state, off: !modals.state }")
            .inner
        .option.active(v-else,@click="modal('state')")
          .copy {{ state }}
          router-link.close(to="/data").fa.fa-times 
          .chevron.chevron_states(:class="{ on: modals.state, off: !modals.state }")
            .inner
        a.option(v-if="this.metros !== false",@click="modal('metro')")
          .copy metro
          .chevron.chevron_metros(:class="{ on: modals.metro, off: !modals.metro }")
            .inner
        a.option(v-if="this.districts.length !== 0",@click="modal('district')")
          .copy district
          .chevron.chevron_districts(:class="{ on: modals.district, off: !modals.district }")
            .inner
      .clear
  .modals(v-on-clickaway="away")
    .modal.modal_states(:class="{ on: modals.state, off: !modals.state }")
      .option(v-for="State in data",:class="{ active: (state === State.State) }")
        router-link(v-bind:to="'/data/state/' + State.State.toLowerCase().replace(' ', '-')",@click.native="modal(false)") {{ State.State }}
    .modal.modal_metros(:class="{ on: modals.metro, off: !modals.metro }")
      .option(v-for="Metro in metros",:class="{ active: (metro === Metro) }")
        router-link(v-bind:to="'/data/metro/' + Metro.trim().toLowerCase().replace(/ /, '-')",@click.native="modal(false)") {{ Metro }}
    .modal.modal_districts(:class="{ on: modals.district, off: !modals.district }")
      .option(v-for="District in districts",:class="{ active: (district === District) }")
        router-link(v-bind:to="'/data/district/' + District.trim().toLowerCase().replace(/ /, '-')",@click.native="modal(false)") {{ District }}
</template>

<script>
import Filters from '../store/Filters.json'
import { mixin as clickaway } from 'vue-clickaway'
export default {
  mixins: [ clickaway ],
  props: {
    state: {
      type: String,
      default: 'National'
    },
    metro: {
      type: String,
      default: 'None'
    },
    district: {
      type: String,
      default: 'None'
    }
  },

  methods: {
    away () {
      for (let modal in this.modals) this.modals[modal] = false
    },
    modal (type) {
      console.log('modal')
      for (let modal in this.modals) this.modals[modal] = false
      setTimeout(() => {
        if (type === 'state') this.modals[type] = true
        if (type === 'district' && this.state !== 'National') this.modals[type] = true
        if (type === 'metro' && this.metros !== false) this.modals[type] = true
      }, 20)
    },
  },
  data () {
    // look for and list metros if they exist
    let metros = false
    let districts = []

    if (this.state !== 'National') {
      for (let item of Filters.data) {
        if (item.State === this.state) {
          if (item.Metro !== undefined) {
            metros = item.Metro.split(',')
          }

          for (let i = 1; i !== item.District; i++) {
            switch (i) {
              case 1:
                districts.push(this.state + ' 1st')
                break
              case 2:
                districts.push(this.state + ' 2nd')
                break
              case 3:
                districts.push(this.state + ' 3rd')
                break
              default:
                districts.push(this.state + ' ' + i + 'th')
                break
            }
          }
        }
      }
    }

    return {
      data: Filters.data,
      metros: metros,
      districts: districts,
      modals: {
        state: false,
        metro: false,
        district: false
      }
    }
  },
  mounted () {
    this.popupItem = this.$el
  }

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
  margin 60px 0 0 0
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
      
      &.modal_metros
        width 300px
        margin-left -50px
      &.modal_districts
        width 600px
        margin-left -250px
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
        > .option
          position relative
          min-width 145px
          user-select none
          display inline-block
          margin 0 10px
          padding 10px 15px
          color grey
          border-radius 3px
          border 1px solid transparent
          background-color lightwhite
          text-align center
          > .copy
            display inline-block
          &.active
            color green
            text-decoration underline
            > a.close
              float right
              width 20px
              height 20px
              padding 5px 0 0 5px
              text-decoration none
              color darkblue
          &:hover
            cursor pointer
            color blue
            border 1px solid lightgrey
            text-decoration underline
</style>

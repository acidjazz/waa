<template lang="pug">
doctype
#Filters(:class="{ sticky: $store.state.sticky }")
  .filters.closed(:class="{ open: !closed , closed: closed }")
    .inner
      .drawer(@click="closed = !closed")
        i.fa.fa-arrow-circle-down.fa-2x
      .copy(@click="closed = !closed")
        // tooltip(start=true,copy='b')
        | filter apartment data by:
      .options
        router-link.option.enabled(to="/data/",:class="{active: (choice().value === 'National')}") National
        a.option.enabled(:class="{active: (this.state !== 'National')}",@click="modal('state')")
          | state
          .chevron.chevron_states(:class="{ on: modals.state, off: !modals.state }")
            .inner
        a.option.enabled(:class="{active: (this.choice().type === 'metro')}",@click="modal('metro')")
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
      .close: .fa.fa-times(@click="modal(false)")
      .option(v-for="State in data",:class="{ active: (state === State.State) }")
        router-link.choice(v-if="State.State == 'District of Columbia'",:to="'/data/state/' + State.State.toLowerCase().replace(/ /g, '-')",@click.native="modal(false)") D.C.
        router-link.choice(v-else,:to="'/data/state/' + State.State.toLowerCase().replace(/ /g, '-')",@click.native="modal(false)") {{ State.State }}

    .modal.modal_metros(:class="{ on: modals.metro, off: !modals.metro }")
      .close: .fa.fa-times(@click="modal(false)")
      .option(v-for="Metro in metros",:class="{ active: (metro === Metro) }")
        router-link.choice(:to="'/data/metro/' + Metro.trim().toLowerCase().replace(/ /g, '-')",@click.native="modal(false)") {{ Metro }}

    .modal.modal_districts(:class="{ on: modals.district, off: !modals.district }")
      .close: .fa.fa-times(@click="modal(false)")
      .option(v-for="District in districts",:class="{ active: (district === District) }")
        router-link.choice(:to="'/data/district/' + District.trim().toLowerCase().replace(/ /g, '-')",@click.native="modal(false)") {{ District }}
</template>

<script>
import Filters from '../static/Filters.json'
import { mixin as clickaway } from 'vue-clickaway'
import filtermixin from '~plugins/filter-mixin.js'
import tooltip from '~components/tooltip.vue'
import ordinal from 'ordinal'
export default {
  mixins: [ clickaway, filtermixin ],
  components: { tooltip },
  methods: {
    handleScroll () {

      this.sticky = this.checkSticky()

      if (this.$store.state.sticky !== this.sticky) {
        this.$store.state.sticky = this.sticky
        this.$store.commit('alterSticky', this.sticky)
        this.$emit('alteredSticky')
      }

    },
    checkSticky () {
      if (!process.BROWSER_BUILD) {
        return false
      }
      if (window.scrollY >= 240 && window.innerWidth >= 1000) {
        return true
      }
      return false
    },
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
      for (let item of Filters.data) {

        if (item.Metro !== undefined) {
          for (let metro of item.Metro.split(',')) {
            if (this.metros.indexOf(metro.trim()) === -1) {
              this.metros.push(metro.trim())
            }
          }
        }

        if (item.State === this.choice().state) {
          for (let i = 1; i <= item.District; i++) {
            this.districts.push(this.choice().state + " " + ordinal(i))
          }
        }
      }
      this.metros.sort((a, b) => {
        if (a < b) return -1
        if (a > b) return 1
      })
    }
  },
  mounted () {
    this.populate()
    if (process.BROWSER_BUILD) {
      window.addEventListener('scroll', this.handleScroll)
      this.handleScroll()
    }

  },
  destroyed () {
    if (process.BROWSER_BUILD) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },

  data () {
    return {
      sticky: this.checkSticky(),
      closed: true,
      data: Filters.data,
      metros: [],
      districts: [],
      modals: {
        state: false,
        metro: false,
        district: false
      }
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/stylus/mixins.styl'
json('../assets/colors.json')

#Filters
  &.sticky
    position fixed
    background-color rgba(255,255,255,0.95)
    border-top 1px lightblue
    border-bottom 1px lightblue
    z-index 10
    width 100%
    margin 0
    top 0
    animation inFromTop 1s ease 0s both
    > .filters
      padding 10px 0
      height auto
    > .modals
      top 76px
      > .modal
        top 76px
  position relative
  margin 150px 0 0 0
  > .modals
    > .modal
      position absolute
      top 126px
      left 50%
      margin-left -300px
      width 600px
      padding 10px
      max-height 280px
      overflow scroll
      background-color lightwhite
      border 1px solid lightblue
      border-radius 3px
      box-shadow 0px 0px 1px 0px rgba(black, 0.2)
      animation scaleIn 0.2s ease 0s both
      z-index 10
      > .close
        display none
      
      &.modal_metros
        width 600px
        margin-left -250px
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
    > .inner
      width 684px
      margin auto
      text-transform uppercase
      font-size 14px
      letter-spacing 0.5px
      > .drawer
        display none
      > .copy
        float left
        display inline-block
        padding 11px 0
        position relative
        > .tooltip
          top 9px
          right auto
          left -30px
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

@import '../assets/stylus/datafilters-mobile.styl'

</style>

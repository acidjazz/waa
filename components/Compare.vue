<template lang="pug">
doctype
#Compare
  .inner(v-in-viewport)
    .title(v-in-viewport) Compare Your City
    hr(v-in-viewport)
    .copy(v-in-viewport) Enter two cities names in order to compare them
    .inputs(v-in-viewport)
      input(
        placeholder="City One",
        v-model="city.one.value",
        @keydown.down="key('down', 'one')",
        @keydown.up="key('up', 'one')",
        @keydown.enter="key('enter', 'one')",
        :class="{ matching: this.city.one.matching }"
      )
      .suggest(:class="{ off: suggest.one.matches.length < 1, on: suggest.one.matches.length > 0 }")
        ul
          li(
            v-for="city, index in suggest.one.matches",
            :class="{ selected: suggest.one.selected === index}",
            @click="choose('one', city)",
          ) {{ city }}
      span vs.
      input(
        placeholder="City Two",
        v-model="city.two.value"
        @keydown.down="key('down', 'two')",
        @keydown.up="key('up', 'two')",
        @keydown.enter="key('enter', 'two')",
        :class="{ matching: this.city.two.matching }"
      )
      .suggest(:class="{ off: suggest.two.matches.length < 1, on: suggest.two.matches.length > 0 }")
        ul
          li(
            v-for="city, index in suggest.two.matches",
            :class="{ selected: suggest.two.selected === index}",
            @click="choose('two', city)",
          ) {{ city }}

    .cta(v-in-viewport)
      input(
      type="submit",
      value="compare",
      :class="{ active: this.city.one.matching === true && this.city.two.matching === true }",
      @click="compare()",
      @keydown.enter="compare()"
    )
</template>

<script>
import Filters from '../static/Filters.json'
import inViewportDirective from 'vue-in-viewport-directive'
let metros = require('~/static/Operation Impacts (metro).json').data
export default {
  directives: { 'in-viewport': inViewportDirective },
  methods: {
    populate () {
      let values = Object.keys(metros)
      values.shift()
      values.pop()
      this.metros = values
    },
    key (dir, input) {
      switch (dir) {
        case 'down' :
          if (this.suggest[input].selected === (this.suggest[input].matches.length - 1)) {
            this.suggest[input].selected = 0
          } else {
            this.suggest[input].selected++
          }
          break
        case 'up' :
          if (this.suggest[input].selected  === 0) {
            this.suggest[input].selected = (this.suggest[input].matches.length - 1)
          } else {
            this.suggest[input].selected--
          }
          break
        case 'enter' :
          this.city[input].value = this.suggest[input].matches[this.suggest[input].selected]
          break
      }
      return true
    },

    choose (input, value) {
      this.city[input].value = value
    },

    update (input) {

      this.suggest[input].matches = []
      this.city[input].matching = false

      if (this.city[input].value.length < 1) {
        return true
      }

      if (this.metros.indexOf(this.city[input].value) > 0) {
        this.city[input].matching = true
        return true
      }

      let matches = this.metros.map((metro) => {
        if (metro.toUpperCase().indexOf(this.city[input].value.toUpperCase()) === 0) {
          this.suggest[input].matches.push(metro)
        }
      })

      this.suggest[input].selected = 0

    },

    compare () {

      if (this.city.one.matching && this.city.two.matching) {
        this.$router.push('/compare#' + this.city.one.value + ',' + this.city.two.value)
      }

      return true

    },
  },

  created () {
    this.populate()
  },

  watch: {
    'city.one.value' () {
      this.update('one')
    },
    'city.two.value' () {
      this.update('two')
    },
  },

  data () {
    return {
      metros: [],
      city: {
        one: {
          value: null,
          matching: false,
        },
        two: {
          value: null,
          matching: false,
        }
      },
      suggest: {
        one: {
          matches: [],
          selected: 0,
        },
        two:  {
          matches: [],
          selected: 0,
        },
      },
    }
  }

}
</script>

<style lang="stylus">
@import '../assets/stylus/mixins'
json('../assets/colors.json')
json('../assets/fonts.json')

delay = 0.8

#Compare
  background-color purple
  padding 60px 0
  > .inner
    width 900px
    margin auto
    background-color white
    border-radius 12px
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    text-align center
    &.in-viewport
      opacity 1
      transform scale(1)
      transition opacity 1s ease-in-out 0s, transform 1s ease-in-out 0s
      transition-timing-function  cubic-bezier(.87,-.41,.19,1.44)
    &.above-viewport, &.below-viewport
      opacity 0
      transform scale(0.95)
    > .title
      font h2
      text-align center
      padding 60px 0
      inViewport(delay + 0.05)
    > hr
      display block
      color lightgrey
      border-top 1px solid lightgrey
      border-bottom 1px solid lightgrey
      inViewport(delay + 0.1)
    > .copy
      color grey
      padding 30px 0
      inViewport(delay + 0.15)
    > .inputs
      position relative
      width 505px
      margin auto
      inViewport(delay + 0.20)
      z-index 2
      > .suggest
        background-color white
        top 46px
        width 220px
        position absolute
        border-left 1px solid lightgrey
        border-right 1px solid lightgrey
        border-bottom 1px solid lightgrey
        border-radius 0 0 3px 3px
        onoff()
        &:nth-child(1)
          left: 0
        &:nth-child(5)
          right: 0
          
        > ul
          margin 0
          padding 0
          list-style-type none
          > li
            cursor pointer
            border-bottom 1px solid lightgrey
            text-align left
            padding 10px
            &:last-child
              border-bottom 1px solid transaprent
            &:hover
              background-color rgba(royalpurple, 0.5)
            &.selected
              background-color royalpurple
              color white
      > span
        display inline-block
        padding 0 20px
      > input
        width 200px
        font c1
        padding 10px
        border 1px solid lightgrey
        border-radius 3px
        outline none
        transition border-color 0.3s ease-in-out 0s
        &:focus
          border 1px solid blue
        &.matching
          border 1px solid green
    > .cta
      inViewport(delay + 0.25)
      > input
        cursor pointer
        background-color lightgrey
        color black
        font c1sb
        text-transform uppercase
        margin 60px 0
        padding 15px 50px
        border-radius 3px
        border none
        transition color 0.5s ease 0s, background-color 0.5s ease 0s
        &.active
          color white
          background-color blue
          opacity 1
          transform translate(0, 0)


</style>

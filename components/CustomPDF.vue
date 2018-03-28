<template lang="pug">
doctype
#CustomPDF
  .box
    .line
    .copy Create a 8.5x11 PDF of this data that you can print
    // .button(@click="calculate()") PDF SNAPSHOT
    a.button(:href="basePDF + $route.path") PDF SNAPSHOT
    .clear
</template>

<script>
export default {
  props: {
    choice: {
      type: Object,
      required: true,
    }
  },
  methods: {
    calculate () {
      this.$router.push(`/calculated/#by-${this.choice.type}-value-${this.choice.value}-number-1-type-new`)

    },
  },
  data () {
    return {
      basePDF: 'https://url-to-pdf-api.herokuapp.com/api/render?emulateScreenMedia=false&url=https://weareapartments.org',
    }
  },
}
</script>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
@import '../assets/stylus/mixins.styl'

#CustomPDF
  padding 60px 0 
  > .box
    margin auto
    width 520px
    color white
    background-color robins-egg
    padding 60px
    border-radius 3px
    position relative
    > .line
      position absolute
      width 3px
      height 60px
      background-color black
      top -30px
      right 160px

    > .copy
      float left
      width 240px
    > .button
      cursor pointer
      float right
      margin 10px 40px 0 0
      background-color white
      padding 6px 10px
      border-radius 3px
      color black
      font c1sb

@media all and (min-width: 1px) and (max-width: 1000px)
  #CustomPDF
    > .box
      width auto
      margin 0 20px
      text-align center
      > .copy
        float none
        width auto
      > .button
        float none
        margin 20px 0 0 0


</style>



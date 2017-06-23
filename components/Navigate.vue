<template lang="pug">
nav#Navigate(:class="{ on: isOpen, off: !isOpen }")
  .blue
  .inner
    .cbutton(@click="isOpen = !isOpen")
      .copy.copy_menu MENU
      .copy.copy_close CLOSE
      .icon.icon_menu: i.fa.fa-lg.fa-bars
      .icon.icon_close: i.fa.fa-lg.fa-times
    .content
      .menu
        .option(@click="isOpen = false"): router-link(to="/") Home
        .option(@click="isOpen = false"): router-link(to="/data") Apartment Data
        .option(@click="isOpen = false"): router-link(to="/calculator") Apartment Calculator
        .option(@click="isOpen = false"): router-link(to="/about") The Initiative
        .option(@click="isOpen = false"): router-link(to="/vision") Our Vision
      .title 
        router-link(to="/") We Are Apartments
</template>

<script>
export default {
  data () {
    return { isOpen: false }
  }
}
</script>

<style lang="stylus">
@import '../assets/stylus/mixins.styl'
json('../assets/fonts.json')
json('../assets/colors.json')
@import '../assets/stylus/navigate.styl'
@import '../assets/stylus/navigate-mobile.styl'
</style>

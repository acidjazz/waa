<template lang="pug">
  #DemandAndSupply
    .inner
      .copy DEMAND &amp; SUPPLY
      .copy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt consetetur sadip tempor invidunt 
      .parts
        .part
          .icon.icon-earth
          .copy 100k more people
          .copy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        .part
          .icon.icon-sign
          .copy 33% of land
          .copy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        .part
          .icon.icon-key
          .copy 35% increase
          .copy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        .part
          .icon.icon-graph
          .copy 20% of stock
          .copy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        .clear

</template>
<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#DemandAndSupply
  padding 60px 0
  > .inner
    > .copy:first-child
      text-align center
      font c1s
      color grey
    > .copy:nth-child(2)
      font h3
      width 600px
      margin auto
      text-align center
    > .parts
      width 900px
      margin auto
      padding 60px 0 0 0
      > .part
        width 450px
        padding 0 0 30px 0
        float left
        > .icon
          float left
          width 30px
          height 30px
          background-size contain
          &.icon-earth
            background-image url('~static/icon-earth.png')
          &.icon-sign
            background-image url('~static/icon-sign.png')
          &.icon-key
            background-image url('~static/icon-key.png')
          &.icon-graph
            background-image url('~static/icon-graph.png')
        > .copy
          margin 0 40px
          &:nth-child(3)
            color grey
</style>

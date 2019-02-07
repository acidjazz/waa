<template lang="pug">
#DiagSection
  .diags
  .clear
</template>

<style lang="stylus">
.diags
  width 253px
  float right
  height 60px
  background-image linear-gradient(-45deg, transparent 46%, black 49%, black 51%, transparent 55%)
  background-size 8px 8px
  clip-path polygon(25% 0, 100% 0, 100% 100%, 0 100%)

@media all and (min-width: 1px) and (max-width: 1000px)
  #DiagSection
    display none
</style>



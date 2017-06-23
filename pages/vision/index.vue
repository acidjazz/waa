<template lang="pug">
.page.page_vision
  Top(type="light")
  Bottom
</template>
<style lang="stylus">
@import '../../assets/stylus/vision.styl'
</style>
<script>
import Top from '~/components/Top.vue'
import Bottom from '~/components/Bottom.vue'
export default { components: { Top, Bottom } }
</script>

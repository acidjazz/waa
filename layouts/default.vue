<template lang="pug">
#waa
  HeaderBar
  HeaderMenu
  nuxt
  FooterBar
</template>

<script>
import HeaderBar from '@/components/layout/HeaderBar'
import HeaderMenu from '@/components/layout/HeaderMenu'
import FooterBar from '@/components/layout/FooterBar'
export default {
  components: { HeaderBar, HeaderMenu, FooterBar },
}
</script>

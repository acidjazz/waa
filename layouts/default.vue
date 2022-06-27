<template>
  <div id="waa">
    <HeaderBar />
    <HeaderMenu />
    <main>
      <nuxt />
    </main>
    <FooterBar />
  </div>
</template>

<script>
import HeaderBar from '@/components/layout/HeaderBar'
import HeaderMenu from '@/components/layout/HeaderMenu'
import FooterBar from '@/components/layout/FooterBar'
export default {
  components: { HeaderBar, HeaderMenu, FooterBar },
}
</script>

<template lang="pug">
.header-nav.bg-black.text-white.fixed.z-20.inset-x-0.top-0.py-6.ani-sit.ani-d-4
  .container.lg.px-4
    .flex.justify-between
      HeaderTitle
      .header-nav-menu.justify-end.ani-sil.ani-d-10.hidden.lg_flex
        nuxt-link.py-2.px-4.mr-1.rounded-full.hover-tran-bg.hover_bg-white.hover_text-black(
          v-for="item, index in menu",
          :key="index",
          :to="item.to") {{ item.name }}
</template>

<script>
import HeaderTitle from '@/components/layout/HeaderTitle'
export default {
  components: { HeaderTitle },
  data () {
    return {
      menu: [
        {
          name: 'apartment data',
          route: 'data',
          to: '/data',
        },
        {
          name: 'latest news',
          route: 'news',
          to: '/news',
        },
        {
          name: 'apartment calculator',
          route: 'calculator',
          to: '/calculator',
        },
        {
          name: 'the initiative',
          route: 'initiative',
          to: '/initiative',
        },
        {
          name: 'our vision',
          route: 'vision',
          to: '/vision',
        },
      ]
    }
  }
}
</script>

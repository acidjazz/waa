<template lang="pug">
.header-nav.bg-black.text-white.fixed.z-20.inset-x-0.top-0.py-2.ani-sit.ani-d-4
  .container.lg.mx-auto.px-4
    .flex.justify-between
      nuxt-link(to="/").font-os.text-2xl.flex
        .mr-1
          i.mdi.mdi-check-bold.text-flamingo.ani-sir.ani-d-8
          i.mdi.mdi-check-bold.text-turq.-ml-4.ani-sir.ani-d-9
        .ani-sir.ani-d-10 WE ARE APARTMENTS
      .header-nav-menu.flex.justify-end.ani-sil.ani-d-10
        nuxt-link(
          v-for="item, index in menu",
          :key="index",
          :to="item.to",
          class="hover:bg-white hover:text-black").py-2.px-4.rounded-full {{ item.name }}
</template>


<script>
export default {
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

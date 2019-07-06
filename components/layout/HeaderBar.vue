<template lang="pug">
.header-nav.bg-black.text-white.fixed.z-20.inset-x-0.top-0.py-6.ani-sit.ani-d-4
  .container.lg.px-4
    .flex.justify-between
      HeaderTitle
      .header-nav-menu.justify-end.ani-sil.ani-d-10.hidden.lg_flex
        nuxt-link.py-2.px-4.mr-1.rounded-full.tran-colors(
          v-for="option, index in options",
          :key="index",
          :to="option.route",
          :class="`hover_text-${option.color}`")
          div {{ option.label }}
          div.h-1.mt-2.ani-zi(v-if="$route.name === option.name",:class="option.gradient")
          div.h-1.mt-2(v-else)
</template>

<script>
import HeaderTitle from '@/components/layout/HeaderTitle'
import options from '@/mixins/nav'
export default {
  components: { HeaderTitle },
  mixins: [ options ],
}
</script>

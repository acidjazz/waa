<template lang="pug">
.header-nav.bg-black.text-white.fixed.z-20.inset-x-0.top-0.ani-sit.print_hidden.tran-all-p2s(
  :class="{'lg_py-8 py-2': !has_scrolled, 'lg_py-1 py-2': has_scrolled}")
  .container.lg.px-4
    .flex.justify-between.items-center
      HeaderTitle
      .header-nav-menu.justify-end.ani-sil.ani-d-1.hidden.lg_flex
        nuxt-link.py-2.px-4.mr-1.rounded-full.tran-colors(
          v-for="option, index in options",
          :key="index",
          :to="option.route",
          :class="`hover_text-${option.color}`")
          div {{ option.label }}
          .h-1.mt-2.ani-zi(v-if="option.names.includes($route.name)",:class="option.gradient")
          .h-1.mt-2(v-else)
</template>

<script>
import scrolled from '@/mixins/scrolled'
import HeaderTitle from '@/components/layout/HeaderTitle'
import options from '@/mixins/nav'
export default {
  components: { HeaderTitle },
  mixins: [ options, scrolled ],
}
</script>

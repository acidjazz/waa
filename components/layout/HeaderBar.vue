<template>
  <header
    class="header-nav bg-black text-white fixed z-20 inset-x-0 top-0 ani-sit print:hidden tran-all-p2s"
    :class="{'lg:py-8 py-2': !has_scrolled, 'lg:py-1 py-2': has_scrolled}"
  >
    <div class="container lg:px-4">
      <div class="flex justify-between items-center">
        <HeaderTitle />
        <nav class="header-nav-menu justify-end ani-sil ani-d-1 hidden lg:flex">
          <nuxt-link
            v-for="option, index in options"
            :key="index"
            class="py-2 px-4 mr-1 rounded-full tran-colors"
            :to="option.route"
            :class="`hover:text-${option.color}`"
          >
            <div>{{ option.label }}</div>
            <div
              v-if="option.names.includes($route.name)"
              class="h-1 mt-2 ani-zi"
              :class="option.gradient"
            />
            <div
              v-else
              class="h-1 mt-2"
            />
          </nuxt-link>
        </nav>
      </div>
    </div>
  </header>
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

<template lang="pug">
.header-menu.lg_hidden(:class="state")
  .header-menu-blue(:class="state")
  .header-menu-inner(:class="state")
    .header-menu-swap(:class="state",@click="swap")
      .header-menu-burger(:class="state")
          i
          i
          i
    .header-menu-content(v-if="is_open")
        nuxt-link.is-active(to="/") home
        nuxt-link(to="/") apartment data
        nuxt-link(to="/") latest news
        nuxt-link(to="/") apartment calculator
        nuxt-link(to="/") the initiative
        nuxt-link(to="/") our vision
</template>

<script>
export default {
  data () {
    return {
      is_open: false,
    }
  },
  computed: {
    state () { return this.is_open ? 'is-open' : 'is-closed' },
  },
  methods: {
    swap () { this.is_open = !this.is_open },
  },
}
</script>

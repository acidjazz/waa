<template lang="pug">
.header-menu(:class="state")
  .header-menu-blue(:class="state")
  .header-menu-inner(:class="state")
    .header-menu-swap(:class="state",@click="swap")
      .header-menu-burger(:class="state")
          i
          i
          i
    .header-menu-content(v-if="is_open")
        nuxt-link.is-active(to="/") Home
        nuxt-link(to="/") Apartment Data
        nuxt-link(to="/") Latest Stories
        nuxt-link(to="/") Apartment Calculator
        nuxt-link(to="/") The Initiative
        nuxt-link(to="/") Our Vision
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

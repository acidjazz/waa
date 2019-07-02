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
      nuxt-link(
        v-for="option, index in options",
        :key="index",
        :to="option.route",
        @click.native="is_open = false")  {{ option.label }}
</template>

<script>
import options from '@/mixins/nav'
export default {
  mixins: [ options ],
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

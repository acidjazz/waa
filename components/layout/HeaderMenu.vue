<template>
  <div class="header-menu lg:hidden" :class="state">
    <div class="header-menu-blue" :class="state" />
    <div class="header-menu-inner" :class="state">
      <div class="header-menu-swap" :class="state" @click="swap">
        <div class="header-menu-burger" :class="state"><i /><i /><i /></div>
      </div>
      <div v-if="is_open" class="header-menu-content">
        <nuxt-link
          v-for="option, index in options" :key="index" :to="option.route"
          @click.native="is_open = false"
        >
          {{ option.label }}
        </nuxt-link>
      </div>
    </div>
  </div>
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

<template lang="pug">
.bg-white.my-10(v-in-vp,:class="outer_cls")
  .py-20.px-10(:class="inner_cls")
    .container.mx-auto
      slot
</template>

<script>
export default {
  props: {
    side: {
      type: String,
      required: false,
      default: 'left',
    }
  },
  computed: {
    outer_cls () { return this.side === 'left' ? 'mr-10 vp-r-f' : 'ml-10 vp-l-f' },
    inner_cls () { return this.side === 'left' ? '-mr-10' : '-ml-10'},
  },
}
</script>

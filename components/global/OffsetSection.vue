<template lang="pug">
.bg-white.my-10(v-in-vp,class="mr-0 lg:mr-10 vp-r-f")
  .px-10(class="-mr-0 lg:-mr-10 py-10 lg:py-20")
    .mr-0(class="lg:mr-10")
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

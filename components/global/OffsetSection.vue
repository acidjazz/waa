<template lang="pug">
section.my-32.mr-0.lg_mr-10.vp-r(v-in-vp,:class="`bg-${bg} text-${fg}`").print_mr-0
  .px-4.py-10.-mr-0.lg_-mr-10.lg_py-20.print_py-2
    .mr-0.lg_mr-10
      .canister
        slot
</template>

<script>
export default {
  props: {
    bg: {
      type: String,
      required: false,
      default: 'white',
    },
    fg: {
      type: String,
      required: false,
      default: 'black',
    },
  }
}
</script>

<template lang="pug">
.bg-white.my-32.mr-0.lg_mr-10.vp-r-f(v-in-vp)
  .px-4.py-4.-mr-0.lg_-mr-10.lg_py-20
    .mr-0.lg_mr-10
      .canister
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
  }
}
</script>

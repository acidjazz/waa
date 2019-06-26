<template lang="pug">
.bg-white.my-10(v-in-vp,:class="{'mr-10 vp-r-f': side == 'left', 'ml-10 vp-l-f': side == 'right'}")
  .py-20.px-10(:class="{'-mr-10': side == 'left', '-ml-10': side == 'right'}")
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
  }
}
</script>


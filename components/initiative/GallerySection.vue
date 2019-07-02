<template lang="pug">
.flex.flex-wrap.my-32
  img.object-cover.w-1_2.lg_w-1_4.lg_h-128(
  v-for="i in 4",
  :src="`/apt${i}.jpg`",
  :class="`vp-d-${i}`",
  v-in-vp).vp-r
</template>


<script>
export default {

}
</script>

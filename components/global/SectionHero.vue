<template lang="pug">
.w-screen.h-screen-bl48.relative.-mb-48
  video(
    v-if="type === 'video'",
    playsinline,
    autoplay="autoplay",
    muted="muted",
    loop="loop").absolute.min-w-full.min-h-full.top-50.left-50.w-auto.h-auto.transform-50.object-cover.z-5
    source(:src="src",type="video/mp4")
  img(v-if="type === 'image'",:src="src").object-cover.absolute.w-full.h-full
  .relative.w-screen.h-screen-bl48.flex.justify-center.items-center(:class="gradient")
    .text-white.text-center
      slot
</template>


<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'image',
    },
    src: {
      type: String,
      required: true,
    },
    gradient: {
      type: String,
      required: true,
    },
  }
}
</script>

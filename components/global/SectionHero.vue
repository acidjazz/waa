<template lang="pug">
.w-screen.h-screen-bl48.relative.lg_-mb-48
  video(
    v-if="type === 'video'",
    playsinline,
    autoplay="autoplay",
    muted="muted",
    loop="loop").absolute.w-screen.h-screen-bl48.top-50.left-50.w-auto.h-auto.transform-50.object-cover.z-5
    source(:src="src",type="video/mp4")
  img(v-if="type === 'image'",:src="src",alt="Hero Image").object-cover.absolute.w-screen.h-screen-bl48
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

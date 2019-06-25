<template lang="pug">
a.story(:href="link(story)",target="_new",v-in-vp,:class="`vp-d-${index}`").vp-y
  .story_image
    img(:src="thumbnail(story)")
  .story_header
    .story_header_label.uppercase.text-sm featured
    .story_header_title.text-xl {{ story.title }}
    .story_header_description {{ story.virtuals.subtitle }}
</template>

<script>
export default {
  props: {
    index: {
      type: [Boolean,Number],
      required: false,
      default: false,
    },
    story: {
      type: Object,
      required: true,
    }
  },
  methods: {
    thumbnail (data) {
      return `https://cdn-images-1.medium.com/max/1600/${data.virtuals.previewImage.imageId}`
    },
    link (story) {
      return `https://www.medium.com/we-are-apartments/${story.uniqueSlug}`

    },
  },
}
</script>


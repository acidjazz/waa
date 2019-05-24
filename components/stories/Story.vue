<template lang="pug">
a.story(:href="link(story)",target="_new")
  .story_image
    img(:src="thumbnail(story)")
  .story_header
    .story_header_label featured
    .story_header_title {{ story.title }}
    .story_header_description {{ story.virtuals.subtitle }}
</template>

<script>
export default {
  props: {
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
      console.log(story.slug)
      return `https://www.medium.com/we-are-apartments/${story.uniqueSlug}`

    },
  },
}
</script>


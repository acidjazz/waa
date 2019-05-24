<template lang="pug">
a.story(:href="story.link",target="_new")
  .story_image
    img(:src="story.thumbnail")
  .story_header
    .story_header_label featured
    .story_header_title {{ story.title }}
    .story_header_description(v-html="strip(story.short)")
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
    strip (html) {
      return html.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "");
    }
  },
}
</script>


<template lang="pug">
a.article(:href="link(article)",target="_new",v-in-vp,:class="`vp-d-${index+2}`").vp-y
  .article_image
    img(:src="thumbnail(article)")
  .article_header
    .article_header_label.uppercase.text-sm featured
    .article_header_title.text-xl {{ article.title }}
    .article_header_description {{ article.virtuals.subtitle }}
</template>

<script>
export default {
  props: {
    index: {
      type: [Boolean,Number],
      required: false,
      default: false,
    },
    article: {
      type: Object,
      required: true,
    }
  },
  methods: {
    thumbnail (data) {
      return `https://cdn-images-1.medium.com/max/1600/${data.virtuals.previewImage.imageId}`
    },
    link (article) {
      return `https://www.medium.com/we-are-apartments/${article.uniqueSlug}`

    },
  },
}
</script>


<template lang="pug">
.article-outer
  a.article(:href="link(article)",target="_new",v-in-vp,:class="`vp-d-${index+2}`").vp-r
    .article_image
      img(:src="thumbnail(article)",loading="lazy",alt="Article Image")
    .article_header(:class="{'lg_w-1_3': featured}")
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
    },
    featured: {
      type: Boolean,
      required: false,
      default: false,
    },
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


<template lang="pug">
article.article-outer
  a.article(:href="article.url",target="_new",v-in-vp,:class="`vp-d-${index+2}`").vp-r
    .article_image
      img(:src="article.image",loading="lazy",alt="Article Image", width="330", height="300")
    .article_header(:class="{'lg_w-1_3': article.featured && !article.frontpage}")
      .article_header_title.text-xl {{ article.title }}
      .article_header_description {{ article.description }}
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


<template>
  <article class="article-outer">
    <a
      v-in-vp class="article vp-r" :href="article.url"
      target="_new" :class="`vp-d-${index+2}`"
    >
      <div class="article_image">
        <img
          :src="article.image" loading="lazy" alt="Article Image"
          width="330" height="300"
        >
      </div>
      <div class="article_header" :class="{'lg:w-1/3': article.featured && !article.frontpage}">
        <div class="article_header_title text-xl">{{ article.title }}</div>
        <div class="article_header_description">{{ article.description }}</div>
      </div></a>
  </article>
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


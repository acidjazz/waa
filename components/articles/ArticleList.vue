<template>
  <div class="articles flex flex-wrap -mx-2">
    <MediumArticle
      v-for="item, index in feed"
      :key="index"
      class="w-full lg:w-1/3"
      :article="item" :index="index+1"
    />
  </div>
</template>

<script>
import MediumArticle from '@/components/articles/MediumArticle'
export default {
  components: { MediumArticle },
  props: {
    feed: {
      type: Array,
      required: true,
    },
  },
}
</script>

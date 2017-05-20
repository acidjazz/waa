
<template lang="pug">
section.container
  h1 the state is {{ state }}
</template>


<script>

export default {

  data () {
    return {
      state: this.$route.params.state
    }
  }
}

</script>

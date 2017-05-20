<template lang="pug">
section.container
  h1 hello world
  logo
</template>

<script>

import Logo from '~components/Logo.vue'
import jQuery from 'jQuery'

export default {
  components: {
    Logo
  }

}
if (process.BROWSER_BUILD) {
  console.log(jQuery('.logo'))
}

</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

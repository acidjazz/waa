<template lang="pug">
.p-16.bg-trantrue.text-center.text-white
  .text-5xl.mb-4.font-bolder.ani-sit {{ area.location }}
  .lg_w-128.mx-auto.ani-sit.ani-d-1 {{ area.location }} apartments and their residents contribute $49.4b to the metro economy annually, supporting 233k jobs.


</template>


<script>
export default {
  props: {
    area: {
      type: Object,
      required: true,
    }
  }
}
</script>

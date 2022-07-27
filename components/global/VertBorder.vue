<template>
  <div class="stripes m-auto" />
</template>

<style>
.stripes {
  width: 703px;
  height: 8px;
  background-image: linear-gradient(-45deg, transparent 46%, #000 49%, #000 51%, transparent 55%);
  background-size: 8px 8px;
}
@media all and (min-width: 1px) and (max-width: 1000px) {
  .stripes {
    width: auto;
  }
}
</style>



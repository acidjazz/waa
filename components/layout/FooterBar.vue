<template>
  <footer class="bg-seashell mt-16 p-12 lg:p-24 print:hidden">
    <div class="canister flex flex-col lg:flex-row">
      <div class="w-full lg:w-1/2 mb-10 lg:mb-0">
        <HeaderTitle class="mb-4" />
        <div class="mt-4 w-64">In communities across the country, apartments work - helping people live in a home that’s right for them.</div>
      </div>
      <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-end">
        <div class="mt-10 flex flex-row"><a href="https://nmhc.org" target="_new"><img class="mr-8 object-contain h-8" src="/icon-nmhc.png" alt="NMHC logo"></a><a href="https://www.naahq.org/" target="_new"><img class="object-contain h-8" src="/icon-naa.png" alt="NAA logo"></a></div>
      </div>
    </div>
  </footer>
</template>

<script>
import HeaderTitle from '@/components/layout/HeaderTitle'
export default {
  components: { HeaderTitle },
}
</script>

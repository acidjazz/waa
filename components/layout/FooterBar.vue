<template>
  <footer class="bg-seashell mt-16 p-12 lg:p-24 print:hidden">
    <div class="canister flex flex-col lg:flex-row">
      <div class="w-full lg:w-1/2 mb-10 lg:mb-0">
        <HeaderTitle class="mb-4" />
        <div class="mt-4 w-64">In communities across the country, apartments work - helping people live in a home that’s right for them.</div>
      </div>
      <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-end">
        <form
          id="joinus" action="//weareapartments.us16.list-manage.com/subscribe/post?u=b5b3c7cd44e8ec9c9b1c2e7c4&amp;amp;id=5cb9d4e7ac" method="post"
          name="joinus" target="_blank"
        >
          <label class="block text-3xl font-bold mb-4" for="mce-EMAIL">Join Us</label>
          <input
            id="mce-EMAIL" class="p-2 rounded font-os w-64 mb-8" type="email"
            placeholder="E-MAIL" name="EMAIL"
          >
          <div class="text-right w-64"><a class="inline bg-supernova px-8 py-4 text-sm rounded-full text-center" href="/" onclick="document.forms['joinus'].submit(); return false;">Subscribe</a></div>
        </form>
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

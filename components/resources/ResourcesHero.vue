<template>
  <section-hero type="image" src="/vision.jpg" gradient="bg-trandaisy">
    <div v-in-vp class="text-sl font-os mb-10 vp-y">APARTMENT DEMAND</div>
    <div v-in-vp class="mx-auto text-xl lg:text-4xl w-10/12 lg:max-w-5xl mb-10 vp-y vp-d-2">
      <p class="mb-8">
        The U.S. needs to build 4.3 million more apartments by 2035 to meet the demand for rental housing. This includes 600,000 units (total) to fill the shortage from underbuilding after the 2008 financial crisis.
      </p>
      <p>
        The apartment industry stands ready to work with urban, suburban and rural communities in every region to meet the housing demand of Americans across all income levels.
      </p>
    </div>
  </section-hero>
</template>


<script>
import SectionHero from '@/components/global/SectionHero'
export default {
  components: { SectionHero },
}
</script>

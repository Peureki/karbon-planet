<template>
<main>
    <section class="hero">
        <div class="karbon-container">
            <img class="background-img" :src="DeadDog33" alt="Rock Event" title="Rock Event">
            <img class="logo" :src="KarbonPlanetLogo" alt="Karbon Planet logo" title="Karbon Planet">

            <CTA/>
        </div>

        <div class="karbon-container">

        </div>
    </section>  
</main>

</template>

<script setup lang="ts">
import DeadDog33 from '~/assets/imgs/deaddog/Deaddog 33.jpg'
import KarbonPlanetLogo from '~/assets/imgs/logos/Karbon Planet-FullW.png'

// const { $directus, $readItems } = useNuxtApp()

// const { data: merp } = await useAsyncData('Test', () => {
//   return $directus.request($readItems('Test'))
// })

// console.log('merp:', merp.value);

</script>

<style scoped>
.hero{
    position: relative;
    padding-inline: unset;
    display: flex;
    min-height: 100dvh;
    background: var(--color-bkg-linear-gradient-1);
    overflow: hidden;
}
.karbon-container{
    position: relative;
    width: 50%; 
    border: 1px solid white;
}
.karbon-container > img.background-img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
}
.karbon-container > img.logo{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: var(--w-hero-logo);
    z-index: 2;
}

</style>
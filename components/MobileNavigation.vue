<template>
    <div class="mobile-nav">
        <ul class="menu">
            <li><NuxtLink to="/" @click="openMobileNav = !openMobileNav">Home</NuxtLink></li>
            <li><NuxtLink to="/events" @click="openMobileNav = !openMobileNav">Events</NuxtLink></li>
            <li><NuxtLink to="/contact" @click="openMobileNav = !openMobileNav">Contact</NuxtLink></li>
        </ul>

        <div class="logo-container">
            <img id="karbon-planet" class="logo" :src="KarbonPlanet">
            <img id="karbon-kandi" class="logo" :src="KarbonKandi">
        </div>
        
    </div>
</template>

<script setup lang="ts">
// LOGOS
import KarbonPlanet from '~/assets/imgs/logos/Karbon Planet-FullW.png'
import KarbonKandi from '~/assets/imgs/logos/Karbon Kandi White Logo.png'

const useOpenMobileNav = () => useState<boolean>('openMobileNav', () => false);
const openMobileNav = useOpenMobileNav()

</script>

<style scoped>
.mobile-nav{
    position: fixed;
    top: 0;
    height: 100dvh; 
    width: 100dvw;
    padding-inline: var(--padding-inline-page);
    background-color: var(--color-bkg);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: calc(var(--padding-block-section) * 1.5);
    z-index: 10000002;
}
ul.menu{
    display: flex;
    flex-direction: column;
    list-style-type: none;
    gap: var(--gap-section);
    padding-left: 0; /* Reset default padding */
}
li > a{
    font-size: var(--font-size-h2);
    font-family: var(--font-family-montserrat);
}
.logo-container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--gap-content);
}

</style>
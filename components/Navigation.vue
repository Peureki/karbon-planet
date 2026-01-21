<template>
    <header>
        <nav class="desktop">
            <span class="link-container">
                <NuxtLink to="/"><img class="logo" :src="Logo" alt="Home" title="Home"></NuxtLink>
                <NuxtLink to="/events">Events</NuxtLink>
                <NuxtLink to="/contact">Contact</NuxtLink>
            </span>

            <span class="link-container">
                <a>
                    <img class="icon" :src="Instagram" alt="Instagram" title="Instagram">
                </a>
                <a>
                    <img class="icon" :src="SoundCloud" alt="SoundCloud" title="SoundCloud">
                </a>
                
                <CTA :nav="true" to="contact" text="Let's Connect" :src="Panda" alt="Contact" title="Connect"/>
            </span>
        </nav>

        <nav class="mobile">
            <span class="link-container">
                <NuxtLink to="/"><img class="logo" :src="Logo" alt="Home" title="Home"></NuxtLink>
            </span>

            <button v-if="!openMobileNav" @click="openMobileNav = !openMobileNav">
                <img class="icon" :src="Hamburger" alt="Menu" title="Menu">
            </button>

            <button v-else @click="openMobileNav = !openMobileNav">
                <img class="icon" :src="Close" alt="Close Menu" title="Close Menu">
            </button>


        </nav>

        <!-- <CurvedEndSection fill="var(--color-bkg-nav)" class="curved-end-section-header"/> -->
    </header>
</template>

<script setup lang="ts">
import Logo from '~/assets/imgs/logos/Karbon Planet-BearW.png'
import Instagram from '~/assets/imgs/svgs/instagram.svg'
import SoundCloud from '~/assets/imgs/svgs/soundcloud.svg'
import Panda from '~/assets/imgs/svgs/panda.svg'
import Hamburger from '~/assets/imgs/svgs/hamburger.svg'
import Close from '~/assets/imgs/svgs/close.svg'

const useOpenMobileNav = () => useState<boolean>('openMobileNav', () => false);

const openMobileNav = useOpenMobileNav()

</script>

<style scoped>
header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    /* background-color: var(--color-bkg-nav); */
    z-index: 10000009;
}

nav.desktop {
    display: flex;
    justify-content: space-between;
    padding-inline: var(--padding-inline-page);
    padding-block: var(--padding-block-nav);
    padding: var(--padding-nav);
}
nav.desktop a {
    font-size: var(--font-size-nav);
    display: flex;
    align-items: center;
    text-decoration: none;
    font-family: var(--font-family-montserrat);
    font-weight: var(--font-weight-nav);
}
nav.mobile {
    display: none;
}

.logo{
    width: var(--w-nav-logo);
}
.icon{
    width: var(--w-nav-icon);
}
.link-container{
    display: flex;
    align-items: center;
    gap: var(--gap-nav-content);
}

@media (max-width: 768px){
    nav.desktop{
        display: none;
    }
    nav.mobile{
        display: flex;
        justify-content: space-between;
        padding: var(--padding-nav);

    }
    .logo{
        width: var(--w-nav-logo-mobile);
    }
    .icon{
        width: var(--w-nav-icon-mobile);
    }
}


</style>
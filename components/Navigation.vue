<template>
    <header>
        <nav>
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
                
                <CTA :nav="true" to="contact" text="Let's Chat" :src="Panda" alt="Contact" title="Let's Chat"/>
            </span>
            
        </nav>
    </header>
</template>

<script setup lang="ts">
import Logo from '~/assets/imgs/logos/Karbon Planet-BearW.png'
import Instagram from '~/assets/imgs/svgs/instagram.svg'
import SoundCloud from '~/assets/imgs/svgs/soundcloud.svg'
import Panda from '~/assets/imgs/svgs/panda.svg'

</script>

<style scoped>
header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding-inline: var(--padding-inline-page);
    padding-block: var(--padding-block-general);
    z-index: 10000000;
}

nav {
    display: flex;
    justify-content: space-between;
}
nav a {
    font-size: var(--font-size-nav);
    display: flex;
    align-items: center;
    text-decoration: none;
    font-family: var(--font-family-montserrat);
    font-weight: var(--font-weight-nav);
}

.logo{
    width: var(--font-size-h1);
}
.icon{
    width: var(--font-size-h2);
}


.link-container{
    display: flex;
    align-items: center;
    gap: var(--gap-nav-content);
}

</style>
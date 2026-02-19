<template>
<main>
    <section class="contact">
        <div class="left-contact-container">
            <h1 id="title">Contact</h1>

            <div class="contact-info-container">
                <p>Xavier.Fraire@gmail.com</p>
                <!-- <p>630-123-4567</p> -->

                <div class="socials-container">
                    <a href="https://www.instagram.com/karbon_planet" target="_blank">
                        <img :src="InstagramLogo" alt="Instagram link" title="https://www.instagram.com/karbon_planet">
                    </a>

                    <a href="https://soundcloud.com/jaives" target="_blank">
                        <img :src="SoundCloudLogo" alt="SoundCloud link" title="https://soundcloud.com/jaives">
                    </a>
                </div>
            </div>

            <div class="logo-container">
                <img id="karbon-planet" class="logo" :src="KarbonPlanet">
                <img id="karbon-kandi" class="logo" :src="KarbonKandi">
            </div>
            

        
        </div>
        
        <img id="xavier" class="portrait" :src="Xavier">
        

    </section>

    <div class="bkg"></div>
</main>
</template>

<script setup lang="ts">
import InstagramLogo from '~/assets/imgs/svgs/instagram.svg'
import SoundCloudLogo from '~/assets/imgs/svgs/soundcloud.svg'

// LOGOS
import KarbonPlanet from '~/assets/imgs/logos/Karbon Planet-FullW.png'
import KarbonKandi from '~/assets/imgs/logos/Karbon Kandi White Logo.png'

import Xavier from '~/assets/imgs/portraits/xavier-1.png'

</script>

<style scoped>
.bkg{
    position: fixed;
    top: 0;
    width: 100dvw;
    height: 100dvh;
    z-index: -1;
    background-color: var(--color-cta);
}
/* section.contact{
    display: grid;
    align-items: center;
    grid-template-columns: repeat(4, 1fr);
    background-color: var(--color-cta);
    gap: var(--gap-content);
}
#title{
    grid-area: 1 / 1 / 2 / 3;
}
.contact-info-container{
    display: flex;
    flex-direction: column;
    gap: var(--gap-content);
    grid-area: 2 / 1 / 3 / 3;
}
#karbon-planet{
    grid-area: 3 / 1 / 4 / 1;
}
#karbon-kandi{
    grid-area: 3 / 2 / 4 / 2; 
}
#xavier{
    grid-area: 1 / 3 / 4 / 5; 
} */

section.contact{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: var(--gap-section);
    background-color: var(--color-cta);
}
.left-contact-container{
    display: flex;
    flex-direction: column;
    gap: var(--gap-section);
}
.contact-info-container{
    display: flex;
    flex-direction: column;
    gap: var(--gap-content);
}
.logo-container{
    display: flex;
    gap: var(--gap-section);
    align-items: center;
}

img.portrait{
    align-self: flex-start;
    justify-self: center;
    width: var(--w-portrait);
    object-fit: cover;
    border-radius: var(--border-radius);
}

@media (max-width: 768px){
    section.contact{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top: calc(var(--padding-block-section) * 1.5);
    }
    .logo-container{
        gap: unset;
    }
    img.portrait{
        display: none;
    }
}
</style>
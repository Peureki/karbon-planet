<template>
    <footer>
        <div class="contacts">
            <!-- <p><a href="tel:6301234567">630-123-4567</a></p> -->

            <p><a href="mailto:Xavier.Fraire@gmail.com">Xavier.Fraire@gmail.com</a></p>

            <div class="socials-container">
                <a href="https://www.instagram.com/karbon_planet" target="_blank">
                    <img :src="InstagramLogo" alt="Instagram link" title="https://www.instagram.com/karbon_planet">
                </a>

                <a href="https://soundcloud.com/jaives" target="_blank">
                    <img :src="SoundCloudLogo" alt="SoundCloud link" title="https://soundcloud.com/jaives">
                </a>
            </div>
        </div>

        <div class="copyright-and-credits">
            <p>Copyright Karbon Plant 2025</p>
            <p>Made by <a class="p-size" href="https://www.instagram.com/peurekii/" target="_blank">peurekii</a></p>
        </div>
        
    </footer>
</template>

<script setup lang="ts">
import InstagramLogo from '~/assets/imgs/svgs/instagram.svg'
import SoundCloudLogo from '~/assets/imgs/svgs/soundcloud.svg'

import Panda from '~/assets/imgs/svgs/panda.svg'

</script>

<style scoped>
footer{
    background-color: var(--color-cta);
    padding: var(--padding-footer);
    display: flex;
    flex-direction: column;
    gap: var(--gap-general);
}
a{
    display: flex;
    align-items: center;
}
.contacts{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.copyright-and-credits{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.copyright-and-credits p,
.copyright-and-credits a {
    font-size: var(--font-size-footer-copyright);
}
.copyright-and-credits a{
    display: unset;
}
@media (max-width: 768px){
    footer{
        gap: var(--gap-section);
    }
    .contacts{
        display: flex;
        flex-direction: column;
        gap: var(--gap-content);
    }
    .copyright-and-credits{
        display: flex;
        flex-direction: column;
        gap: var(--gap-content);
    }
}

</style>
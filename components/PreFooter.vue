<template>
    <section>
        <CurvedEndSection fill="var(--color-text)" class="curved-start-section-header"/>

        <div class="footer-container">
            <img class="logo" :src="KarbonPlanetLogo" alt="Karbon Planet logo" title="Work with me">

            <div class="inline-cta">
                <h4>Contact Today</h4>
                <span>
                    <h4>For Your</h4>
                    <ArrowButton
                        class="arrow-button"
                        alt="Let's vibe"
                        title="Let's vibe"
                        to="contact"
                        :target="false"
                    />
                </span>
                
                <h4>Next Event</h4>
            
            </div>
        </div>
    </section>
    

</template>

<script setup lang="ts">
import KarbonPlanetLogo from '~/assets/imgs/logos/Karbon Planet-BearB.png'

import Panda from '~/assets/imgs/svgs/panda.svg'

</script>

<style scoped>
section{
    position: relative;
    background-color: var(--color-text);
    padding-block: var(--gap-content);
}
h4{
    color: var(--color-bkg);
    font-size: var(--font-size-footer-h);
}
.footer-container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: calc(var(--gap-content) * 3);
}
.logo{
    width: var(--w-footer-logo);
}
.inline-cta h4{
    font-family: var(--font-family-konkhmer-sleokchher);
    line-height: 1.1;
    font-weight: var(--font-weight-footer-h);
}
.inline-cta > span{
    display: flex;
    align-items: center;
    gap: var(--gap-content);
}
@media (max-width: 768px){
    .footer-container{
        gap: unset;
    }
    .inline-cta{
        display: flex;
        flex-wrap: wrap;
    }
    .arrow-button{
        display: none;
    }
}

</style>
<template>
<main>
    <section class="hero">
        <h1>INDEPENDENT PROMOTER</h1>

        <div class="karbon-container">
            <img class="background-img" :src="DeadDog33" alt="Rock Event" title="Rock Event">
            <img class="logo" :src="KarbonPlanetLogo" alt="Karbon Planet logo" title="Karbon Planet">

            <CTA class="cta" 
                :src="Planet"
                alt="Karbon Planet"
                title="Karbon Planet"
                text="Rock Events"
            />
        </div>

        <div class="karbon-container">
            <img class="background-img" :src="KarbonKandiEvent" alt="EDM Event" title="EDM Event">
            <img class="logo" :src="KarbonKandiLogo" alt="Karbon Kandi logo" title="Karbon Kandi">

            <CTA class="cta" 
                :src="Flower"
                alt="Karbon Kandi"
                title="Karbon Kandi"
                text="EDM Events"
            />
        </div>

        <svg class="curved-end-section upside-down" viewBox="0 0 1440 30" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.316895V0L1440 0V0.316895C1209.87 15.1245 968.616 23 720 23C471.384 23 230.126 15.1245 0 0.316895Z"/>
        </svg>
    </section>  

    <!--
        *
        * UPCOMING EVENTS
        *
    -->
    <section class="upcoming-events">
        <div class="title-container">
            <h2>UPCOMING EVENTS</h2>

            <div class="eyes">
                <svg viewBox="0 0 50 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.5 36C46.5 45.317 43.8717 53.6004 39.8029 59.4595C35.7251 65.3315 30.4353 68.5 25 68.5C19.5647 68.5 14.2749 65.3315 10.1971 59.4595C6.12832 53.6004 3.5 45.317 3.5 36C3.5 26.683 6.12832 18.3996 10.1971 12.5405C14.2749 6.66851 19.5647 3.5 25 3.5C30.4353 3.5 35.7251 6.66851 39.8029 12.5405C43.8717 18.3996 46.5 26.683 46.5 36Z" stroke="var(--color-title)" stroke-width="7"/>
                    <circle cx="15" cy="35" r="15" fill="var(--color-title)"/>
                </svg>

                <svg viewBox="0 0 50 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.5 36C46.5 45.317 43.8717 53.6004 39.8029 59.4595C35.7251 65.3315 30.4353 68.5 25 68.5C19.5647 68.5 14.2749 65.3315 10.1971 59.4595C6.12832 53.6004 3.5 45.317 3.5 36C3.5 26.683 6.12832 18.3996 10.1971 12.5405C14.2749 6.66851 19.5647 3.5 25 3.5C30.4353 3.5 35.7251 6.66851 39.8029 12.5405C43.8717 18.3996 46.5 26.683 46.5 36Z" stroke="var(--color-title)" stroke-width="7"/>
                    <circle cx="15" cy="35" r="15" fill="var(--color-title)"/>
                </svg>
            </div>
        </div>

        <div v-for="(event, index) in upcomingEvents" :key="index" class="event">
            <img class="poster" :src="`http://localhost:8055/assets/${event.poster}`">
            <div class="event-info">
                <h3>{{ event.name }}</h3>
                <span class="faded-description">
                    <p>{{ event.date }}</p>
                    <p>{{ event.location }}</p>
                </span>
                <p>{{ event.description }}</p>
                <CTA :text="event.link_text" :to="event.link" :src="Ticket" :alt="`Get tickets to the event: ${event.name}`" :title="`Get tickets to the event: ${event.name}`"/>
            </div>
        </div>
    </section>
</main>

</template>

<script setup lang="ts">
// KARBON PLANET
import DeadDog33 from '~/assets/imgs/deaddog/Deaddog 33.jpg'
import KarbonPlanetLogo from '~/assets/imgs/logos/Karbon Planet-FullW.png'

// KARBON KANDI
import KarbonKandiEvent from '~/assets/imgs/karbon-kandi/A55A3101.jpg'
import KarbonKandiLogo from '~/assets/imgs/karbon-kandi/Karbon Kandi White Logo.png'

// CTA
import Planet from '~/assets/imgs/svgs/planet.svg'
import Flower from '~/assets/imgs/svgs/flower.svg'
import Ticket from '~/assets/imgs/svgs/ticket.svg'

// UPCOMING EVENTS
import Eyes from '~/assets/imgs/svgs/eyes.svg'

const { $directus, $readItems } = useNuxtApp()

const { data: upcomingEvents } = await useAsyncData('upcoming_events', () => {
  return $directus.request($readItems('upcoming_events'))
})

console.log('upcoming events:', upcomingEvents.value);

</script>

<style scoped>
section:not(.hero){
    display: flex;
    flex-direction: column;
    gap: var(--gap-section);
    padding-block: var(--padding-block-section);
}
h1{
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -25%);
    z-index: 2;
}
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
}
.karbon-container > img.background-img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
    z-index: 1;
}
.karbon-container > img.logo{
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -60%);
    width: var(--w-hero-logo);
    z-index: 2;
}
.karbon-container > .cta{
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -90%);
    z-index: 2;

}
/*
    * SVGs
*/
.eyes{
    display: flex;
    align-items: center;
    gap: var(--gap-general);
}
/*
    * EVENTS
*/
section.upcoming-events{
    min-height: 300dvh;
    background: var(--color-bkg-linear-gradient-1);
}
section.upcoming-events > .title-container{
    /* position: sticky;
    top: calc(var(--font-size-nav) + var(--padding-block-section)); 
    left: 0;
    z-index: 0; */
    /* padding: var(--padding-section-title); */
}
.event{
    position: relative;
    display: flex;
    gap: var(--gap-content);
    z-index: 1;
}
img.poster{
    width: var(--w-poster);
    height: fit-content;
    position: sticky;
    top: 0;
    border-radius: var(--border-radius);
}
.event-info{
    display: flex;
    flex-direction: column;
    gap: var(--gap-content);
}

</style>
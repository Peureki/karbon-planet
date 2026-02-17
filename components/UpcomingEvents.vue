<template>
    <section class="upcoming-events">
        <SectionTitle title="UPCOMING EVENTS">
            <template v-slot:svg>
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
            </template>
        </SectionTitle>

        <template v-for="(event, index) in sortedEvents" :key="index" >
            <div v-if="isEventCurrent(event)" class="event">
                <img class="poster" :src="`${directusURLAssets}${event.poster}`" :alt="event.name" :title="event.name">
                <div class="event-info">
                    <h3>{{ event.name }}</h3>
                    <span class="faded-description">
                        <p>{{ formatDate(event.start_date) }}</p>
                        <p>{{ event.location }}</p>
                    </span>
                    <p class="event-description">{{ event.description }}</p>
                    <CTA :text="event.cta_link_text" :to="event.cta_link" :src="Ticket" :alt="`Get tickets to the event: ${event.cta_link_text}`" :title="`Get tickets to the event: ${event.cta_link_text}`"/>
                </div>
            </div>
                    
        </template>

        <h3 v-if="eventCounter == 0">TUNE IN FOR MORE EVENTS SOON</h3>
    </section>
</template>

<script setup lang="ts">
import Ticket from '~/assets/imgs/svgs/ticket.svg'
import { directusURL, directusURLAssets } from '~/plugins/directus'

const { $directus, $readItems } = useNuxtApp()

// Track if there's no events
// If == 0, show "TUNE IN FOR EVENTS"
const eventCounter = ref<number>(0); 

const { data: events } = await useAsyncData('events', () => {
  return $directus.request($readItems('events', {
    // Filter out any !published events (archived or removed)
    filter: {
        status: {
            _eq: 'published'
        },
    }
  }))
}, { lazy: true })

// Sort published events by the most recent date
const sortedEvents = computed(() => {
    return events.value?.sort((a, b) => {
        return new Date(b.start_date).getTime() - new Date(a.start_date).getTime()
    })
})

// For Upcoming Events
// Is the event past or upcoming? 
// If in the past: dont' show
// If upcoming: show
const isEventCurrent = (event: any):boolean => {
    const eventDate = new Date(event.start_date)
    const today = new Date(); 

    if (eventDate > today)
        eventCounter.value++

    return eventDate > today; 
}


console.log('events: ', events.value);



</script>

<style scoped>
section.upcoming-events{
    background: var(--color-bkg-linear-gradient-1);
}
.event{
    position: relative;
    display: flex;
    flex-direction: row;
    gap: var(--gap-content);
    z-index: 1;
}

.event-info{
    display: flex;
    flex-direction: column;
    gap: var(--gap-content);
}
.event-description{
    width: var(--w-event-description);
}

@media (max-width: 768px){
    .event{
        flex-direction: column;
    }
    .event > img.poster{
        width: unset;
        height: unset;
    }
    .eyes{
        display: flex;
    }
    .event-description{
        width: unset;
    }
}

</style>

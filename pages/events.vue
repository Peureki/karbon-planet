<template>
<main>
    <section class="hero">
        <img :src="HeroImg" alt="Hero image of a rave" title="Rave">

        <CurvedEndSection
            class="curved-end-section-header upside-down"
            fill="var(--color-bkg)"
        />

        <h1>EVENTS</h1>
    </section>

    <!--
        *
        * UPCOMING EVENTS
        *
    -->
    <UpcomingEvents/>

    <!--
        *
        * PAST EVENTS (in more detail)
        *
    -->
    <section class="past-events">
        <SectionTitle title="PAST EVENTS">
            <template v-slot:svg>
                <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 39C27.6167 39 39 28.0125 39 1.5C39 28.0125 50.3042 39 76.5 39C50.3042 39 39 50.3042 39 76.5C39 50.3042 27.6167 39 1.5 39Z" fill="var(--color-title)" stroke="var(--color-title)" stroke-width="1.5" stroke-linejoin="round"/>
                </svg>
            </template>
        </SectionTitle>

        <div class="past-event-accordion-container">
            <div 
                v-if="sortedEvents" v-for="(event, index) in sortedEvents"
                :key="index" 
                class="event"
                :id="slugify(event.name)"
            >
                <!-- EVENT PREVIEW POSTER, DESCRIPTION -->
                <div class="event-details-container" :class="flexStart(index)">
                    <div class="flex-row">
                        <!-- POSTER -->
                        <img 
                            class="poster" 
                            @click="expandPoster(index, event.poster)" :src="`${directusURLAssets}/${event.poster}`" :alt="event.name" :title="event.name">

                        <div class="flex-column">
                            <div class="name-and-description">
                                <h3>{{ event.name }}</h3>
                                <p class="caption">{{ event.karbon_what }}</p>
                                <p class="caption">Art by: <a class="caption" :href="`${event.artist_link}`" target="_blank">{{ event.artist_name }}</a></p>

                                <template v-if="event.post_event_long_description && pastEventsToggle[index]">
                                    <div class="descriptions">
                                        <p v-for="block in event.post_event_long_description.blocks">{{ block.data.text }}</p>
                                    </div>
                                </template>

                                <template v-else>
                                    <p v-for="(short_description, shortIndex) in event.post_event_short_description.blocks">{{ short_description.data.text }}</p>
                                </template>
                            </div>

                            <!-- COLLAGE -->
                            <div v-if="event.collage && pastEventsCollage && pastEventsToggle[index]" class="collage">
                                <template v-for="(collageID, collageIndex) in event.collage" :key="collageIndex">
                                    <img class="img-for-collage" :src="`${directusURLAssets}/${getCollageImg(collageID)}`"
                                </template>
                                
                            </div>
                        </div>
                    </div>
                    

                    
                </div>
                
                <!-- DATE, VIEW MORE BUTTON -->
                <div class="view-more" :class="flexStart(index)">
                    <p class="date">{{ formatDate(event.start_date) }}</p>
                    <ArrowButton @click="showEventDetails(index)" 
                        :alt="`View more ${event.name} details`" 
                        :title="`View more ${event.name} details`"
                        :rotate-num="rotateArrow(index)"
                    />
                </div>

                
            </div>
        </div>

    </section>

    <Transition name="fade">
        <ImgModal 
            v-if="modalToggle" 
            :image="imgForModal"
            @some-event="modalToggle = !modalToggle"
        />
    </Transition>
    

</main>



</template>

<script setup lang="ts">
import { directusURL, directusURLAssets } from '~/plugins/directus'

import HeroImg from '~/assets/imgs/other/rave.webp'

const { $directus, $readItems } = useNuxtApp()

const { data: pastEvents } = await useAsyncData('past_events', () => {
  return $directus.request($readItems('past_events'))
}, { lazy: true })

const { data: pastEventsCollage } = await useAsyncData('events_files', () => {
  return $directus.request($readItems('events_files'))
}, { lazy: true })

const publishedPastEvents = computed(() => {
    return pastEvents.value?.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
})

const { data: events } = await useAsyncData('events', () => {
  return $directus.request($readItems('events', {
    // Filter out any !published events (archived or removed)
    filter: {
        status: {
            _eq: 'published'
        }
    }
  }))
}, { lazy: true })

// Sort published events by the most recent date
const sortedEvents = computed(() => {
    return events.value?.sort((a, b) => {
        return new Date(b.start_date).getTime() - new Date(a.start_date).getTime()
    })
})

const pastEventsToggle = ref<boolean[]>([]);
// Img for the modal
const imgForModal = ref<string>(),
    modalToggle = ref<boolean>(false); 

if (pastEvents.value){
    pastEventsToggle.value = pastEvents.value.map(() => false)
}

// When users click on ArrowButton => make that specific pastEvent false <=> true
const showEventDetails = (index: number) => {
    pastEventsToggle.value[index] = !pastEventsToggle.value[index];
}
// Make title, desc, arrowButton align-item: flex-start if toggled
const flexStart = (index: number) => {
    return pastEventsToggle.value[index] ? 'flex-start' : ''
}
// Rotate arrow if toggled
const rotateArrow = (index: number) => {
    return pastEventsToggle.value[index] ? 90 : 0
}

const getCollageImg = (collageID: number) => {
    const fileID = pastEventsCollage.value?.find(({ id }) => id === collageID)?.directus_files_id
    return fileID; 
}

const expandPoster = (index: number, posterURL: string) => {
    modalToggle.value = !modalToggle.value;
    imgForModal.value = posterURL; 
}

console.log('past events: ', pastEvents.value)
console.log('collage: ', pastEventsCollage.value);

</script>

<style scoped>
section.hero{
    position: relative;
    min-height: 50vh;
    height: 50dvh;
}
section.hero img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
}
section.hero h1{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.curved-end-section-header{
    bottom: 0;
}

/*
    * PAST EVENT SECTION
*/
section.past-events{
    background: var(--color-bkg-linear-gradient-2);
}
.event{
    border-bottom: var(--border-bottom-past-events);
    display: flex;
    justify-content: space-between;
    gap: var(--gap-content);
}
.event:first-child{
    padding-bottom: var(--gap-content);
}
.event:not(:first-child){
    padding-block: var(--gap-content);
}
.event-details-container{
    display: flex;
    align-items: center;
    gap: var(--gap-content);
}
img.poster{
    border-radius: var(--border-radius);
    width: var(--w-past-event-preview);
    cursor: zoom-in;
}
.poster-and-name,
.view-more {
    display: flex;
    align-items: center;
    gap: var(--gap-content);
}
.name-and-description > h3{
    font-size: var(--font-size-h4);
}

.name-and-description{
    display: flex;
    flex-direction: column;
    gap: var(--gap-content);
}
.descriptions{
    display: flex;
    flex-direction: column;
    gap: var(--gap-content);
}
.date{
    white-space: nowrap;
}
img.img-for-collage{
    width: var(--w-past-event);
    object-fit: contain;
}
.collage{
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-general);
}

/* 
    * DYNAMIC CLASSES
*/
.flex-start{
    align-items: flex-start;
}
@media (max-width: 768px){
    .event{
        flex-direction: column;
    }
    .view-more{
        justify-content: space-between6;
    }
    .flex-row{
        flex-direction: column;
    }
    img.poster{
        width: 100%;
    }
}

</style>
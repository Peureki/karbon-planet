<template>
<main>
    <!--
        *
        * HERO SECTION
        *
    -->
    <section class="hero">
        <h1>INDEPENDENT PROMOTER</h1>

        <div class="karbon-container">
            <img class="background-img" :src="DeadDog33" alt="Rock Event" title="Rock Event">
            <img class="logo" :src="KarbonPlanetLogo" alt="Karbon Planet logo" title="Karbon Planet">

            <CTA class="cta" 
                :src="Planet"
                :nav="true" 
                to="contact"
                alt="Karbon Planet"
                title="Karbon Planet"
                text="Rock Events"
            />
        </div>

        <div class="karbon-container">
            <img class="background-img" :src="KarbonKandiEvent" alt="EDM Event" title="EDM Event">
            <img class="logo" :src="KarbonKandiLogo" alt="Karbon Kandi logo" title="Karbon Kandi">

            <CTA class="cta" 
                :nav="true"
                to="contact"
                :src="Flower"
                alt="Karbon Kandi"
                title="Karbon Kandi"
                text="EDM Events"
            />
        </div>
        
    </section>  

    <!--
        *
        * MOBILE 
        * HERO 
        *
    -->
    <section class="hero-mobile">
        <MobileMarquee class="mobile-marquee"/>
        <img class="bkg" :src="Hero1">
        
        <div class="hero-mobile-content">
            <!-- DISPLAY BOTH LOGOS -->
            <div class="duo-logos">
                <div class="logo-and-event-type">
                    <img class="logo" :src="KarbonPlanetLogo" alt="Karbon Planet logo" title="Karbon Planet">
                    <p class="caption">Rock, Punk</p>
                </div>
                

                <div class="split-line"></div>

                
                <div class="logo-and-event-type second">
                    <div class="logo-wrapper">
                        <img class="logo" :src="KarbonKandiLogo" alt="Karbon Kandi logo" title="Karbon Kandi">
                    </div>
                    <p class="caption">EDM</p>
                </div>
            </div>

            <CTA
                :src="Panda"
                :nav="true"
                to="contact"
                alt="Collab with me"
                title="Collab with me"
                text="Let's Groove"
            />
        </div>
        
        <CurvedEndSection fill="var(--color-text)" class="curved-start-section-header"/>
    </section>



    <!--
        *
        * UPCOMING EVENTS
        *
    -->
    <UpcomingEvents/>

    <!--
        *
        * PAST EVENTS SECTION
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

        <!--
            *
            * PAST EVENT MARQUEE
            *
        -->
        <div class="event-marquee-container">
            <div v-if="sortedEvents" class="event-marquee" ref="eventMarquee">
                <div v-for="(event, index) in sortedEvents" class="past-event">
                    <img class="past-event-poster" :ref="el => pastEventPosters[index] = el as HTMLImageElement" :src="`${directusURLAssets}/${event.poster}`" :alt="event.name" :title="event.name">

                    <div class="past-event-description-container">
                        <h3 class="past-event-name">{{ event.name }}</h3>
                        <p class="caption">{{ event.karbon_what }}</p>
                        <p class=""></p>
                        <p v-for="(short_description, shortIndex) in event.post_event_short_description.blocks">{{ short_description.data.text }}</p>

                        <p class="caption">Art by: <a class="caption" :href="`${event.artist_link}`" target="_blank">{{ event.artist_name }}</a></p>
                        <NuxtLink 
                            :to="{
                                path: '/events',
                                hash: `#${slugify(event.name)}`
                            }"
                        >
                            More Info
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>

        <!--
            *
            * BUTTONS TO SEE MORE OR PREV PAST EVENTS
            *
        -->
        <Transition name="fade">
            <ArrowButton
                v-if="rightMarqueeScrollability"
                class-name="see-more-events"
                alt="merp"
                title="merp"
                @click="seeMorePastEvents(1)"
            />
        </Transition>
        


        <Transition name="fade">
            <ArrowButton
                v-if="leftMarqueeScrollability"
                class-name="see-prev-events"
                alt="merp"
                title="merp"
                @click="seeMorePastEvents(-1)"
                :rotate-num="180"
            />
        </Transition>

    </section> <!-- END OF PAST EVENT SECTION -->

    <!--
        *
        * COLLAB MARQUEE SECTION
        *
    -->
    <section class="collab">
        <CollabMarquee v-if="collaborators" :collaborators="collaborators"/>
    </section>

    <!--
        *
        * RADIOJAIVES SECTION
        *
    -->
    <section class="radiojaives">
        <div class="chicago-star-container">
            <svg v-for="n in 4" :id="`chicago-star-${n}`" width="36" height="41" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.137 0.251953L21.9566 13.6361L35.4575 10.252L25.7763 20.252L35.4575 30.252L21.9566 26.8678L18.137 40.252L14.3173 26.8678L0.816454 30.252L10.4976 20.252L0.816454 10.252L14.3173 13.6361L18.137 0.251953Z" fill="var(--color-text)"/>
            </svg>
        </div>

        <div class="bkg-title-container">
            <p v-for="n in 15" class="bkg-title">RADIOJAIVES</p>
        </div>
    
         <!--
            *
            * YOUTUBE LIST
            *
        -->
        <div v-if="music" class="youtube-wrapper" :class="removePointerEvent">
            <iframe 
                class="youtube" 
                :src="`https://www.youtube.com/embed/${extractYouTubeID(music[trackIndex].youtube_link)}`"
                :title="music[trackIndex].name" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
        </div>

        <!--
            *
            * BUTTON TO SEE MORE YOUTUBE MUSIC
            *
        -->
        <Transition name="fade">
            <div v-if="radioJaivesRightArrow" class="arrow-button-container right">

                <ArrowButton
                    @click="seeMoreMusic(1)"
                    class-name="see-more-music"
                    alt="Show next track"
                    title="Show next track"
                />

                <p v-if="music">{{ trackIndex + 1 }} / {{ music.length }}</p>
            </div>
            
        </Transition>
        

        <!--
            *
            * BUTTON TO SEE PREV PAST MUSIC
            *
        -->
        <Transition name="fade">
            <div v-if="radioJaivesLeftArrow" class="arrow-button-container left">
                <ArrowButton
                    @click="seeMoreMusic(-1)"
                    class-name="see-prev-music"
                    alt="Show previous track"
                    title="Show previous track"
                    :rotate-num="180"
                />

                <p v-if="music">{{ trackIndex + 1 }} / {{ music.length }}</p>
            </div>
        </Transition>
        
    </section>

    <!--
        *
        * RADIOJAIVES DETAILS SECTION
        *
    -->
    <section class="radiojaives-details">
        <div class="details-container">
            <template v-if="musicSection">
                <p v-for="description in musicSection[0].description.blocks">{{ description.data.text }}</p>

                
            </template>
            <CTA
                :src="SoundCloud"
                alt="SoundCloud"
                title="SoundCloud"
                text="SoundCloud"
                to="https://soundcloud.com/jaives"
            />
        </div>

        
    </section>

    <!--
        *
        * ABOUT ME SECTION
        *
    -->
    <section class="about">
        <div class="two-col-container">
            <img v-if="aboutMe" class="poster" :src="`${directusURLAssets}/${aboutMe[0].portrait}`" alt="Xavier" title="Xavier">


            <div class="content-container">
                <SectionTitle title="ABOUT ME">
                    <template v-slot:svg>
                        <svg width="115" height="116" viewBox="0 0 115 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M52.4688 46.7938C54.3229 46.7938 55.8854 46.1521 57.1563 44.8687C58.4271 43.5896 59.0625 42.0208 59.0625 40.1625C59.0625 38.3083 58.4208 36.7458 57.1375 35.475C55.8583 34.2042 54.2896 33.5688 52.4313 33.5688C50.5771 33.5688 49.0146 34.2104 47.7438 35.4937C46.4729 36.7729 45.8375 38.3417 45.8375 40.2C45.8375 42.0542 46.4792 43.6167 47.7625 44.8875C49.0417 46.1583 50.6104 46.7938 52.4688 46.7938ZM110.369 115.025C107.356 115.025 102.373 113.081 95.4188 109.194C88.4646 105.306 81.0083 100.44 73.05 94.5938C70.5917 95.6771 68.0271 96.4896 65.3563 97.0312C62.6813 97.5688 59.9417 97.8375 57.1375 97.8375C45.825 97.8375 36.2521 93.9208 28.4188 86.0875C20.5854 78.2542 16.6688 68.6812 16.6688 57.3687C16.6688 54.5646 16.9458 51.8 17.5 49.075C18.05 46.35 18.8667 43.7583 19.95 41.3C14.2042 33.425 9.44167 26.075 5.66251 19.25C1.88334 12.425 -0.00415978 7.54583 6.88326e-06 4.6125C6.88326e-06 3.24583 0.379175 2.13542 1.13751 1.28125C1.90001 0.427084 2.87501 0 4.06251 0C5.73334 0 8.79584 1.05833 13.25 3.175C17.7 5.28333 22.8146 8.0875 28.5938 11.5875C29.3271 12.0208 29.7896 12.6563 29.9813 13.4938C30.1729 14.3313 30.0563 15.1146 29.6313 15.8438C29.2146 16.5729 28.5875 17.0562 27.75 17.2937C26.9083 17.5271 26.1188 17.4271 25.3813 16.9938C22.2021 15.1271 19.0938 13.3979 16.0563 11.8063C13.0188 10.2104 9.97709 8.70208 6.93126 7.28125C9.20626 12.2021 11.6917 16.9792 14.3875 21.6125C17.0875 26.2417 19.9958 30.8208 23.1125 35.35C26.75 29.725 31.5208 25.2167 37.425 21.825C43.3333 18.4375 49.9042 16.7438 57.1375 16.7438C68.4542 16.7438 78.0542 20.6854 85.9375 28.5688C93.8208 36.4521 97.7625 46.0521 97.7625 57.3687C97.7625 64.6062 96.0625 71.1979 92.6625 77.1438C89.2583 83.0896 84.7438 87.8813 79.1188 91.5188C83.7271 94.7146 88.3938 97.6875 93.1188 100.438C97.8438 103.183 102.706 105.723 107.706 108.056C106.31 105.035 104.81 102.006 103.206 98.9688C101.594 95.9313 99.8542 92.8229 97.9875 89.6437C97.5583 88.9062 97.4604 88.0938 97.6938 87.2063C97.9313 86.3271 98.4146 85.6729 99.1438 85.2438C99.8729 84.8188 100.679 84.7229 101.563 84.9562C102.446 85.1896 103.098 85.6688 103.519 86.3938C106.981 92.1646 109.758 97.2708 111.85 101.713C113.942 106.154 114.988 109.215 114.988 110.894C114.988 112.152 114.563 113.154 113.713 113.9C112.863 114.646 111.748 115.021 110.369 115.025ZM68.0688 74.4375C69.3604 74.4375 70.4458 74 71.325 73.125C72.2 72.25 72.6375 71.1667 72.6375 69.875C72.6375 68.5833 72.2 67.4979 71.325 66.6188C70.4542 65.7438 69.3708 65.3063 68.075 65.3063C66.7792 65.3063 65.6958 65.7438 64.825 66.6188C63.95 67.4896 63.5125 68.5729 63.5125 69.8688C63.5125 71.1646 63.95 72.2479 64.825 73.1188C65.6958 73.9938 66.7792 74.4313 68.075 74.4313M75.9875 53.6438C77.1958 53.6438 78.2021 53.2479 79.0063 52.4563C79.8104 51.6646 80.2125 50.6646 80.2125 49.4562C80.2125 48.2479 79.8167 47.2417 79.025 46.4375C78.2333 45.6333 77.2333 45.2313 76.025 45.2313C74.8167 45.2313 73.8125 45.6271 73.0125 46.4188C72.2042 47.2063 71.8 48.2063 71.8 49.4188C71.8 50.6271 72.1958 51.6313 72.9875 52.4313C73.7792 53.2396 74.7792 53.6438 75.9875 53.6438Z" fill="var(--color-title)"/>
                            <path d="M52.4688 46.7938C54.3229 46.7938 55.8854 46.1521 57.1563 44.8687C58.4271 43.5896 59.0625 42.0208 59.0625 40.1625C59.0625 38.3083 58.4208 36.7458 57.1375 35.475C55.8583 34.2042 54.2896 33.5688 52.4313 33.5688C50.5771 33.5688 49.0146 34.2104 47.7438 35.4937C46.4729 36.7729 45.8375 38.3417 45.8375 40.2C45.8375 42.0542 46.4792 43.6167 47.7625 44.8875C49.0417 46.1583 50.6104 46.7938 52.4688 46.7938ZM110.369 115.025C107.356 115.025 102.373 113.081 95.4188 109.194C88.4646 105.306 81.0083 100.44 73.05 94.5938C70.5917 95.6771 68.0271 96.4896 65.3563 97.0312C62.6813 97.5688 59.9417 97.8375 57.1375 97.8375C45.825 97.8375 36.2521 93.9208 28.4188 86.0875C20.5854 78.2542 16.6688 68.6812 16.6688 57.3687C16.6688 54.5646 16.9458 51.8 17.5 49.075C18.05 46.35 18.8667 43.7583 19.95 41.3C14.2042 33.425 9.44167 26.075 5.66251 19.25C1.88334 12.425 -0.00415978 7.54583 6.88326e-06 4.6125C6.88326e-06 3.24583 0.379175 2.13542 1.13751 1.28125C1.90001 0.427084 2.87501 0 4.06251 0C5.73334 0 8.79584 1.05833 13.25 3.175C17.7 5.28333 22.8146 8.0875 28.5938 11.5875C29.3271 12.0208 29.7896 12.6563 29.9813 13.4938C30.1729 14.3313 30.0563 15.1146 29.6313 15.8438C29.2146 16.5729 28.5875 17.0562 27.75 17.2937C26.9083 17.5271 26.1188 17.4271 25.3813 16.9938C22.2021 15.1271 19.0938 13.3979 16.0563 11.8063C13.0188 10.2104 9.97709 8.70208 6.93126 7.28125C9.20626 12.2021 11.6917 16.9792 14.3875 21.6125C17.0875 26.2417 19.9958 30.8208 23.1125 35.35C26.75 29.725 31.5208 25.2167 37.425 21.825C43.3333 18.4375 49.9042 16.7438 57.1375 16.7438C68.4542 16.7438 78.0542 20.6854 85.9375 28.5688C93.8208 36.4521 97.7625 46.0521 97.7625 57.3687C97.7625 64.6062 96.0625 71.1979 92.6625 77.1438C89.2583 83.0896 84.7438 87.8813 79.1188 91.5188C83.7271 94.7146 88.3938 97.6875 93.1188 100.438C97.8438 103.183 102.706 105.723 107.706 108.056C106.31 105.035 104.81 102.006 103.206 98.9688C101.594 95.9313 99.8542 92.8229 97.9875 89.6437C97.5583 88.9062 97.4604 88.0938 97.6938 87.2063C97.9313 86.3271 98.4146 85.6729 99.1438 85.2438C99.8729 84.8188 100.679 84.7229 101.563 84.9562C102.446 85.1896 103.098 85.6688 103.519 86.3938C106.981 92.1646 109.758 97.2708 111.85 101.713C113.942 106.154 114.988 109.215 114.988 110.894C114.988 112.152 114.563 113.154 113.713 113.9C112.863 114.646 111.748 115.021 110.369 115.025ZM68.0688 74.4375C69.3604 74.4375 70.4458 74 71.325 73.125C72.2 72.25 72.6375 71.1667 72.6375 69.875C72.6375 68.5833 72.2 67.4979 71.325 66.6188C70.4542 65.7438 69.3708 65.3063 68.075 65.3063C66.7792 65.3063 65.6958 65.7438 64.825 66.6188C63.95 67.4896 63.5125 68.5729 63.5125 69.8688C63.5125 71.1646 63.95 72.2479 64.825 73.1188C65.6958 73.9938 66.7792 74.4313 68.075 74.4313M75.9875 53.6438C77.1958 53.6438 78.2021 53.2479 79.0063 52.4563C79.8104 51.6646 80.2125 50.6646 80.2125 49.4562C80.2125 48.2479 79.8167 47.2417 79.025 46.4375C78.2333 45.6333 77.2333 45.2313 76.025 45.2313C74.8167 45.2313 73.8125 45.6271 73.0125 46.4188C72.2042 47.2063 71.8 48.2063 71.8 49.4188C71.8 50.6271 72.1958 51.6313 72.9875 52.4313C73.7792 53.2396 74.7792 53.6438 75.9875 53.6438Z" fill="var(--color-title)"/>
                            <path d="M52.4688 46.7938C54.3229 46.7938 55.8854 46.1521 57.1563 44.8687C58.4271 43.5896 59.0625 42.0208 59.0625 40.1625C59.0625 38.3083 58.4208 36.7458 57.1375 35.475C55.8583 34.2042 54.2896 33.5688 52.4313 33.5688C50.5771 33.5688 49.0146 34.2104 47.7438 35.4937C46.4729 36.7729 45.8375 38.3417 45.8375 40.2C45.8375 42.0542 46.4792 43.6167 47.7625 44.8875C49.0417 46.1583 50.6104 46.7938 52.4688 46.7938ZM110.369 115.025C107.356 115.025 102.373 113.081 95.4188 109.194C88.4646 105.306 81.0083 100.44 73.05 94.5938C70.5917 95.6771 68.0271 96.4896 65.3563 97.0312C62.6813 97.5688 59.9417 97.8375 57.1375 97.8375C45.825 97.8375 36.2521 93.9208 28.4188 86.0875C20.5854 78.2542 16.6688 68.6812 16.6688 57.3687C16.6688 54.5646 16.9458 51.8 17.5 49.075C18.05 46.35 18.8667 43.7583 19.95 41.3C14.2042 33.425 9.44167 26.075 5.66251 19.25C1.88334 12.425 -0.00415978 7.54583 6.88326e-06 4.6125C6.88326e-06 3.24583 0.379175 2.13542 1.13751 1.28125C1.90001 0.427084 2.87501 0 4.06251 0C5.73334 0 8.79584 1.05833 13.25 3.175C17.7 5.28333 22.8146 8.0875 28.5938 11.5875C29.3271 12.0208 29.7896 12.6563 29.9813 13.4938C30.1729 14.3313 30.0563 15.1146 29.6313 15.8438C29.2146 16.5729 28.5875 17.0562 27.75 17.2937C26.9083 17.5271 26.1188 17.4271 25.3813 16.9938C22.2021 15.1271 19.0938 13.3979 16.0563 11.8063C13.0188 10.2104 9.97709 8.70208 6.93126 7.28125C9.20626 12.2021 11.6917 16.9792 14.3875 21.6125C17.0875 26.2417 19.9958 30.8208 23.1125 35.35C26.75 29.725 31.5208 25.2167 37.425 21.825C43.3333 18.4375 49.9042 16.7438 57.1375 16.7438C68.4542 16.7438 78.0542 20.6854 85.9375 28.5688C93.8208 36.4521 97.7625 46.0521 97.7625 57.3687C97.7625 64.6062 96.0625 71.1979 92.6625 77.1438C89.2583 83.0896 84.7438 87.8813 79.1188 91.5188C83.7271 94.7146 88.3938 97.6875 93.1188 100.438C97.8438 103.183 102.706 105.723 107.706 108.056C106.31 105.035 104.81 102.006 103.206 98.9688C101.594 95.9313 99.8542 92.8229 97.9875 89.6437C97.5583 88.9062 97.4604 88.0938 97.6938 87.2063C97.9313 86.3271 98.4146 85.6729 99.1438 85.2438C99.8729 84.8188 100.679 84.7229 101.563 84.9562C102.446 85.1896 103.098 85.6688 103.519 86.3938C106.981 92.1646 109.758 97.2708 111.85 101.713C113.942 106.154 114.988 109.215 114.988 110.894C114.988 112.152 114.563 113.154 113.713 113.9C112.863 114.646 111.748 115.021 110.369 115.025ZM68.0688 74.4375C69.3604 74.4375 70.4458 74 71.325 73.125C72.2 72.25 72.6375 71.1667 72.6375 69.875C72.6375 68.5833 72.2 67.4979 71.325 66.6188C70.4542 65.7438 69.3708 65.3063 68.075 65.3063C66.7792 65.3063 65.6958 65.7438 64.825 66.6188C63.95 67.4896 63.5125 68.5729 63.5125 69.8688C63.5125 71.1646 63.95 72.2479 64.825 73.1188C65.6958 73.9938 66.7792 74.4313 68.075 74.4313M75.9875 53.6438C77.1958 53.6438 78.2021 53.2479 79.0063 52.4563C79.8104 51.6646 80.2125 50.6646 80.2125 49.4562C80.2125 48.2479 79.8167 47.2417 79.025 46.4375C78.2333 45.6333 77.2333 45.2313 76.025 45.2313C74.8167 45.2313 73.8125 45.6271 73.0125 46.4188C72.2042 47.2063 71.8 48.2063 71.8 49.4188C71.8 50.6271 72.1958 51.6313 72.9875 52.4313C73.7792 53.2396 74.7792 53.6438 75.9875 53.6438Z" fill="var(--color-title)"/>
                        </svg>
                    </template>
                </SectionTitle>

                <p v-if="aboutMe" v-for="description in aboutMe[0].description.blocks">{{ description.data.text }}</p>

                <CTA
                    :src="RockOn"
                    :nav="true"
                    to="contact"
                    alt="Collab with me"
                    title="Collab with me"
                    text="Contact Me!"
                />
            </div>
        </div>
    </section>
</main>

</template>

<script setup lang="ts">
import { directusURL, directusURLAssets } from '~/plugins/directus'

// KARBON PLANET
import DeadDog33 from '~/assets/imgs/karbon-planet/Moondough 3.webp'
import KarbonPlanetLogo from '~/assets/imgs/logos/Karbon Planet-FullW.png'

// KARBON KANDI
import KarbonKandiEvent from '~/assets/imgs/karbon-kandi/A55A3101.webp'
import KarbonKandiLogo from '~/assets/imgs/karbon-kandi/Karbon Kandi White Logo.png'

// CTA
import Planet from '~/assets/imgs/svgs/planet.svg'
import Flower from '~/assets/imgs/svgs/flower.svg'
import Ticket from '~/assets/imgs/svgs/ticket.svg'
import RockOn from '~/assets/imgs/svgs/rock-on.svg'
import Panda from '~/assets/imgs/svgs/panda.svg'
import SoundCloud from '~/assets/imgs/svgs/soundcloud.svg'

// UPCOMING EVENTS
import Eyes from '~/assets/imgs/svgs/eyes.svg'

// SOUNDCLOUD 
import ThatUndergroundWarehouse from '~/assets/imgs/soundcloud/that-underground-warehouse.jfif'

// PORTRAITS
import Xavier1 from '~/assets/imgs/portraits/xavier-1.png'
import Xavier2 from '~/assets/imgs/portraits/xavier-2.jpg'

// MOBILE HERO IMGS
import Hero1 from '~/assets/imgs/hero/hero-1.jpg'

const { $directus, $readItems, $readSingleton } = useNuxtApp()

const eventMarquee = ref<HTMLDivElement | null>(null),
    pastEventPosters = ref<(HTMLImageElement | null)[]>([]);

const leftMarqueeScrollability = ref<boolean>(false),
    rightMarqueeScrollability = ref<boolean>(true);

const radioJaivesRightArrow = ref<boolean>(true),
    radioJaivesLeftArrow = ref<boolean>(false); 

// Default music track index to be displayed 
const trackIndex = ref<number>(0); 

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

const { data: collage } = await useAsyncData('past_events_files', () => {
  return $directus.request($readItems('past_events_files'))
}, { lazy: true })

const { data: collaborators } = await useAsyncData('collaborators', () => {
  return $directus.request($readItems('collaborators'))
}, { lazy: true })

const { data: music } = await useAsyncData('music', () => {
  return $directus.request($readItems('music'))
}, { lazy: true })

const { data: aboutMe } = await useAsyncData('about_me', () => {
  return $directus.request($readItems('about_me'))
}, { lazy: true })

const { data: musicSection } = await useAsyncData('music_section', () => {
  return $directus.request($readItems('music_section'))
}, { lazy: true })


const isNotScrolling = ref<boolean>(true);

const removePointerEvent = computed(() => {
    return isNotScrolling.value ? 'on-pointer-events' : 'off-pointer-events'; 
})

const seeMorePastEvents = (mode: number) => {
    if (eventMarquee.value && pastEventPosters.value[0]){
        const posterWidth = pastEventPosters.value[0].getBoundingClientRect().width; 

        if (mode > 0){
            eventMarquee.value.scrollBy({
                left: posterWidth * 2, 
                behavior: 'smooth'
            })
        } else {
            eventMarquee.value.scrollBy({
                left: posterWidth * 2 * -1, 
                behavior: 'smooth'
            })
        }
    }
}

const seeMoreMusic = (mode: number) => {
    if (music.value){
        // See prevous
        if (mode < 0){
            trackIndex.value--; 
        }

        // See next
        if (mode > 0){
            trackIndex.value++;
        }

        trackIndex.value == (music.value.length - 1) ?
            radioJaivesRightArrow.value = false :
            radioJaivesRightArrow.value = true; 

        trackIndex.value == 0 ? 
            radioJaivesLeftArrow.value = false : 
            radioJaivesLeftArrow.value = true; 
        
    }
}

// const nextYTVideo = (index: number) => {
//     if (index > 0){
//         console.log('yt index: ', index);
//         return {
//             left: `${80 + (index * 10)}%`, 
//             transform: `translateX(-${80 + (index * 10)}%)`  
//         }
//     }
// }

onMounted(() => {
    let isScrolling: any;

    // * CHECK IF USER IS CURRENTLY SCROLLING
    // If scrolling => make pointer-events via removePointerEvent true
    window.addEventListener('scroll', () => {
        isNotScrolling.value = false; 
        clearTimeout(isScrolling);

        isScrolling = setTimeout(() => {
            isNotScrolling.value = true;
        }, 100);
    })

    if (eventMarquee.value){
        eventMarquee.value.addEventListener('scroll', () => {

            const el = eventMarquee.value!; 
            // Get max value if you were to scroll all the way to the end of the marquee
            const maxScroll = el.scrollWidth - el.clientWidth;

            // Remove left or right arrow buttons if it's at the start/end of the marquee respectfully
            leftMarqueeScrollability.value = el.scrollLeft > 0; 
            el.scrollLeft == maxScroll ? 
                rightMarqueeScrollability.value = false :
                rightMarqueeScrollability.value = true;
        })
    }
})


</script>

<style scoped>
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
.hero-mobile{
    display: none;
}

@media (max-width: 768px){
    .mobile-marquee{
        top: var(--padding-block-section);
        left: 0;
        position: absolute;
        z-index: 1000;
    }
    .hero{
        display: none;
    }
    .hero-mobile{
        display: flex;
        padding-block: calc(var(--padding-block-section) * 2);
    }
    .hero-mobile-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--padding-block-section);
    }
    .hero-mobile > img{
        position: relative;
    }
    .hero-mobile > img.bkg{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }
    .duo-logos{
        display: flex;
        justify-content: center;
        align-items: stretch;
        gap: var(--gap-content);
    }
    .split-line{
        border: 1px solid var(--color-text);
        height: 100px;
        width: 1px;
        align-self: center;
    }
    .logo-and-event-type{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .logo-and-event-type.second > img{
        align-self: center;
    }
    .logo-and-event-type.second > p{
        margin-top: auto;
    }
    .logo-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
    }
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
    * UPCOMING EVENTS
*/
/* section.upcoming-events{
    background: var(--color-bkg-linear-gradient-1);
}
.event{
    position: relative;
    display: flex;
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
} */
/*
    * PAST EVENTS
*/
section.past-events{
    background: var(--color-bkg-linear-gradient-2);
}
.event-marquee-container{
    position: relative;
    overflow-x: hidden;
}
.event-marquee{
    display: flex;
    flex-wrap: nowrap;
    gap: var(--gap-content);
    overflow-x: hidden;
}
img.past-event-poster{
    width: var(--w-past-event); /* Determines the w of the event box */
    height: var(--w-past-event); /* Determines the w of the event box */
    object-fit: cover;
    border-radius: var(--border-radius);
}
h3.past-event-name{
    font-size: var(--font-size-past-event-name);
}
.past-event{
    display: flex;
    flex-direction: column;
    gap: var(--gap-content);
    width: var(--w-past-event);
}
.past-event-description-container{
    display: flex;
    flex-direction: column;
    gap: var(--gap-general);
}
button.see-more-events{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 95%;
    transform: translate(-95%, -50%);
    width: var(--w-cta-circle);
    height: var(--w-cta-circle);
    border-radius: var(--border-radius-circle);
    border: none;
    background-color: var(--color-cta-bkg);
    z-index: 100;
}
button.see-prev-events{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translate(-5%, -50%);
    width: var(--w-cta-circle);
    height: var(--w-cta-circle);
    border-radius: var(--border-radius-circle);
    border: none;
    background-color: var(--color-cta-bkg);
    z-index: 100;
}
@media (max-width: 768px){
    .event-marquee{
        overflow-x: scroll;
    }
    button.see-more-events,
    button.see-prev-events{
        display: none;
    }
}


/*
    * COLLAB SECTION 
*/
section.collab{
    position: relative;
    overflow: hidden;
    min-height: var(--font-size-h2);
    background-color: var(--color-bkg);
    z-index: 1;
    padding-block: var(--padding-block-section) calc(var(--padding-block-section) * 3);
}

/*
    * RADIOJAVIES
*/
section.radiojaives{
    position: relative;
    background: var(--color-bkg-linear-gradient-1);
    /* min-height: 800px;
    height: 100dvh; */
}
.bkg-title-container{
    position: absolute;
    top: -50%;
    left: 50%;
    height: 100%;
    transform: translate(-50%, 0);
    display: flex;
    flex-direction: column;
    gap: var(--gap-content);
    z-index: 0;
}
p.bkg-title{
    font-size: var(--font-size-music);
    font-weight: var(--font-weight-h3);
    line-height: var(--line-height-music);
    color: var(--color-title);
}
.youtube-wrapper{
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    height: calc(var(--w-poster) * 1.2);
    display: flex;
    align-items: center;
    gap: var(--gap-content);
    z-index: 2;
}
.youtube:first-child{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: var(--w-poster);
    height: var(--w-poster);
}
.youtube:not(:first-child){
    position: absolute;
    width: 200px;
    height: 200px;
}

.arrow-button-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--gap-general);
    position: absolute;
    z-index: 100;
}
.arrow-button-container.right{
    top: 50%;
    left: 95%;
    transform: translate(-95%, -50%);
}
.arrow-button-container.left{
    top: 50%;
    left: 5%;
    transform: translate(-5%, -50%);
}

@media (max-width: 768px){
    section.radiojaives{
        height: 500px;
    }
    .youtube-wrapper{
        position: relative; 
        height: 100%;
    }
    .youtube-wrapper iframe.youtube{
        width: 100%;
        height: 100%;
    }
    .arrow-button-container.right{
        top: 100%;
        left: 70%;
        transform: translateX(-30%);
    }
    .arrow-button-container.left{
        top: 100%;
        left: 30%;
        transform: translateX(-70%);
    }
}

button.see-more-music{
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--w-cta-circle);
    height: var(--w-cta-circle);
    border-radius: var(--border-radius-circle);
    border: none;
    background-color: var(--color-cta-bkg);
    z-index: 100;
}
button.see-more-music > svg {
    width: var(--w-cta-arrow);
}
button.see-prev-music{
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--w-cta-circle);
    height: var(--w-cta-circle);
    border-radius: var(--border-radius-circle);
    border: none;
    background-color: var(--color-cta-bkg);
    z-index: 100;
}
button.see-prev-music > svg{
    width: var(--w-cta-arrow);
    transform: rotate(180deg);
}



.chicago-star-container{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
#chicago-star-1, #chicago-star-2, #chicago-star-3, #chicago-star-4{
    position: absolute;
}
#chicago-star-1{
    top: 5%;
    left: 5%;
    transform: translate(-5%, -5%);
}
#chicago-star-2{
    top: 5%;
    left: 95%;
    transform: translate(-95%, -5%);
}
#chicago-star-3{
    top: 95%;
    left: 5%;
    transform: translate(-5%, -95%);
}
#chicago-star-4{
    top: 95%;
    left: 95%;
    transform: translate(-95%, -95%);
}

/*
    * RADIOJAIVES DETAILS
*/
section.radiojaives-details{
    background: var(--color-bkg-2);
}
.details-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--gap-content);
}
.details-container > p { 
    width: var(--w-music-description);
}

/*
    * ABOUT ME SECTION
*/
.about{
    background: var(--color-bkg-linear-gradient-2);
}
.two-col-container{
    display: flex;
    flex-direction: row;
    gap: var(--gap-content);
}
.content-container{
    display: flex;
    flex-direction: column;
    gap: var(--gap-content);
}

@media (max-width: 768px){
    .two-col-container{
        flex-direction: column;
    }
    .about > .two-col-container > img.poster{
        width: 100%;
    }
}


/*
    * DYNAMIC CLASSES
*/
.on-pointer-events{
    pointer-events: auto;
}
.off-pointer-events{
    pointer-events: none;
}

</style>
<template>
    <div class="collab-marquee-container">
        <div class="collab-marquee">
            <div class="repeated-marquee-container">
                <div class="collabs" >
                    <!-- STAR -->
                    <svg width="36" height="41" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.137 0.251953L21.9566 13.6361L35.4575 10.252L25.7763 20.252L35.4575 30.252L21.9566 26.8678L18.137 40.252L14.3173 26.8678L0.816454 30.252L10.4976 20.252L0.816454 10.252L14.3173 13.6361L18.137 0.251953Z" fill="var(--color-text)"/>
                    </svg>

                    <p class="collaborators">INDEPENDENT PROMOTER</p>


                    <!-- STAR -->
                    <svg width="36" height="41" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.137 0.251953L21.9566 13.6361L35.4575 10.252L25.7763 20.252L35.4575 30.252L21.9566 26.8678L18.137 40.252L14.3173 26.8678L0.816454 30.252L10.4976 20.252L0.816454 10.252L14.3173 13.6361L18.137 0.251953Z" fill="var(--color-text)"/>
                    </svg>

                    <p class="collaborators">INDEPENDENT PROMOTER</p>

                    <!-- STAR -->
                    <svg width="36" height="41" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.137 0.251953L21.9566 13.6361L35.4575 10.252L25.7763 20.252L35.4575 30.252L21.9566 26.8678L18.137 40.252L14.3173 26.8678L0.816454 30.252L10.4976 20.252L0.816454 10.252L14.3173 13.6361L18.137 0.251953Z" fill="var(--color-text)"/>
                    </svg>

                    <p class="collaborators">INDEPENDENT PROMOTER</p>

                    <!-- STAR -->
                    <svg width="36" height="41" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.137 0.251953L21.9566 13.6361L35.4575 10.252L25.7763 20.252L35.4575 30.252L21.9566 26.8678L18.137 40.252L14.3173 26.8678L0.816454 30.252L10.4976 20.252L0.816454 10.252L14.3173 13.6361L18.137 0.251953Z" fill="var(--color-text)"/>
                    </svg>

                    <p class="collaborators">INDEPENDENT PROMOTER</p>
                </div>
            </div>
            
        </div>
    </div>
    
</template>

<script setup>

</script>

<style scoped>
.collab-marquee-container{
    position: relative;
    min-height: calc(var(--font-size-h2) + var(--padding-inline-marquee));
}
.collab-marquee{
    position: absolute;
    top: 0;
    left: -5%;
    display: flex;
    align-items: center;
    transform: translateX(-5%);
    gap: var(--gap-section);
    padding-inline: var(--padding-inline-marquee);
    overflow-x: hidden;
    animation: rollMarquee 20s linear infinite;
}
.repeated-marquee-container{
    display: flex;
    align-items: center;
    gap: var(--gap-section);
}
.collabs{
    display: flex;
    align-items: center;
    gap: var(--gap-section)
}
p.collaborators{
    font-size: var(--font-size-h2);
    font-family: var(--font-family-konkhmer-sleokchher);
    font-weight: var(--font-weight-h2);
    white-space: nowrap;
    color: var(--color-title);
}
@keyframes rollMarquee{
    from {
        transform: translateX(-5%);
    }
    to{
        transform: translateX(-80%);
    }
}
.cta{
    white-space: nowrap;
}


</style>
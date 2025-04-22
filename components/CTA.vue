<template>
    <NuxtLink v-if="nav" :to="`/${to}`" class="nav-cta-container">
        <span class="nav-cta-content">
            <p>{{ text }}</p>
            <img :src="src" :alt="alt" :title="title">
        </span>    
    </NuxtLink>

    <a v-else :href="to" target="_blank" class="cta-container">
        <span class="cta-content">
            <p>{{ text }}</p>
            <img :src="src" :alt="alt" :title="title">
        </span>    
    </a>
</template>

<script setup lang="ts">

const props = defineProps({
    src: String, 
    alt: String,
    title: String,
    text: String,
    nav: {
        type: Boolean,
        default: false
    },
    to: String,
})

</script>

<style scoped>
p {
    line-height: var(--line-height-cta);
}
.nav-cta-content{
    display: flex;
    align-items: center;
    gap: var(--gap-general);
    border-radius: var(--border-radius);
    padding: var(--padding-cta);
    background-color: var(--color-cta-bkg);
}
.nav-cta-content > p{
    font-family: var(--font-family-montserrat);
    font-size: var(--font-size-nav);
    font-weight: var(--font-weight-cta);
}
.nav-cta-content > img{
    width: var(--font-size-cta);
}
.cta-container{
    width: fit-content;
}

.cta-content{
    display: flex;
    align-items: center;
    gap: var(--gap-general);
}
</style>
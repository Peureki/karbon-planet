<template>
    <NuxtLink v-if="nav" :to="`/${to}`" class="cta-container">
        <span class="cta-content">
            <p>{{ text }}</p>
            <img :src="src" :alt="alt" :title="title">
        </span>    
    </NuxtLink>

    <a v-else :href="to" class="cta-container">
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
.cta-content{
    display: flex;
    align-items: center;
    gap: var(--gap-general);
}
</style>
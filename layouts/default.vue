<template>
    <Navigation/>
    <Transition name="page">
        <MobileNavigation v-if="openMobileNav"/>
    </Transition>
    

    <div>
        <slot/>
    </div>

    <PreFooter :class="{'contact-prefooter': route.path === '/contact'}"/>
    <Footer v-if="route.path !== '/contact'"/>
</template>

<script setup lang="ts">

const route = useRoute()

const useOpenMobileNav = () => useState<boolean>('openMobileNav', () => false);
const openMobileNav = useOpenMobileNav()

</script>

<style scoped>

.contact-prefooter{
    display: none;
}

</style>

<template>
    <svg viewBox="0 0 1440 30" preserveAspectRatio="none" :fill="fill" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.316895V0L1440 0V0.316895C1209.87 15.1245 968.616 23 720 23C471.384 23 230.126 15.1245 0 0.316895Z"/>
    </svg>
</template>

<script setup lang="ts">

interface Props {
    fill: string
}

const props = defineProps<Props>(); 

</script>

<style scoped>
.curved-start-section-header{
    position: absolute;
    top: -30px;
    left: 0;
    width: 100%;
    height: 30px;
    transform: rotate(180deg);
    z-index: 10000001;
}
.curved-end-section-header{
    position: absolute;
    bottom: -30px;
    left: 0;
    width: 100%;
    height: 30px;
    z-index: 10000001;
}
.curved-end-section > path {
    fill: var(--color-bkg);
}
.curved-end-section{
    position: absolute;
    bottom: -1px;
    left: 0;
    z-index: 10000000;
}
</style>
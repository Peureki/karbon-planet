<template>
    <div class="title-container">
        <h2>{{ title }}</h2>
        <slot name="svg"/>
    </div>
</template>

<script setup lang="ts">
interface Props{
    title: string, 
}

const props = defineProps<Props>();

</script>
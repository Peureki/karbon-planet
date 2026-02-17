<template>
    <div class="img-modal-container" @click="$emit('someEvent')">
        <img class="modal-img" v-if="image" :src="`${directusURLAssets}/${image}`"
    </div>

</template>

<script setup lang="ts">
import { directusURL, directusURLAssets } from '~/plugins/directus'

interface Props{
    image?: string
}

const props = defineProps<Props>(); 


</script>

<style scoped>
.img-modal-container{
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; 
    height: 100dvh;
    background-color: var(--color-img-modal);
    z-index: 10000002;
    cursor: zoom-out;
}
img.modal-img{
    width: var(--w-poster);
    border-radius: var(--border-radius);
}

</style>
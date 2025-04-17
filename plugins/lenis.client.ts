import Lenis from "lenis";

export default defineNuxtPlugin((nuxtApp) => {
    const lenis = new Lenis();

    function raf(time: any) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    nuxtApp.provide('lenis', lenis); 
})
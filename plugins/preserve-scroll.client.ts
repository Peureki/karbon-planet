// plugins/preserve-scroll.client.ts
let scrollY = 0

if (import.meta.hot) {
    import.meta.hot.dispose(() => {
        scrollY = window.scrollY
    })

    import.meta.hot.accept(() => {
        window.scrollTo(0, scrollY)
    })
}

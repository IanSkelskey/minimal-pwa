self.addEventListener("install", event => {
    console.log("Service worker installed", event);
});

self.addEventListener("fetch", event => {
    console.log("Service worker fetching...", event)
})
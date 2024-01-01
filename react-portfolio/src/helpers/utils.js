export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href
}

export const getPathName = () => {
    return window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
}
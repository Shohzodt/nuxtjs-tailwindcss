// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '~/assets/styles/main.css',
        '~/assets/styles/tailwind.css',
    ],
    app: {
        head: {
            viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
            title: "Nuxt Tailwind css",
            meta: [
                { name: 'description', content: "" }
            ],
            link: [
                {
                    rel: "icon", type: "image/png", href: "/images/javascript.png"
                }
            ]
        }
    },
    modules: ['@nuxtjs/tailwindcss']
})

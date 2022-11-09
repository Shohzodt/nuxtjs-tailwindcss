import type { Config } from 'tailwindcss'

export default {
    theme: {},
    plugins: [],
    content: [
        `~/components/**/*.{vue,js,ts}`,
        `~/layouts/**/*.vue`,
        `~/pages/**/*.vue`,
        `~/App.{js,ts,vue}`,
        `~/app.{js,ts,vue}`,
        `~/Error.{js,ts,vue}`,
        `~/error.{js,ts,vue}`
    ]
}
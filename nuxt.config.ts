// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/devtools', '@sidebase/nuxt-auth'],
    devtools: {enabled: false},
    ssr: true,
    runtimeConfig: {
        // The private keys which are only available within server-side

        // Keys within public, will be also exposed to the client-side
        public: {
            appUrl: process.env.NUXT_PUBLIC_APP_URL,
            appName: process.env.NUXT_PUBLIC_APP_NAME,
            apiBaseUrl: process.env.NUXT_API_BASE_URL,
            useMock: process.env.NUXT_PUBLIC_USE_MOCKS,
        },
    },

    auth: {
        isEnabled: true,
        baseURL: `/api/v1`,
        provider: {
            type: 'local',
            endpoints: {
                signIn: {path: '/auth/mock/login', method: 'post'},
                signOut: {path: '/auth/mock/logout', method: 'post'},
                signUp: {path: '/auth/mock/register', method: 'post'},
                getSession: {path: '/auth/mock/session', method: 'get'},
            },
            pages: {
                login: '/login',
            },
            token: {
                signInResponseTokenPointer: '/token',
            },
            sessionDataType: {
                id: 'string',
                name: 'string',
                email: 'string',
            },
        },
        session: {
            // Whether to refresh the session every time the browser window is refocused.
            enableRefreshOnWindowFocus: true,

            // Whether to refresh the session every `X` milliseconds. Set this to `false` to turn it off. The session will only be refreshed if a session already exists.
            enableRefreshPeriodically: 5000,
        },
        globalAppMiddleware: false,
    },
});

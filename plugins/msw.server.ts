export default defineNuxtPlugin(async () => {
    const env = useRuntimeConfig();

    if (env?.public?.useMock || true) {
        try {
            const {server} = await import('~/mocks/server');
            server?.listen();
        } catch (err) {
        }
    }
});
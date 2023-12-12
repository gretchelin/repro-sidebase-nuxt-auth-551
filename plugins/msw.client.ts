export default defineNuxtPlugin(async () => {
    const env = useRuntimeConfig();

    if (env?.public?.useMock || true) {
        try {
            const browser = await import('~/mocks/browser');
            browser?.worker?.start();
        } catch (err) {
        }
    }
});
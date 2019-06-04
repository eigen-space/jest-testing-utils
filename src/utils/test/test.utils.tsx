export class TestUtils {

    static defaultPropsWrapper(func: Function): () => void {
        return jest.fn(() => func());
    }

    static waitWhileAsyncPollIsNotEmpty(): Promise<void> {
        return new Promise(resolve => setImmediate(resolve));
    }
}

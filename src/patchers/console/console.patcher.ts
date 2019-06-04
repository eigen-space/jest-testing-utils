import { Patcher } from '../..';

export class ConsolePatcher implements Patcher<undefined> {

    do(): void {
        global.console.log = jest.fn();
        global.console.info = jest.fn();
        global.console.warn = jest.fn();
        global.console.error = jest.fn();
    }
}
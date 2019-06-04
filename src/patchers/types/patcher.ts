export interface Patcher<A> {

    do(args?: A): void;
}
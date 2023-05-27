import create from "zustand";

type CounterState = {
  counter: number;
  increment: () => void;
  decrement: () => void;
};

const useCounterStore = (set: any, get: any) => ({
  counter: 0,
  increment: () =>
    set((state: CounterState) => ({ counter: state.counter + 1 })),
  decrement: () =>
    set((state: CounterState) => ({ counter: state.counter - 1 })),
});

export const counterStore = create<CounterState>(useCounterStore);

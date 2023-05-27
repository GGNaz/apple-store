import create from "zustand";
import { CartProps } from "../pages/landingpage/ts/landingmodule";

type ZustandCartProps = {
  mycart: CartProps[];
  storeCartList: (data: CartProps) => void;
  //   decrement: () => void;
};

const storeCart = (set: any, data: CartProps) => {
  const storedData = cartStore.getState().mycart;
  // const copyStore = [...storedData]
  // copyStore.push(data)
  const findIfExist = storedData.findIndex(
    (state) => state.name === data.name && state.color === data.color
  );
  if (findIfExist >= 0) {
    const copyStoreData = [...storedData];

    copyStoreData[findIfExist].quantity =
      copyStoreData[findIfExist].quantity + 1;
    set({
      mycart: [...copyStoreData],
    });
  } else {
    set({ mycart: [...storedData, data] });
  }
};

const useCartStore = (set: any, get: any) => ({
  mycart: [],
  storeCartList: (data: CartProps) => storeCart(set, data),
  // increment: () =>
  // decrement: () => set((state: CounterState) => ({ counter: state.counter - 1 })),
});

export const cartStore = create<ZustandCartProps>(useCartStore);

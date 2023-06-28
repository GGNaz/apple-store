import create from "zustand";
import { CartProps, MyCartProps } from "../pages/landingpage/ts/landingmodule";

type ZustandCartProps = {
  mycart: MyCartProps[];
  storeCartList: (data: MyCartProps) => void;
  removeCart: (id: number) => void;
  //   decrement: () => void;
};

const storeCart = (set: any, data: MyCartProps) => {
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

const removeStoredCart = (set: any, id: number) => {
  const storedData = cartStore.getState().mycart;
  const findId = storedData.findIndex(({ _id }) => _id === id);
  console.log(
    "🚀 ~ file: cartStore.tsx:34 ~ removeStoredCart ~ findId:",
    findId
  );
  if (findId >= 0) {
    storedData.splice(findId, 1);
    console.log(
      "🚀 ~ file: cartStore.tsx:37 ~ removeStoredCart ~ storedData:",
      storedData
    );

    set({ mycart: [...storedData] });
  }
};

const useCartStore = (set: any) => ({
  mycart: [],
  storeCartList: (data: MyCartProps) => storeCart(set, data),
  removeCart: (id: number) => removeStoredCart(set, id),
  // increment: () =>
  // decrement: () => set((state: CounterState) => ({ counter: state.counter - 1 })),
});

export const cartStore = create<ZustandCartProps>(useCartStore);

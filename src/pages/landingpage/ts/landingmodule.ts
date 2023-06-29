export type CartProps = {
    name: string,
    quantity: number,
    color: string,
    specs: string,
    picture: string,
    price: number
}

export type ColorVariantsProps = {
    value: string
    color: string

}

export interface MyCartProps {
    _id: number,
    name: string,
    price: number,
    color: string,
    display: string,
    picture: string,
    chip: string[],
    batteryAndPower: string[],
    memory: string,
    storage: string,
    touchID: string,
    camera: string,
    audio: string[],
    operatingSystem: string,
    inTheBox: string[],
    quantity: number,
  
}
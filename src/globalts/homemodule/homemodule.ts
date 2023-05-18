export type homeProps = {
  item: {
    id: number,
    name: string,
    price: number
  }[]
}

export type routeProps = {
  routeList: {
    id: number,
    path: string,
    component: JSX.Element
  }[]
}
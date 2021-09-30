// В функцию приходит массив состояний заказа и фильтруется
// Нужно заменить FIXME на тип который вычисляется на освове OrderState

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME = OrderState1[];

type OrderState1 = 'initial' | 'inWork' |'fullfilled'
type OrderState2 = 'buyingSupplies' | 'producing' 
type OrderState = OrderState1 | OrderState2 



export const getUserOrderStates = (orderStates: OrderState[]): FIXME => {
  const filteredStates = [] as FIXME
  orderStates.forEach((element) => {
    if (element !== 'buyingSupplies' && element !== 'producing') {
      filteredStates.push(element)
    }
  })
  return filteredStates
}

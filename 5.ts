// eslint-disable-next-line @typescript-eslint/no-explicit-any


type FIXME = OrderState[]


type OrderState = 'initial' | 'inWork' | 'buyingSupplies' | 'producing' | 'fullfilled'


// Hint: with type guards return type can be removed
export const getUserOrderStates = (orderStates: OrderState[], excl:["buyingSupplies","producing"]): FIXME => {

  return orderStates.filter((state) => !excl.find(ele=>ele===state))
}
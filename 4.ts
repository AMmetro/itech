// Есть объединение (юнион) типов заказов в различных состояниях
// и функция filterOnlyInitialAndInWorkOrder которая принимает заказы в любых состояниях
// А возвращает только initial и inWork
// Нужно заменить FIXME на правильный тип вычисленный на основе Order

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME = A | null
   
type A1= {
    state: 'initial'
    sum: number
}

type A2= {  
    state: 'inWork'
    sum: number
    workerId: number
}

type A= A1 | A2

type Order =
  | {
      state: 'initial'
      sum: number
    }
  | {
      state: 'inWork'
      sum: number
      workerId: number
    }
  | {
      state: 'buyingSupplies'
      sum: number
      workerId: number
      suppliesSum: number
    }
  | {
      state: 'producing'
      sum: number
      workerId: number
      suppliesSum: number
      produceEstimate: Date
    }
  | {
      state: 'fullfilled'
      sum: number
      workerId: number
      suppliesSum: number
      produceEstimate: Date
      fullfillmentDate: Date
    }

export const filterOnlyInitialAndInWorkOrder = (order: Order): FIXME => {
  if (order.state === 'initial' || order.state === 'inWork') {
    return order
  }

  return null
}

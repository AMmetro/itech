// eslint-disable-next-line @typescript-eslint/no-explicit-any

// по аналогии с уроком сделал тайпгард, но как его применить не понимаю
// это хоть в ту сторону размышления?

type FIXME = OrderState[]
    type Validanswer = 'initial' | 'inWork' | 'fullfilled'
    type OrderState = 'initial' | 'inWork' | 'buyingSupplies' | 'producing' | 'fullfilled'



    const getUserOrderStates = (orderStates: OrderState[]): FIXME => {

        const result = orderStates.filter((state) => {
             
            function isSatisfies(state:OrderState):state is Validanswer {
                if (state =='initial') {return true}
                if (state =='inWork') {return true}
                if (state =='fullfilled') {return true}
                else {return false}
            };           
              
            function work(state:OrderState) {
                if (isSatisfies(state)){return true}
                else {return false}
                                     }          
              return work(state)
        })
        return result
    }
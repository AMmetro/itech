
export default function Task1() {

    type FIXME = 'initial' | 'inWork'| 'inWork'| 'buyingSupplies'| 'producing'| 'fullfilled'

    type Order = | {
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

    const test=(order: Order)=>{
        const getOrderState = (order: Order): FIXME => order.state;
        console.log(getOrderState(order))
    }


    return (
        <div>
            <button onClick={()=>test({
                state: 'buyingSupplies',
                sum: 1,
                workerId: 23,
                suppliesSum: 34
            })}>Task2</button>

        </div>
    )
}

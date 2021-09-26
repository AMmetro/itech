import React from 'react'

export default function Task1() {

    type FIXME = Order | null

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


    const filterOnlyInitialAndInWorkOrder = (order: Order): FIXME => {
        if (order.state === 'initial' || order.state === 'inWork') {
            return order
        }
        return null
    }

    // console.log(filterOnlyInitialAndInWorkOrder({
    //     state: 'initial',
    //     sum: 12
    // }))


    return (
        <div>

            <button onClick={()=>filterOnlyInitialAndInWorkOrder({
                state: 'initial',
                sum: 12
            })}>Task4</button>

        </div>
    )
}

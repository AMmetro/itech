import React from 'react'

export default function Task5() {


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type FIXME = any

    type OrderState = 'initial' | 'inWork' | 'buyingSupplies' | 'producing' | 'fullfilled'

    // Hint: with type guards return type can be removed
    const getUserOrderStates = (orderStates: OrderState[]): FIXME => {
        return orderStates.filter((state) => state !== 'buyingSupplies' && state !== 'producing')
    }


    return (
        <div>

            {/*<button onClick={()=>filterOnlyInitialAndInWorkOrder({*/}
            {/*    state: 'initial',*/}
            {/*    sum: 12*/}
            {/*})}>Task4</button>*/}

        </div>
    )
}

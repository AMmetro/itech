import React from 'react'



export default function Task1() {

    type FIXME = string[];
    type OrderState = 'initial' | 'inWork' | 'buyingSupplies' | 'producing' | 'fullfilled'

    // ----------------------------------------------------------------------------------------
    //              эквивалентно ???
    //      type filteredStatesType = string[]
    //      const filteredStates = [] as FIXME
    // ----------------------------------------------------------------------------------------

    const getUserOrderStates = (orderStates: OrderState[]): FIXME => {
        const filteredStates = [] as FIXME

        orderStates.forEach((element) => {
            if (element !== 'buyingSupplies' && element !== 'producing') {
                filteredStates.push(element)
            }
        })
        console.log(filteredStates)
        return filteredStates
    }

    return (
        <div >
               <button onClick={() => getUserOrderStates(["initial", "inWork", "buyingSupplies"])}>Task1</button>

        </div>
    )
}

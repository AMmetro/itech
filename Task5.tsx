
export default function Task5() {


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type FIXME = OrderState[]

    type OrderState = 'initial' | 'inWork' | 'buyingSupplies' | 'producing' | 'fullfilled'

    // Hint: with type guards return type can be removed
    const getUserOrderStates = (orderStates: OrderState[]): FIXME => {
        return orderStates.filter((state) => state !== 'buyingSupplies' && state !== 'producing')
    }


    return (
        <div>

            <button onClick={()=>getUserOrderStates(
                 ['initial','inWork','fullfilled']
            )}>Task4</button>

        </div>
    )
}


export default function Task1() {

    type filteredStates='initial' | 'inWork' | 'fullfilled'
    type FIXME = filteredStates[];

    
    type OrderState = 'initial' | 'inWork' | 'buyingSupplies' | 'producing' | 'fullfilled'

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

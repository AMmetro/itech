import React from 'react'

export default function Task1() {

    type FIXME <T extends Record<any, any>, K extends keyof T>  = Omit <T,K>

    const omit = <T extends Record<any, any>, K extends keyof T>(obj: T, keyToOmit: K): FIXME<T,K> => {
        // REcord - погуглить
        console.log(obj)
        console.log(keyToOmit)
        const { [keyToOmit]: x, ...withoutKey } = obj
        //    {a:4, b:6, c:"text"}
        // обратная деструктур

        return withoutKey
    }

    // console.log(omit({a:4, b:6, c:"text"}, "a"))
    // omit({a:4, b:6, c:"text"}, "a")

    return (
        <div>
            TASK 3
            {/*<button onClick={()=>test({*/}
            {/*})}>Task3</button>*/}

        </div>
    )
}

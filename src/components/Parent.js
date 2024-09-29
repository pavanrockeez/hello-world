import React from 'react'
import Child from './Child'

const Parent = () => {
    const names = ['Pavan', 'Some', 'Catre'];
    const executeParentFunction = (name) => {
        alert(`Hello ${name}`)
    }
    return (
        <div>
            <Child fromChild={executeParentFunction} />
            <div>
                <ul>
                    {names.map((item, index) => (
                        <li key={index}>{index} {item}</li>

                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Parent

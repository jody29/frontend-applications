import { createContext, useEffect, useState } from 'react'
import './filter.css'

export const AgeContext = createContext()

export function Filter() {
    const [selectedAge, setAge] = useState('18+')

    console.log(selectedAge)

    const age = (e) => {
        setAge(e.target.value)
    }
        
    return (
        <>
            <AgeContext.Provider value={selectedAge}>
                <h3>Selecteer leeftijd</h3>
                    <span className='filters'>
                        <button value='12+' onClick={age}>12+</button>
                        <button value='12-17' onClick={age}>12-17</button>
                        <button value='18+' onClick={age}>18+</button>
                    </span>
            </AgeContext.Provider>
        </>
    )
}


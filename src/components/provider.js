import { createContext, useState } from 'react'
import './filter.css'

export const AgeContext = createContext()

export function Provider({ children }) {
    const [selectedAge, setAge] = useState('18+')

    console.log(selectedAge)
        
    return (
        <>
            <AgeContext.Provider value={{ selectedAge, setAge }}>
                {children}
            </AgeContext.Provider>
        </>
    )
}


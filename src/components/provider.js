import { createContext, useState } from 'react'
import './filter.css'

export const AgeContext = createContext()

export function Provider({ children }) {
    const [selectedAge, setAge] = useState('18+')
    const [selectedTown, setTown] = useState(null)
    const [percentage, setPercentage] = useState(null)
        
    return (
        <>
            <AgeContext.Provider value={{ selectedAge, setAge, selectedTown, setTown, percentage, setPercentage }}>
                {children}
            </AgeContext.Provider>
        </>
    )
}


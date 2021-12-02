import { createContext, useState } from 'react'
import './filter.css'

export const AgeContext = createContext() // create context 

export const Provider = ({ children }) => { // create provider component
    const [selectedAge, setAge] = useState('18+') // create context for the selectedAge with 18+ as default value
    const [selectedTown, setTown] = useState(null) // create context for the selectedTown with null as default value
    const [percentage, setPercentage] = useState(null) // create the percentage with null as default value
        
    return (
        <>
            <AgeContext.Provider value={{ selectedAge, setAge, selectedTown, setTown, percentage, setPercentage }}>
                {children}
            </AgeContext.Provider>
        </>
    )
}


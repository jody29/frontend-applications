import { createContext, useEffect, useState } from "react";
import covidData from '../data/covid.json'
import townData from '../data/gemeenten.json'

const VaccinContext = createContext(null)

export const VaccinProvider = ({ children }) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        setData({ covid: covidData, town: townData })
    }, [])

    return (
        <VaccinContext.Provider value={data}>{children}</VaccinContext.Provider>
    )
}

export default VaccinContext
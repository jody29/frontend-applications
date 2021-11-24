import { createContext, useEffect, useState } from "react";
import covidData from '../data/covid.json'

const VaccinContext = createContext(null)

export const VaccinProvider = ({ children }) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        setData(covidData)
    }, [])

    return (
        <VaccinContext.Provider value={data}>{children}</VaccinContext.Provider>
    )
}

export default VaccinContext
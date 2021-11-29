import { useEffect, useState } from "react"
import covidData from '../data/covid.json'

export const useData = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        setData(covidData)
    }, [])

    return data
}
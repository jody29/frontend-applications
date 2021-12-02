import { useEffect, useState } from "react"
import covidData from '../data/covid.json' // importing the covid.json file as covidData

export const useData = () => {
    const [data, setData] = useState(null) // create state with data as variable which is null as default

    useEffect(() => {
        setData(covidData) // set the covid.json file as data
    }, [])

    return data
}
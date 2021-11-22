import { json } from "d3-fetch"
import { useEffect, useState } from "react"

let input = '../data/covid.json'

export const useVaccin = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        json(input).then(data => data.json())
        .then(data => {
            setData(data)
        })
    }, [])

    return data
}
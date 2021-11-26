import { useContext } from "react"
import VaccinContext from "../providers/VaccinContext"

const Data = () => {
    const json = useContext(VaccinContext)

    const vaccinData = json ? json.adult : 'loading..'
    const townGeo = json ? json.town : 'loading..'

    console.log(vaccinData, townGeo)

    return <h1>Map incoming..</h1>
}

export default Data
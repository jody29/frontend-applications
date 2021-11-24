import { useContext } from "react"
import VaccinContext from "../providers/VaccinContext"

const Data = () => {
    const json = useContext(VaccinContext)

    return <h1>{JSON.stringify(json, null, 3)}</h1>
}

export default Data
import { useContext } from "react"
import VaccinContext from "../providers/VaccinContext"

const Data = () => {
    const json = useContext(VaccinContext)

    const data = json ? json.reduce((arr, obj) => {
        arr.push({ percentage: obj.Vaccination_coverage_completed, region: obj.Region_name })
        return arr
    }, []) : 'Loading...'

    return <h1>{JSON.stringify(data, null, 3)}</h1>
}

export default Data
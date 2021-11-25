import { useContext } from "react"
import * as topojson from 'topojson-client'
import VaccinContext from "../providers/VaccinContext"

const Data = () => {
    const json = useContext(VaccinContext)

    const vaccinData = json ? json.covid : 'loading..'
    const townGeo = json ? json.town : 'loading..'

    const gmGeo = topojson.feature(
        townGeo,
        townGeo.objects.gm_features
    ).features

    // const data = json ? json.reduce((arr, obj) => {
    //     arr.push({ percentage: obj.Vaccination_coverage_completed, region: obj.Region_name })
    //     return arr
    // }, []) : 'Loading...'

    // const data = json ? console.log(json.covid, json.town) : null

    console.log(gmGeo)

    return <h1>Map incoming..</h1>
}

export default Data
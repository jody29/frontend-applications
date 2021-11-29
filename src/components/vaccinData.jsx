import { useContext } from "react"
import VaccinContext from "../providers/VaccinContext"
import { MapChart } from "./map"

const Data = () => {
    const json = useContext(VaccinContext)

    const vaccinData = json ? json.adult : null
    const townGeo = json ? json.town : null
    const colors = [{ color:'#B7FFBF', value: 50 }, { color:'#95F985', value: 60}, { color:'#4DED30', value: 70}, { color:'#0A7136', value: 80}, { color:'#02491F', value: 90}, { color:'#0B2310', value: 100}]

    

    console.log(townGeo)

    return (
        <div>
            <MapChart town={townGeo} vaccin={vaccinData} colors={colors} />
        </div>
    )
}

export default Data
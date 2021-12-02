import { useContext } from "react";
import { useData } from "../hooks/useData";
import { useWorldData } from "../hooks/useWorldData";
import { Marks } from "./Marks";
import { AgeContext } from "./provider";

const width = 600 // width of the svg
const height = '89vh' // height of the svg

let colors = [{ color:'#B7FFBF', value: 50 }, { color:'#95F985', value: 60}, { color:'#4DED30', value: 70}, { color:'#0A7136', value: 80}, { color:'#02491F', value: 90}, { color:'#0B2310', value: 100}]

export const Towns = () => {
    const townData = useWorldData() // geojson file
    const data = useData() // vaccin data
    const {selectedAge} = useContext(AgeContext) // selected age which is selected in the Filter component
    const {setTown} = useContext(AgeContext) // function that sets the town
    const {setPercentage} = useContext(AgeContext) // function that sets the percentage of the selected town

    if (!townData || !data) { // Check if there is no data. If this is true then return a loading screen
        return <pre>Loading...</pre>
    }

    const filteredData = data.filter(d => d.Age_group === selectedAge) // only view the data of the selected age group

    const rowByTown = new Map() // create a new Map object and store it in variable

    filteredData.forEach(d => { // create a d for every object that filteredData has
        rowByTown.set(d.Region_code, d) // this will make a key-value Map which iterates in insertion order
    })

    const townClick = (e) => {
        setTown(e.target.getAttribute('data_region')) // when click on a town, set the name of the town in this variabel
        setPercentage(e.target.getAttribute('data_percentage')) // when click on a town, set the vaccination percentage in this variabel
    }

    return (
        <svg width={width} height={height}>
            <Marks
            townData={townData}
            rowByTown={rowByTown}
            colors={colors}
            townClick={townClick}
            />
        </svg>
    )
}

export default colors


import React, { useEffect, useState } from "react";
import { useData } from "./useData";
import { useWorldData } from "./useWorldData";
import { Marks } from "./Marks";
import selectedAge from "./filter";

const width = 600 // width of the svg
const height = '89vh' // height of the svg

let colors = [{ color:'#B7FFBF', value: 50 }, { color:'#95F985', value: 60}, { color:'#4DED30', value: 70}, { color:'#0A7136', value: 80}, { color:'#02491F', value: 90}, { color:'#0B2310', value: 100}]

export const Towns = () => {
    const townData = useWorldData() // geojson file
    const data = useData() // vaccin data

    if (!townData || !data) { // Check if there is no data. If this is true then return a loading screen
        return <pre>Loading...</pre>
    }

    const filteredData = data.filter(d => d.Age_group === selectedAge)

    const rowByTown = new Map() 

    filteredData.forEach(d => {
        rowByTown.set(d.Region_code, d)
    })

    return (
        <svg width={width} height={height}>
            <Marks
            townData={townData}
            rowByTown={rowByTown}
            colors={colors}
            />
        </svg>
    )
}

export default colors


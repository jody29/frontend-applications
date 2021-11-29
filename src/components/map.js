import React from "react";
import { useData } from "./useData";
import { useWorldData } from "./useWorldData";
import { Marks } from "./Marks";

const width = 600
const height = '89vh'

const selectedAgeGroup = '18+'

export const Towns = () => {
    const townData = useWorldData()
    const data = useData()

    if (!townData || !data) {
        return <pre>Loading...</pre>
    }

    let colors = [{ color:'#B7FFBF', value: 50 }, { color:'#95F985', value: 60}, { color:'#4DED30', value: 70}, { color:'#0A7136', value: 80}, { color:'#02491F', value: 90}, { color:'#0B2310', value: 100}]

    const filteredData = data.filter(d => d.Age_group === selectedAgeGroup)

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


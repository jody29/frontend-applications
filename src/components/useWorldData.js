import { useEffect, useState } from "react";
import * as topojson from 'topojson-client'
import townData from '../data/gemeenten.json'

export const useWorldData = () => {
    const [data, setData] = useState(null) // create state with the topojson as data. Default value is null

    useEffect(() => {
        setData(topojson.feature(townData, townData.objects.gm_features)) // Set the feature list of the topojson file as data
    }, [])

    return data
}
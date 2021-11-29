import { useEffect, useState } from "react";
import * as topojson from 'topojson-client'
import townData from '../data/gemeenten.json'

export const useWorldData = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        setData(topojson.feature(townData, townData.objects.gm_features))
    }, [])

    return data
}
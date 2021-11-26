import { createContext, useEffect, useState } from "react";
import covidData from '../data/covid.json'
import townData from '../data/gemeenten.json'
import * as topojson from 'topojson-client'

const VaccinContext = createContext(null)

export const VaccinProvider = ({ children }) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        setData({  
            town: topojson.feature(townData, townData.objects.gm_features).features,

            twelve: covidData.reduce((arr, obj) => {
                if (obj.Age_group === '12+') {
                    arr.push({
                        percentage: obj.Vaccination_coverage_completed,
                        region: obj.Region_code
                    })
                } 
                return arr 
            }, []),

            teen: covidData.reduce((arr, obj) => {
                if (obj.Age_group === '12-17') return arr.push({
                    percentage: obj.Vaccination_coverage_completed,
                    region: obj.Region_code
                })
                return arr 
            }, []),
            
            adult: covidData.reduce((arr, obj) => {
                if (obj.Age_group === '18+') return arr.push({
                    percentage: obj.Vaccination_coverage_completed,
                    region: obj.Region_code
                })
                return arr 
            }, [])
        })
    }, [])

    return (
        <VaccinContext.Provider value={data}>{children}</VaccinContext.Provider>
    )
}

export default VaccinContext
import { geoMercator, geoPath } from "d3-geo";
import color from "../helpers/checkPercentage.js";
import '../components/marks.css'

const scale = 7500

const projection = geoMercator().scale(scale)
const path = geoPath(projection)
const transform = `translate(${-scale/8.3}, ${scale + 590})`

export const Marks = ({
    townData,
    rowByTown,
    colors,
    townClick
}) => (
    <g>
       {townData.features.map(feature => {

           const d = rowByTown.get(feature.properties.code)
           const percentage = d.Vaccination_coverage_completed
           
           return <path 
           transform={transform} 
           className='gemeente' 
           data_region={d.Region_name} 
           data_percentage={d.Vaccination_coverage_completed}
           key={d.Region_name} 
           onClick={townClick} 
           fill={color(percentage, colors)} 
           d={path(feature)} 
           />
       })}
    </g>
)
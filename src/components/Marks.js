import { geoMercator, geoPath } from "d3-geo";
import color from "../helpers/checkPercentage.js";
import '../components/marks.css'

const scale = 7500

const projection = geoMercator().scale(scale) // projection for the map with the scale of the map
const path = geoPath(projection) // creates paths of the map 
const transform = `translate(${-scale/8.3}, ${scale + 590})` // due to the scale, the map has to be transformed

export const Marks = ({
    townData,
    rowByTown,
    colors,
    townClick
}) => (
    <g>
       {townData.features.map(feature => {

           const d = rowByTown.get(feature.properties.code) // d is the town code of the map
           const percentage = d.Vaccination_coverage_completed // get the vaccination percentage which corresponds with the current town
           
           return <path 
           transform={transform}
           className='gemeente' 
           data_region={d.Region_name} 
           data_percentage={d.Vaccination_coverage_completed}
           key={d.Region_name} 
           onClick={townClick} // when click on the path, then show the progres bar
           fill={color(percentage, colors)} // fill color is based on the vaccination percentage
           d={path(feature)} 
           />
       })}
    </g>
)
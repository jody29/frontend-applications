import { geoMercator, geoPath } from "d3-geo";
import color from "../helpers/checkPercentage.js";
import '../components/marks.css'

const scale = 7500

const projection = geoMercator().scale(scale)
const path = geoPath(projection)

export const Marks = ({
    townData,
    rowByTown,
    colors
}) => (
    <g>
       {townData.features.map(feature => {

           const d = rowByTown.get(feature.properties.code)
           const percentage = d.Vaccination_coverage_completed
           
           return <path transform='translate(-900, 8185)' className='gemeente' key={d.Region_name} fill={color(percentage, colors)} d={path(feature)} />
       })}
    </g>
)
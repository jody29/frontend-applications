import { useContext } from "react/cjs/react.development"
import { AgeContext } from "./provider"
import color from "../helpers/checkPercentage.js";
import colors from "./map";
import './progres.css'

const Progres = () => { // Progress bar component
    const {selectedTown} = useContext(AgeContext) // selected town (when clicking on a town on the map)
    const {percentage} = useContext(AgeContext) // percentage that belongs to the selected town

    if (!selectedTown || !percentage) { // if there isn't any town/percentage data, then return nothing
        return ''
    }

    return (
        <>
        <div className='progres'>
        <h3>{selectedTown}</h3> 
        <p>{percentage}%</p>
        <svg>
            <g>
                <rect height='50px' width='300px' fill='dimgray'></rect>
                <rect height='50px' width={(percentage * 300) / 100} fill={color(percentage, colors)}></rect>
            </g>
        </svg>
        </div>
        </>
    )
}

export default Progres
import { useContext } from "react/cjs/react.development"
import { AgeContext } from "./provider"
import color from "../helpers/checkPercentage.js";
import colors from "./map";
import './progres.css'

const Progres = () => {
    const {selectedTown} = useContext(AgeContext)
    const {percentage} = useContext(AgeContext)

    if (!selectedTown || !percentage) {
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
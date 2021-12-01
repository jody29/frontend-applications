import colors from './map'
import './legend.css'

export const Legend = () => (
    <svg width='150px' height='280px' className='legendSVG'>
        {colors.map((color, index) => { // map over all the colors and render a rectangle with text for every color
            return (
                <g key={color.value} className='legend'> 
                    <rect fill={color.color} y={color.value + (index * 30) -16} width='20px' height='20px'></rect>
                    <text x='40px' y={color.value + (index * 30)}>onder {color.value}%</text>
                </g>
            )
        })}
    </svg>
)
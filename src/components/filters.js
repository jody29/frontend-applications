import { AgeContext } from "./provider"
import { useContext } from "react"

const Filters = () => {
    const {setAge} = useContext(AgeContext)

    const ageClick = (e) => {
        setAge(e.target.value)
    }

    return (
        <>
            <h3>Selecteer leeftijd</h3>
            <span className='filters'>
                <button value='12+' onClick={ageClick}>12+</button>
                <button value='12-17' onClick={ageClick}>12-17</button>
                <button value='18+' onClick={ageClick}>18+</button>
            </span>
        </>
    )
}

export default Filters
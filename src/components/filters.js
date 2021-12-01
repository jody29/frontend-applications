import { AgeContext } from "./provider"
import { useContext } from "react"

const Filters = () => {
    const {setAge} = useContext(AgeContext)

    const ageClick = (e) => {
        let buttons = document.querySelectorAll('button')
        let button = e.target

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('current')
        }

        setAge(e.target.value)
        button.classList.add('current')
        
    }

    return (
        <>
            <h3>Selecteer leeftijd</h3>
            <span className='filters'>
                <button value='12+' onClick={ageClick}>12+</button>
                <button value='12-17' onClick={ageClick}>12-17</button>
                <button value='18+' onClick={ageClick} className='current'>18+</button>
            </span>
        </>
    )
}

export default Filters
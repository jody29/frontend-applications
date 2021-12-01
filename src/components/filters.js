import { AgeContext } from "./provider"
import { useContext } from "react"

const Filters = () => {
    const {setAge} = useContext(AgeContext) // use the AgeContext provider

    const ageClick = (e) => {
        let buttons = document.querySelectorAll('button') // select all elements with button tag
        let button = e.target // select the button that has been clicked

        for (let i = 0; i < buttons.length; i++) { // looop through the nodelist of buttons
            buttons[i].classList.remove('current') // deleeted the class current of all the buttons
        }

        setAge(e.target.value) // set the age of the button as the selectedAge
        button.classList.add('current') // selected button now gets the class current
        
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
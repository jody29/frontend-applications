import './filter.css'

let selectedAge = '18+'

export function Filter() {
    return (
        <div>
            <h3>Selecteer leeftijd</h3>
                <span className='filters'>
                    <button value='12+' onClick={(e) => {
                        console.log(e.target.value)
                    }}>12+</button>
                    <button value='12-17' onClick={(e) => {
                        console.log(e.target.value)
                    }}>12-17</button>
                    <button value='18+' onClick={(e) => {
                        console.log(e.target.value)
                    }}>18+</button>
                </span>
        </div>
    )
}

export default selectedAge
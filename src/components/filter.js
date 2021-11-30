import './filter.css'

export function Filter() {
    return (
        <div>
            <h3>Selecteer leeftijd</h3>
                <span className='filters'>
                    <button value='12+'>12+</button>
                    <button value='12-17'>12-17</button>
                    <button value='18+'>18+</button>
                </span>
        </div>
    )
}
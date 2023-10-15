import './Card.css'
import symptoms from '../../Data/symptom.json'

const Card = (props) => {

    const arr = []
    localStorage.setItem('symptoms', JSON.stringify(arr))
    localStorage.setItem('names', JSON.stringify(arr))

    const ClickHandler = (e) => {
        const name = e.target.id
        const symp = symptoms[0][name]
        const ret_symps = JSON.parse(localStorage.getItem('symptoms'))
        const ret_names = JSON.parse(localStorage.getItem('names'))

        if (ret_symps.includes(symp) && ret_names.includes(name)) {
            const filtered1 = ret_symps.filter(x => x !== symp);
            const filtered2 = ret_names.filter(x => x !== name);
            localStorage.setItem('symptoms', JSON.stringify(filtered1))
            localStorage.setItem('names', JSON.stringify(filtered2))
            e.target.classList.remove('sel-symp')
        }
        else {
            // const ret_symps = JSON.parse(localStorage.getItem('symptoms'))
            ret_symps.push(symp)
            ret_names.push(name)
            localStorage.setItem('symptoms', JSON.stringify(ret_symps))
            localStorage.setItem('names', JSON.stringify(ret_names))
            e.target.classList.add('sel-symp')
        }
    }
    const list = props.diseases.map(dis => <li onClick={ClickHandler} id={dis['d']} className='symp'>{dis['d']}</li>)
    return (
        <div className='card-cont'>
            <h4 class='text-[16px] font-bold my-2.5'>{props.label}</h4>
            <div className='items'>
                <ul className='card-ul'>
                    {list}
                </ul>
            </div>
        </div>
    )
}

export default Card
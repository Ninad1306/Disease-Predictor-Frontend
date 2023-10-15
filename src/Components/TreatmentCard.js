import './TreatmentCard.css'
const TreatmentCard = (props) => {
    const url = `https://www.google.com/maps?q=${props.lat},${props.lon}`
    return(
        <div className="card1">
            <div>
                <h2 class='text-[24px] font-bold my-2.5'>{props.name}</h2>
                <p>{props.addr}</p>
            </div>
            <div className='loc'>
                <a href={url} target='_blank'><button className='loc-btn'>View in maps</button></a>
            </div>
        </div>
    )
}

export default TreatmentCard
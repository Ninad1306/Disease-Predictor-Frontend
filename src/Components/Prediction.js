import Navbar from "./UI/Navbar"
import Card from "./UI/Card"
import disease from '../Data/disease.json'
import './Prediction.css'
import { Link } from "react-router-dom"
import Modal from './UI/Modal'
import { useNavigate } from 'react-router-dom';
import React from 'react'



const Prediction = () => {
    const [isVisible, setIsVisible] = React.useState(false)
    const navigate = useNavigate();

    const cards = disease.map(dis => <Card
        label={dis['label']}
        diseases={dis['symptoms']}
    />
    )

    const clickHandler = () => {
        const retArr = JSON.parse(localStorage.getItem('symptoms'))
        if (retArr.length > 2) {
            navigate('/result')
        }
        else {
            setIsVisible(true)
        }
    }

    return (
        <div>
            {isVisible && <Modal onClose={() => {setIsVisible(false); window.location.reload(true);}}>
                <p>Error: Please select atleast three symptoms.</p>
                <Link onClick={() => {setIsVisible(false); window.location.reload(true);}} className="modal-cont">back</Link>
            </Modal>}
            <Navbar name={'Select Symptoms'} />
            <div className="cont">
                <div className="symp-list">
                    {cards}
                </div>
                <div className="btn">
                    {/* <Link to='/result'><button className="pred-btn">Predict</button></Link> */}
                    <button onClick={clickHandler} className="pred-btn">Predict</button>
                </div>
            </div>
        </div>
    )
}

export default Prediction
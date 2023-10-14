import './Result.css'
import { Link } from "react-router-dom"
import React from 'react';
import Navbar from "./UI/Navbar"
import Diagnosis from './Diagnosis';
import { useEffect, useState } from 'react';
import Axios from 'axios'
import description from '../Data/description.json'


const Result = (props) => {
  const [result, setResult] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [desc, setDesc] = useState('')

  const Res = async () => {
    const retArr = JSON.parse(localStorage.getItem('symptoms'))
    const res = await Axios.post('https://disease-predictor-ixm2.onrender.com/predict', {
      "symptoms": retArr
    })
    setResult(res.data['disease'])
    setDesc(description.filter(res => res['DiseaseName'] === result))
  }

  useEffect(() => {
    Res()
  }, [Res])

  const clickHandler = () => {
    setIsVisible(true)
  }

  const ret_names = JSON.parse(localStorage.getItem('names'))
  const symp_names = ret_names.map(s => <span className='symp-names'>{s}</span>)

  return (
    <>
      {!isVisible && <div>
        <Navbar name='Disease Prediction' />
        <div className='symptom-form'>
          {symp_names.length > 1 && <p>Selected symptoms are: </p>}
          {symp_names.length === 1 && <p>Selected symptom is: </p>}
          <p className='symp-cont'>{symp_names}</p>
          <p>The predicted disease is: <b>{result}</b></p>
          <div className='location'>
            <Link><button onClick={clickHandler} className='loc_btn pred-btn'>Details</button></Link>
            <Link to='/treatment'><button className='loc_btn pred-btn'>Find a doctor</button></Link>
          </div>
        </div>
      </div>}
      {isVisible && <Diagnosis disease={result} desc={desc[0]} />}
    </>

  )
}

export default Result
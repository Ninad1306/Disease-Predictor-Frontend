import { useState, useEffect } from 'react';
import Axios from 'axios'
import Navbar from "./UI/Navbar"
import TreatmentCard from './TreatmentCard';

const Treatment = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude
        const long = position.coords.longitude
        const rlo = 0.04
        const rla = 0.03
        const left = long - rlo
        const bottom = lat - rla
        const right = long + rlo
        const up = lat + rla

        const res = await Axios.get('https://nominatim.openstreetmap.org/search?format=json&q=hospital&bounded=1&viewbox=' + left + ',' + bottom + ',' + right + ',' + up)
        setData(res.data)
      })
    }
  }, [data])
  let list
  if (data.length > 0) {
    list = data.map(res => <TreatmentCard addr={res.display_name} name={res.name} lat={res.lat} lon={res.lon} />)
  }
  else {
    list = <p class='text-white'>Loading ...</p>
  }

  return (
    <>
      <Navbar name={'Hospitals and Clinics'} />
      <div className='hosp-cont'>{list}</div>
    </>
  )
}

export default Treatment
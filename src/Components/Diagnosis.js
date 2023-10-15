import Navbar from "./UI/Navbar"
import './Diagnosis.css'

const Diagnosis = (props) => {
    const treatment = []
    for (let x in props.desc['Treatment']) {
        treatment.push({ name: x, cont: props.desc['Treatment'][x] })
    }
    const precaution = []
    for (let x in props.desc['Precautions']) {
        precaution.push({ name: x, cont: props.desc['Precautions'][x] })
    }
    // console.log(treatment[0])
    const treatment_list = treatment.map(res => <li><p><b>{res['name']}</b>: {res['cont']}</p></li>)
    const precaution_list = precaution.map(res => <li><p><b>{res['name']}</b>: {res['cont']}</p></li>)
    return (
        <div>
            <Navbar name={props.disease} />
            <div className="desc-cont">
                <h2 class='text-[24px] font-bold my-2.5'>Disease Description: </h2>
                <p>{props.desc['DiseaseDescription']}</p>
                <h2 class='text-[24px] font-bold my-2.5'>Disease Treatment:</h2>
                <ul>{treatment_list}</ul>
                <h2 class='text-[24px] font-bold my-2.5'>Disease Precautions:</h2>
                <ul>{precaution_list}</ul>
            </div>
        </div>
    )
}

export default Diagnosis
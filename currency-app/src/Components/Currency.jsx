import React, { useState } from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";
import '../CSS/Currency.css'
import axios from 'axios';

const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
const apikey = "fca_live_OmEI52JX4ypBKWjvpm67QhEk4AX0L2BSa63jkexD";


const Currency = () => {

    const [fromNum, setFromNum] = useState(0);
    const [fromCurr, setFromCurr] = useState("USD");
    const [toCurr, setToCurr] = useState("TRY");
    const [toNum, setToNum] = useState(0);

    const getCurrencyData = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${apikey}&base_currency=${fromCurr}`);
        setToNum((fromNum * response.data.data[toCurr]).toFixed(2))
    }

    return (
        <div className="container">
            <h1>Currency Calculator</h1>
            <div className='input-area'>
                <input value={fromNum} onChange={(e) => setFromNum(e.target.value)} type="number" min={0} />
                <select value={fromCurr} onChange={(e) => setFromCurr(e.target.value)}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY">TRY</option>
                </select>
                <BsArrowRightCircleFill style={{margin: "-10px 20px",fontSize: "30px", color: "red"}} />
                <select value={toCurr} onChange={(e) => setToCurr(e.target.value)}>
                    <option value="TRY">TRY</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                </select>
                <input value={toNum} disabled = {!toNum} onChange={(e) => setToNum(e.target.value)} type="number" min={0} />
            </div>

            <button disabled = {!Number(fromNum)} onClick={getCurrencyData}>Convert</button>
            <p className='result'></p>
        </div>
    )
}

export default Currency
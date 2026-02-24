import React, { useState, useMemo } from 'react'

export function CurrencyConverter() {
    const [moneyValue, setMoneyValue] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");
    const goodMapping = {
        USD: 1,
        EUR: 0.92,
        GBP: 0.78,
        JPY: 156.7
    };
    
    
    const amountInUSD = useMemo(() => {
        return Number(moneyValue) / goodMapping[fromCurrency];
    }, [moneyValue, fromCurrency]);
    
    const convertedAmount = (amountInUSD * goodMapping[toCurrency]).toFixed(2)
    return (
        <div className='main-container w-1/3 mx-auto bg-[#1b1b32] rounded-xl px-6 py-10 flex flex-col text-center gap-4  '>
            <h1 className='text-white text-center text-3xl font-semibold'>Currency Converter</h1>
            <div className='conversion'>
                <label className='text-white block mb-2 font-semibold' htmlFor="conversion-inp">{fromCurrency} to {toCurrency} Conversion</label>
                <input value={moneyValue} onChange={(e) => setMoneyValue(e.target.value)} className='rounded-lg w-full p-1 pl-2' type="number" id='conversion-inp'/>
            </div>
            <div className='start-currency'>
                <label htmlFor="start-curr" className='text-white mb-2 block'>Start Currency:</label>
                <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} className='rounded-lg w-full p-1' name="start-curr" id="start-curr">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">JPY</option>
                </select>
            </div>
             <div className='target-currency'>
                <label htmlFor="target-curr" className='text-white block mb-2'>Target Currency:</label>
                <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} className='rounded-lg w-full p-1' name="target-curr" id="start-curr">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">JPY</option>
                </select>
            </div>
            <div className='calculate'>
                <span className='text-[#acd152] text-xl font-semibold'>
                    Converted Amount {convertedAmount} {toCurrency}
                </span>
            </div>
        </div>
    )
}

import React from 'react'
import "./Selection.css"

export default function Selection({CurrencyList, SelectedCurrency, onChangeCurrency, CurrencyValue, onChangeCurrencyValue}) {
    return (
        <div>
            <input className="CurrencyInput" type="number" value={CurrencyValue} onChange={onChangeCurrencyValue} />
            <select className="selectList" value={SelectedCurrency} onChange={onChangeCurrency}>
            {
                CurrencyList.map(option =>(
                    <option key={option} value={option}>{option}</option>
                ))
            }
            </select>
        </div>
    )
}

import "../css/Currency.css"
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_OafGvsOXdaGVrnC8EV122vV8RCzWn8XNhOk05ZxU";

const Currency = () => {

    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("TRY");
    const [result, setResult] = useState(0);

    const exchange = async() => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);
    }

    return (
        <div className="currency-div">
            <div style={{color: "white", fontFamily: "arial", backgroundColor: "black", padding: "0", textAlign: "center", width: "100%", marginBottom: "20px"}}>
                <h2>Currency Converter</h2>
            </div>
            <div style={{marginTop: "20px"}}>
                <input type="number" min={0} className="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <select className="from-currency-option" onChange={(e) => setFromCurrency(e.target.value)}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY">TRY</option>
                </select>
                
                <FaArrowRight style={{fontSize: "30px", color: "black", marginTop: "5px"}}/>

                <select className="to-currency-option" onChange={(e) => setToCurrency(e.target.value)}>
                    <option value="TRY">TRY</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
                <input type="number" min={0} className="result" value={result} onChange={(e) => setResult(e.target.value)}/>
            </div>

            <div>
                <button onClick={exchange} className="exchange-button">Convert</button>
            </div>
        </div>
    )
}

export default Currency

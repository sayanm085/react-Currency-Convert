import {InputBox}from './componant'
import './App.css'
import UseCurrencyinfo from './Hooks/UseCurrencyinfo'
import { useState } from 'react';

function App() {
 let[amount,setamount]=useState(1)
 let[FromCurrency,setFromCurrency]=useState("usd")
 let[ToCurrency,setToCurrency]=useState("inr")
 let[Convertamount,setConvertCurrency]=useState(0)

 let Currencyoption=UseCurrencyinfo(FromCurrency)
 let option=Object.keys(Currencyoption)
  
let swip=()=>{
    
    setFromCurrency(ToCurrency)
    setToCurrency(FromCurrency)


}


 let Amountconvert=()=>{
     setConvertCurrency(amount*Currencyoption[ToCurrency])
 }
 

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-slate-900"
        
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       Amountconvert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            onamountChange={(amount) => setamount(amount)}
                            Currencyoption={option}
                            onCurrencyChange={(Currency) => setFromCurrency(Currency)}
                            SelectCurrency={FromCurrency}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swip}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={Convertamount}
                            Currencyoption={option}
                            onCurrencyChange={(Currency) => setToCurrency(Currency)}
                            SelectCurrency={ToCurrency}
                            amountdisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert 
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App

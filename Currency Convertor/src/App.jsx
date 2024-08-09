import { useState } from 'react';
import useCurr from './hooks/useCurr'
import Input from './component/Input';
export default function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convAmt, setConvAmt] = useState(0)
  const currinfo = useCurr(from)
  const options = Object.keys(currinfo)
  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvAmt(amount)
    setAmount(convAmt)
  }
  const convert = ()=>{
    setConvAmt(amount * currinfo[to]  )
  }
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7Eo6NPNUY31b8if7ReQ1GPzaAXZPmmFADQ&s')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault(); 
                        convert();                     
                    }}
                >
                    <div className="w-full mb-1">
                        <Input
                            label="From"
                            amount={amount}
                            onOptionChange={options}
                            onCurrencyChange={(currency)=>setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount)=>setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <Input
                            label="To"
                             amount={convAmt}
                            onOptionChange={options}
                            onCurrencyChange={(currency)=>setTo(currency)}
                            selectCurrency={to}
                            onAmountChange={(amount)=>setAmount(amount)}
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                    onClick={convert}>
                        Convert {from}To{to}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}
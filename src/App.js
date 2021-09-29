import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Selection from './Components/Selection';
import Displayfullname from './Components/Displayfullname';

function App() {
  const [CurrencyList, setCurrencyList] = useState([]);
  const [CurrencyList2, setCurrency2List] = useState([]);
  const [Currency1, setCurrency1] = useState("USD");
  const [Currency2, setCurrency2] = useState("AED"); 
  const [CurrencyValue, setCurrencyValue] = useState(1);
  const [ExchangeRate, setExchangeRate] = useState();
  const [WhichBox, setWhichBox] = useState(true);
  const [getIndex, setIndex] = useState(1);

  
  let Curr1, Curr2
  if(WhichBox){
    Curr2 = CurrencyValue
    Curr1 = CurrencyValue * ExchangeRate
  }
  else{
    Curr1 = CurrencyValue
    Curr2 = CurrencyValue / ExchangeRate
  }

  useEffect(()=>{
     axios.get(`https://open.er-api.com/v6/latest/${Currency1}`)
    .then(res => {
      let FirstCurrency = Object.keys(res.data.rates)[1]
      setCurrencyList([...Object.keys(res.data.rates)])
      setCurrency1(res.data.base_code)
      setCurrency2(FirstCurrency)
      setExchangeRate(res.data.rates[FirstCurrency])
    })
  }, // eslint-disable-next-line
  [])


  useEffect(()=>{
     axios.get(`https://open.er-api.com/v6/latest/${Currency1}`)
    .then(res => {
      setCurrencyList([...Object.keys(res.data.rates)])
    })
  }, [Currency1])

  useEffect(()=>{
     axios.get(`https://open.er-api.com/v6/latest/${Currency2}`)
    .then(res => {
      setCurrency2List([...Object.keys(res.data.rates)])
    })
  }, [Currency2])

    useEffect(()=>{
    axios.get(`https://open.er-api.com/v6/latest/${Currency1}`)
    .then(res => {
      getCurrencyIndex()
      let Currency = Object.keys(res.data.rates)[getIndex]
      setExchangeRate(res.data.rates[Currency])
    })
  }, // eslint-disable-next-line 
  [Currency1, Currency2, getIndex])

  

   const getCurrencyIndex = () =>{
      let index = 0;
      for(let x=0; x<CurrencyList.length;x++){
        if(Currency2 === CurrencyList[x]){
          index = x;
          setIndex(index)
          x=CurrencyList.length;
        }
      }
   }


  const CurrencyChange1 = (e) =>{
    setCurrencyValue(e.target.value)
    setWhichBox(true)
  }

    const CurrencyChange2 = (e) =>{
    setCurrencyValue(e.target.value)
    setWhichBox(false)
  }
 
  return (
    <div className="App">
    <h1 className="title">Currency Rates </h1>
    
   <div className="Display1">
    <Displayfullname 
    Currency={Currency1} 
    CurrencyValue={CurrencyValue}
    /> 
    equals
    </div>
    
   <div className="Display2">
    <Displayfullname 
    Currency={Currency2}
    CurrencyValue={ExchangeRate}
    />
    </div>

    <Selection 
    CurrencyList={CurrencyList} 
    SelectedCurrency={Currency1} 
    onChangeCurrency={e => setCurrency1(e.target.value)}
    onChangeCurrencyValue={CurrencyChange1}
    CurrencyValue={Curr2}
    />
     
     <Selection 
     CurrencyList={CurrencyList2} 
     SelectedCurrency={Currency2} 
     onChangeCurrency={(e) => {setCurrency2(e.target.value)}}
     onChangeCurrencyValue={CurrencyChange2}
     CurrencyValue={Curr1}
     getIndex={getIndex}
     />
    </div>
  );
}

export default App;


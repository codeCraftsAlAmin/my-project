import React from 'react';
import { useState } from 'react';

const App = () => {

  const [isBillAmount, setIsBillAmount] = useState('');
  const [isParcentage, setIsParcentage] = useState(0);
  const [isDiscountAmount, setIsDiscountAmount] = useState('');
  const [isFinalPay, setIsFinalPay] = useState('');
  const [isError,setIsError] = useState('');

  const handleCalculate =(e)=> {
    e.preventDefault();

    if(isNaN(isBillAmount)){
      setIsError('* Please enter a valid number for the bill amount *')
    }else{
      setIsError('');
    };

    const mainDiscount = isBillAmount * (isParcentage /100);
    parseFloat(setIsDiscountAmount(mainDiscount.toFixed(2)));
    parseFloat(setIsFinalPay(isBillAmount - mainDiscount).toFixed(2));
  };

  const handleReset=()=> {
    console.log("first")
    setIsBillAmount('');
    setIsParcentage(0);
    setIsDiscountAmount('');
    setIsFinalPay('');
    setIsError('');
  };

  return (
    <div className='container'>

    <h1>Discount Calculator</h1>
      <form className='form'>

        <div className="formDiv">
          <label htmlFor="enterBillAmount">Enter bill amount: </label>

          <input type="text" 
          name='enterBillAmount' 
          id='enterBillAmount'
          value={isBillAmount}
          onChange={(e)=> setIsBillAmount(e.target.value)}
          autoFocus/>
        </div>

        <div className='errorMessage'>{isError}</div>

        <div className="formDiv">
          <label htmlFor="selectDiscount">Select Discount %: </label>

          <select name="selectDiscount" 
          id="selectDiscount"
          value={isParcentage}
          onChange={(e)=> setIsParcentage(e.target.value)}>

            <option value="0">0</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
            <option value="45">45</option>
            <option value="50">50</option>
            <option value="55">55</option>
            <option value="60">60</option>
            <option value="65">65</option>
            <option value="70">70</option>
            <option value="75">75</option>
            <option value="80">80</option>
            <option value="85">85</option>
            <option value="90">90</option>
            <option value="95">95</option>

          </select>
        </div>

        <div className="formDiv">
          <label htmlFor="discountAmount">Discount amount: </label>

          <input type="text" 
          name='discountAmount' 
          id='discountAmount'
          value={isDiscountAmount}
          onChange={(e)=> {setIsDiscountAmount(e.target.value)}}
          readOnly
          />
        </div>

        <div className="formDiv">
          <label htmlFor="finalPay">Final pay: </label>

          <input type="text" 
          name='finalPay' 
          id='finalPay'
          value={isFinalPay}
          onChange={(e)=> setIsFinalPay(e.target.value)}
          readOnly/>
        </div>
      </form>

      <div className="btn">
        <button type='submit' onClick={handleCalculate}>Calculate</button>
        <button type='reset' onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
};

export default App;


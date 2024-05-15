import { Feedback } from "./Feedback/Feedback";
import { Statistics } from "./Statistics";
import React, { useState } from 'react';
import './App.css'


export const App = () => {

  const [ good, setGood ]= useState(0)
  const [ neutral, setNeutral ]= useState(0)
  const [bad, setBad] = useState(0)
  const [value, setValue] = useState(0)
  const [result] = useState(0)
  

    const onClickGood = () => {
      setGood(prevValue => prevValue + 1)
    }  
    
    const onClicNeutral = () => {
        setNeutral(prevValue =>prevValue+1)
    } 
    
    const onClicBad = () => {
        setBad(prevValue =>prevValue+1)
    }  
    
    const countTotalFeedback=() => {
      setValue(prevValue => prevValue + 1)
  }
  
  
  return (
    <>
    <Feedback  good={good} value={value} result={result} onClickGood={onClickGood} onClicNeutral={onClicNeutral} onClicBad={onClicBad} totalClick={countTotalFeedback} />
    <Statistics good={good} neutral={neutral} bad={bad} value={value} result={result} />
    </>
  );
};
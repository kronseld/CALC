'use client';
import styles from "./Calc.module.css";
import { useState, useEffect } from "react";
export  function Calc(props) {
    let [input1, setInput1] = useState();
    let [input2, setInput2] = useState();
    let [input3, setInput3] = useState();
    let [input4, setInput4] = useState();
    let [result, setResult] = useState();
    function handleInput1 (e) {
      return setInput1(e.target.value);
    }
    function handleInput2 (e) {
      return setInput2(e.target.value);
    }
    function handleInput3 (e) {
      return setInput3(e.target.value);
    }
    function handleInput4 (e) {
      return setInput4(e.target.value);
    }
    function handleSubmit (e) {
      /*result2_name: "Общая ставка",
      result2_formula: "Math.pow(1+const1/12/100, var3*12)",
      result3_name: "Ежемесячный платеж",
      result3_formula: "(var1-var2)*(const1/12/100)*Math.pow(1+const1/12/100, var3*12)/(Math.pow(1+const1/12/100, var3*12)-1)",
      result4_name: "Необходимый доход",
      result4_formula: "((var1-var2)*(const1/12/100)*Math.pow(1+const1/12/100, var3*12)/(Math.pow(1+const1/12/100, var3*12)-1))*2.5"*/
      e.preventDefault();
      let result1 = Math.pow(1 + input4 / 12 / 100, input3 * 12); //Считаем общую ставку
      let result2 = (input1 - input2)*(input4 / 12 / 100) * result1/(result1 - 1);//Считаем ежемесечный платеж
      let result3 = result2 * 2.5;//Считаем необходимый доход
      return setResult(<div className={styles.result}><p>{props.result2_name} : {result1.toFixed(2)}</p><p>{props.result3_name} : {result2.toFixed(2)}</p><p>{props.result4_name} : {result3.toFixed(2)}</p></div>);
    }
    return (
      <div className={styles.container}>
        <form action="" className={styles.form}  onSubmit={handleSubmit}>
          <h1>{props.description}</h1>
          <div className={styles.formString}>{props.var1}<input type="number" onInput={handleInput1}/></div>
          <div className={styles.formString}>{props.var2}<input type="number" onInput={handleInput2} /></div>
          <div className={styles.formString}>{props.result1_name}: {input1 & input2 ? input1 - input2 : input1 }</div>
          <div className={styles.formString}>{props.var3} <input type="number"  onInput={handleInput3} /></div>
          <div className={styles.formString}>{props.var4} <input type="number"  onInput={handleInput4} step={0.1}/></div>
          <div className={styles.formString}><button className={styles.button} type="submit">РАССЧИТАТЬ</button></div>        
        </form>
        {result}
      </div>
    );
  };
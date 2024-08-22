'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./component/Header";
import { Calc } from "./component/Calc";
import { Footer } from "./component/Footer";
import { useState, useEffect } from "react";
export default function Home() {
  const [page, setPage] = useState('Calc');
  useEffect(()=>{
    const api = 'http://localhost:9001/calcs';
    fetch (api, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(result => result.json()).then ((result) => {
      console.log(result)
      setCalcs(result.data);
    })
  }, [])
  const [calcs, setCalcs] = useState([]);
 
  let pages = {
    Calc: <Calc />
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        { calcs.map((item) => <Calc 
          key={item.id}
          description={item.description}
          var1={item.var1}
          var2={item.var2}
          var3={item.var3}
          var4={item.var4}
          result1_name={item.result1_name}
          result1_formula={item.result1_formula}
          result2_name={item.result2_name}
          result2_formula={item.result2_formula}
          result3_name={item.result3_name}
          result3_formula={item.result3_formula}
          result4_name={item.result4_name}
          result4_formula={item.result4_formula}
          />)
        }
      </main>
      <Footer />
    </>
  );
}

import Image from "next/image";
import styles from "./Header.module.css";
export  function Header() {
    return (
      <header  className={styles.header}>
        <div className={styles.logoContainer}>
        <Image 
            src="/logo.svg"
            width={100}
            height={100}
            alt="Логотип"     
        />
        <h1 className={styles.h1}>#cc</h1>
        </div>
        <ul className={styles.naviMenu}>
            <li className={styles.anchor}>Калькулятор ипотеки</li>
            <li className={styles.anchor}>Калькулятор автокредита</li>
            <li className={styles.anchor}>Калькулятор потребкредита</li>
            {/*Сюда надо как-то засунуть список калькуляторов*/}
        </ul>
      </header>
    );
  };
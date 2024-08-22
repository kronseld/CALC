import styles from "./Footer.module.css";
export  function Footer() {
    return (
      <footer className={styles.footer}>
        <h3 className={styles.h3}>#калькулятор_кредитов</h3>
        <p>
            2020 – 2024 © credit-calc.io
            <br />
            При использовании материалов сайта необходима ссылка на источник.
        </p>
        <h5 className={styles.h5}><a href="https://vk.com">Написать нам</a></h5>
      </footer>
    );
  };
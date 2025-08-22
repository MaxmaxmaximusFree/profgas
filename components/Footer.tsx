import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.aboutColumn}>
          <div className={styles.logo}>
            <Image src="/logo.jpg" alt="Логотип Профгаз" width={120} height={30} />
          </div>
          <p>
            Надежный поставщик технических газов, криогенной продукции и
            сварочного оборудования с 2005 года.
          </p>
        </div>
        <div className={styles.linksColumn}>
          <h4>Навигация</h4>
          <ul>
            <li><Link href="/products">Продукция</Link></li>
            <li><Link href="/equipment">Оборудование</Link></li>
            <li><Link href="/services">Услуги</Link></li>
            <li><Link href="/solutions">Решения</Link></li>
            <li><Link href="/about">О компании</Link></li>
          </ul>
        </div>
        <div className={styles.linksColumn}>
          <h4>Информация</h4>
          <ul>
            <li><Link href="/delivery">Доставка и оплата</Link></li>
            <li><Link href="/news">Новости</Link></li>
            <li><Link href="/articles">Статьи</Link></li>
            <li><Link href="/contacts">Контакты</Link></li>
          </ul>
        </div>
        <div className={styles.contactColumn}>
          <h4>Свяжитесь с нами</h4>
          <p>г. Москва, пл. академика Курчатова, д. 1</p>
          <a href="tel:+79851005312">+7 (985) 100-53-12</a>
          <a href="mailto:info@profgas.ru">info@profgas.ru</a>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} ООО "Профгаз". Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;

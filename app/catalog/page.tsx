import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './catalog.module.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Эти данные должны быть вынесены в отдельный файл или API
const catalogData = {
  'gas-cylinders': {
    title: 'Газовые баллоны',
    icon: '/file.svg',
    subcategories: [
      { name: 'Пропановые', href: '/products/propane-cylinders' },
      { name: 'Кислородные', href: '/products/oxygen-cylinders' },
      { name: 'Аргоновые', href: '/products/argon-cylinders' },
      { name: 'Азотные', href: '/products/nitrogen-cylinders' },
      { name: 'Углекислотные', href: '/products/co2-cylinders' },
      { name: 'Гелиевые', href: '/products/helium-cylinders' },
    ],
  },
  'technical-gases': {
    title: 'Технические газы',
    icon: '/globe.svg',
    subcategories: [
        { name: "Пропан", href: "/products/propane" },
        { name: "Кислород", href: "/products/oxygen" },
        { name: "Аргон", href: "/products/argon" },
        { name: "Азот", href: "/products/nitrogen" },
        { name: "Углекислота", href: "/products/co2" },
        { name: "Сварочные смеси", href: "/products/welding-mixes" },
    ],
  },
    'welding': {
    title: 'Всё для сварки',
    icon: '/window.svg',
    subcategories: [
        { name: "Сварочные аппараты", href: "/products/welding-machines" },
        { name: "Горелки и резаки", href: "/products/burners-cutters" },
        { name: "Редукторы", href: "/products/reducers" },
        { name: "Сварочная проволока", href: "/products/welding-wire" },
        { name: "Электроды", href: "/products/electrodes" },
        { name: "Маски и СИЗ", href: "/products/ppe" },
    ],
  },
  'cryogenics': {
    title: 'Криогенная продукция',
    icon: '/next.svg',
    subcategories: [
        { name: "Жидкий азот", href: "/products/liquid-nitrogen" },
        { name: "Жидкий кислород", href: "/products/liquid-oxygen" },
        { name: "Криоцилиндры", href: "/products/cryocylinders" },
        { name: "Сосуды Дьюара", href: "/products/dewar-vessels" },
        { name: "Газификаторы", href: "/products/gasifiers" },
    ],
  },
};

const CatalogPage = () => {
  return (
    <>
      <Header />
      <main className={styles.catalogPage}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Каталог продукции</h1>
          <div className={styles.grid}>
            {Object.values(catalogData).map((category, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardHeader}>
                  <Image
                    src={category.icon}
                    alt={`${category.title} icon`}
                    width={40}
                    height={40}
                  />
                  <h2 className={styles.cardTitle}>{category.title}</h2>
                </div>
                <ul className={styles.subcategoryList}>
                  {category.subcategories.map((sub, i) => (
                    <li key={i}>
                      <Link href={sub.href}>{sub.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CatalogPage;

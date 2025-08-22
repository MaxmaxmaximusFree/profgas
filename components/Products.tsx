import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Products.module.scss";

const productCategories = [
  {
    title: "Газовые баллоны",
    icon: "/file.svg", // Placeholder
    href: "/products/gas-cylinders",
    subcategories: [
      { name: "Пропановые", href: "/products/propane-cylinders" },
      { name: "Кислородные", href: "/products/oxygen-cylinders" },
      { name: "Аргоновые", href: "/products/argon-cylinders" },
      { name: "Азотные", href: "/products/nitrogen-cylinders" },
      { name: "Углекислотные", href: "/products/co2-cylinders" },
      { name: "Гелиевые", href: "/products/helium-cylinders" },
    ],
  },
  {
    title: "Технические газы",
    icon: "/globe.svg", // Placeholder
    href: "/products/technical-gases",
    subcategories: [
      { name: "Пропан", href: "/products/propane" },
      { name: "Кислород", href: "/products/oxygen" },
      { name: "Аргон", href: "/products/argon" },
      { name: "Азот", href: "/products/nitrogen" },
      { name: "Углекислота", href: "/products/co2" },
      { name: "Сварочные смеси", href: "/products/welding-mixes" },
    ],
  },
  {
    title: "Всё для сварки",
    icon: "/window.svg", // Placeholder
    href: "/products/welding",
    subcategories: [
      { name: "Сварочные аппараты", href: "/products/welding-machines" },
      { name: "Горелки и резаки", href: "/products/burners-cutters" },
      { name: "Редукторы", href: "/products/reducers" },
      { name: "Сварочная проволока", href: "/products/welding-wire" },
      { name: "Электроды", href: "/products/electrodes" },
      { name: "Маски и СИЗ", href: "/products/ppe" },
    ],
  },
  {
    title: "Криогенная продукция",
    icon: "/icons/next.svg", // Placeholder
    href: "/products/cryogenics",
    subcategories: [
      { name: "Жидкий азот", href: "/products/liquid-nitrogen" },
      { name: "Жидкий кислород", href: "/products/liquid-oxygen" },
      { name: "Криоцилиндры", href: "/products/cryocylinders" },
      { name: "Сосуды Дьюара", href: "/products/dewar-vessels" },
      { name: "Газификаторы", href: "/products/gasifiers" },
    ],
  },
];

const Products = () => {
  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Каталог продукции</h2>
        <div className={styles.grid}>
          {productCategories.map((category, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <Image
                  src={category.icon}
                  alt={`${category.title} icon`}
                  width={40}
                  height={40}
                />
                <h3 className={styles.cardTitle}>{category.title}</h3>
              </div>
              <ul className={styles.subcategoryList}>
                {category.subcategories.map((sub, i) => (
                  <li key={i}>
                    <Link href={sub.href}>{sub.name}</Link>
                  </li>
                ))}
              </ul>
              <Link href={category.href} className={styles.seeAllLink}>
                Смотреть все
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

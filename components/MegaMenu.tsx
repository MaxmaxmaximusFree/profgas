import React from "react";
import Link from "next/link";
import styles from "./MegaMenu.module.scss";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuData = {
  categories: [
    { name: "Газы и смеси", href: "/products/gases" },
    { name: "Оборудование", href: "/equipment" },
    { name: "Услуги", href: "/services" },
  ],
  featured: [
    {
      name: "Аренда баллонов",
      href: "/services/rent",
      image: "/path/to/image1.jpg",
    },
    { name: "Доставка 24/7", href: "/delivery", image: "/path/to/image2.jpg" },
  ],
  mainLinks: [
    { name: "Решения для отраслей", href: "/solutions" },
    { name: "О компании", href: "/about" },
    { name: "Контакты", href: "/contacts" },
  ],
};

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.megaMenuOverlay} onClick={onClose}>
      <div className={styles.megaMenu} onClick={(e) => e.stopPropagation()}>
        <div className={styles.menuGrid}>
          <div className={styles.categoriesColumn}>
            <h3 className={styles.columnTitle}>Каталог</h3>
            <ul>
              {menuData.categories.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.featuredColumn}>
            <h3 className={styles.columnTitle}>Популярное</h3>
            <div className={styles.featuredItems}>
              {menuData.featured.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className={styles.featuredItem}
                >
                  {/* <Image src={item.image} layout="fill" objectFit="cover" /> */}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.mainLinksColumn}>
            <h3 className={styles.columnTitle}>Компания</h3>
            <ul>
              {menuData.mainLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;

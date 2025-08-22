import React from "react";
import styles from "./Equipment.module.scss";
import Button from "@/widgets/Button";
import SectionTitle from "@/widgets/SectionTitle";
import Card from "@/widgets/Card";
import AnimateOnScroll from "./AnimateOnScroll";

const equipmentItems = [
  {
    image:
      "https://images.unsplash.com/photo-1617113937231-a89365693469?q=80&w=1974&auto=format&fit=crop", // Placeholder
    title: "Криогенное оборудование",
    description:
      "Криоцилиндры, газификаторы, сосуды Дьюара и испарители для работы с жидкими газами. Надежность и эффективность для ваших производственных процессов.",
    href: "/equipment/cryogenics",
  },
  {
    image:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop", // Placeholder
    title: "Оборудование для сварки",
    description:
      "Профессиональные сварочные инверторы, полуавтоматы, резаки, горелки и все необходимые расходные материалы для качественной работы.",
    href: "/equipment/welding",
  },
];

const Equipment = () => {
  return (
    <section className={styles.equipment}>
      <div className={styles.container}>
        <SectionTitle>Надежное оборудование для ваших задач</SectionTitle>
        <div className={styles.itemsWrapper}>
          {equipmentItems.map((item, index) => (
            <AnimateOnScroll key={index}>
              <Card href={item.href} image={item.image} title={item.title}>
                <div className={styles.textWrapper}>
                  <p className={styles.itemDescription}>{item.description}</p>
                  <a href={item.href} className={styles.learnMoreLink}>
                    Узнать больше
                  </a>
                </div>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
        <div className={styles.ctaWrapper}>
          <Button href="/equipment" variant="primary">
            Весь каталог оборудования
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Equipment;

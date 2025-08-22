import React from "react";
import styles from "./Advantages.module.scss";
import FeatureCard from "./FeatureCard";
import AnimateOnScroll from "./AnimateOnScroll";
import { SpotlightContainer } from "@/widgets/SpotlightContainer";
import { SpotlightTarget } from "@/widgets/SpotlightTarget";

const advantages = [
  {
    icon: "/icons/file.svg",
    title: "Всегда в наличии",
    description: "На складах ежедневно более 300 тонн технических газов.",
  },
  {
    icon: "/icons/globe.svg",
    title: "Срочная доставка",
    description: "Доставим ваш заказ в любую точку от 2-х часов.",
  },
  {
    icon: "/icons/window.svg",
    title: "Работаем без выходных",
    description: "Принимаем и обрабатываем заказы каждый день.",
  },
  {
    icon: "/icons/next.svg",
    title: "Гарантия качества",
    description: "Вся продукция соответствует стандартам ГОСТ и ТУ.",
  },
];

const Advantages = () => {
  return (
    <section className={styles.advantages}>
      <SpotlightContainer className={styles.container}>
        <div className={styles.grid}>
          {advantages.map((advantage, index) => (
            <SpotlightTarget key={index}>
              <AnimateOnScroll>
                <FeatureCard
                  icon={advantage.icon}
                  title={advantage.title}
                  description={advantage.description}
                />
              </AnimateOnScroll>
            </SpotlightTarget>
          ))}
        </div>
      </SpotlightContainer>
    </section>
  );
};

export default Advantages;

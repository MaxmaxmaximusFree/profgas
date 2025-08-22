import React from "react";
import styles from "./Services.module.scss";
import SectionTitle from "@/widgets/SectionTitle";
import Grid from "@/widgets/Grid";
import Card from "@/widgets/Card";

const serviceItems = [
  {
    href: "/services/refilling",
    icon: "/file.svg", // Placeholder
    title: "Заправка баллонов",
    description:
      "Профессиональная заправка любых технических газов с контролем качества.",
  },
  {
    href: "/services/rental",
    icon: "/globe.svg", // Placeholder
    title: "Аренда баллонов и моноблоков",
    description:
      "Выгодные условия аренды газовых баллонов, моноблоков и криоцилиндров.",
  },
  {
    href: "/services/delivery",
    icon: "/window.svg", // Placeholder
    title: "Доставка по городу и области",
    description:
      "Оперативная и безопасная доставка газов спецтранспортом до вашего объекта.",
  },
  {
    href: "/services/maintenance",
    icon: "/icons/next.svg", // Placeholder
    title: "Ремонт и освидетельствование",
    description:
      "Полный комплекс услуг по аттестации и ремонту газовых баллонов.",
  },
];

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <SectionTitle>Комплексное обслуживание и сервис</SectionTitle>
        <Grid>
          {serviceItems.map((service, index) => (
            <Card
              key={index}
              href={service.href}
              title={service.title}
              description={service.description}
            />
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import styles from "./Solutions.module.scss";
import SectionTitle from "@/widgets/SectionTitle";
import Grid from "@/widgets/Grid";
import Card from "@/widgets/Card";
import AnimateOnScroll from "./AnimateOnScroll";

const industrySolutions = [
  {
    image:
      "https://images.unsplash.com/photo-1558694235-c841c3a4ead5?q=80&w=2070&auto=format&fit=crop", // Placeholder
    title: "Строительство",
    description:
      "Газы для сварки, резки и прогрева бетона. Надежное газоснабжение для строительных площадок.",
    href: "/solutions/construction",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603015268927-50513b44573b?q=80&w=2070&auto=format&fit=crop", // Placeholder
    title: "Металлообработка",
    description:
      "Высокочистые газы и смеси для лазерной резки, сварки и других технологических процессов.",
    href: "/solutions/metalworking",
  },
  {
    image:
      "https://images.unsplash.com/photo-1628039885499-4f0378531b0b?q=80&w=2070&auto=format&fit=crop", // Placeholder
    title: "Пищевая промышленность",
    description:
      "Пищевые газовые смеси для упаковки, заморозки и газирования напитков. Безопасность и качество.",
    href: "/solutions/food-industry",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba9996a?q=80&w=2070&auto=format&fit=crop", // Placeholder
    title: "Медицина и лаборатории",
    description:
      "Медицинский кислород, специальные газы и газовые смеси для аналитического оборудования.",
    href: "/solutions/medicine",
  },
];

const Solutions = () => {
  return (
    <section className={styles.solutions}>
      <div className={styles.container}>
        <SectionTitle>Решения для отраслей</SectionTitle>
        <Grid>
          {industrySolutions.map((solution, index) => (
            <AnimateOnScroll key={index}>
              <Card
                href={solution.href}
                image={solution.image}
                title={solution.title}
                description={solution.description}
                showArrow={true}
              />
            </AnimateOnScroll>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Solutions;

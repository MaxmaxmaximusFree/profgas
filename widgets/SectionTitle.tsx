import React from "react";
import styles from "./SectionTitle.module.scss";
import AnimateOnScroll from "@/components/AnimateOnScroll";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className,
  as = "h2",
}) => {
  const Tag = as;
  return (
    <AnimateOnScroll>
      <Tag className={`${styles.sectionTitle} ${className || ""}`}>
        {children}
        <span className={styles.decorator}></span>
      </Tag>
    </AnimateOnScroll>
  );
};

export default SectionTitle;

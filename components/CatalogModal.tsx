import React from "react";
import Link from "next/link";
import styles from "./CatalogModal.module.scss";

const CatalogModal = () => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <Link href="/" className={styles.closeButton}>
          &times;
        </Link>
        <h2>Каталог продукции</h2>
        <p>Здесь будет подробный каталог...</p>
      </div>
    </div>
  );
};

export default CatalogModal;

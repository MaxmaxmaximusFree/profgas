"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import styles from "./Header.module.scss";
import Button from "@/widgets/Button";
import { useIsScrolledMoreThan } from "@/hooks/use-is-scrolled-more-than";
import MegaMenu from "./MegaMenu";
import Glass from "@/widgets/Glass";

const Header = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const isScrolled = useIsScrolledMoreThan(50);
  console.log("🔥 [Header] isScrolled:", isScrolled);

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  return (
    <header
      className={clsx(styles.header, { [styles.__scrolled]: isScrolled })}
    >
      <Glass
        backgroundOpacity={isScrolled ? 0.2 : 0}
        blurRadius={isScrolled ? "1rem" : "0rem"}
        maskOpacityStart={isScrolled ? 1 : 0}
        maskOpacityEnd={isScrolled ? 1 : 0}
        glareDuration="15s"
      />
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logoWrapper}>
            <Image
              src="/logo.jpg"
              alt="Профгаз"
              width={140}
              height={35}
              className={clsx(styles.logo, styles.logoRegular)}
            />
            <Image
              src="https://i.ibb.co/9hbd6fg/2-766-Z.png"
              alt="Профгаз Sticky"
              width={40}
              height={40}
              className={clsx(styles.logo, styles.logoSticky)}
            />
          </Link>
        </div>

        <div className={styles.actions}>
          <div className={styles.contactInfoContainer}>
            <a href="tel:+79851005312" className={styles.phoneNumber}>
              <span className={styles.hereIndicator}>Мы тут →</span>
              +7 (985) 100-53-12
            </a>
            <span className={styles.address}>
              г. Москва, пл. академика Курчатова, д. 1
            </span>
          </div>

          <Button
            onClick={toggleMegaMenu}
            variant={!isScrolled ? "glass" : "primary"}
          >
            {isMegaMenuOpen ? "Закрыть" : "Каталог"}
          </Button>
        </div>
      </div>
      <MegaMenu
        isOpen={isMegaMenuOpen}
        onClose={() => setIsMegaMenuOpen(false)}
      />
    </header>
  );
};

export default Header;

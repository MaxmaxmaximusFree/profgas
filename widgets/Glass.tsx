"use client";

// =================================================================================================
// Компонент Glass (Стекло)
// =================================================================================================
// Создает эффект "матового стекла" (glassmorphism) для использования в качестве фона.
//
// Как работает:
// 1. Фон: Создает полупрозрачный белый фон. Его цвет и прозрачность можно настроить.
// 2. Размытие: Использует `backdrop-filter: blur()` для размытия всего, что находится ПОД ним.
// 3. Блик: Добавляет анимированный блик, который движется по поверхности для декоративного эффекта.
// 4. Маска: Применяет градиентную маску, которая позволяет плавно "проявлять" или "скрывать"
//    эффект по вертикали. Это полезно для анимации появления.
//
// Важно: Компонент позиционируется абсолютно и занимает все пространство родителя.
// Он не перехватывает клики мыши (`pointer-events: none`).
// =================================================================================================

import React from "react";
import clsx from "clsx";
import styles from "./Glass.module.scss";

interface GlassProps {
  // ===============================================================================================
  // Настройки Компонента
  // ===============================================================================================

  // Дополнительный CSS-класс для кастомизации.
  className?: string;

  // --- Фон и Размытие ---
  // Прозрачность белого фона под размытием. 0 - полностью прозрачный, 1 - полностью белый.
  backgroundOpacity?: number;
  // Радиус размытия для `backdrop-filter`. Любое валидное CSS-значение, например '1rem' или '10px'.
  blurRadius?: string;

  // --- Анимированный Блик ---
  // Прозрачность бегущего блика. 0 - нет блика.
  glareOpacity?: number;
  // Длительность полной анимации блика. Пример: '3.5s'.
  glareDuration?: string;
  // Задержка перед повторным запуском анимации блика. Пример: '0.5s'.
  glareDelay?: string;

  // --- Вертикальная Маска ---
  // Позиция, с которой начинается градиент маски. Пример: '20%'.
  maskStart?: string;
  // Позиция, где заканчивается градиент маски. Пример: '80%'.
  maskEnd?: string;
  // Прозрачность маски в НАЧАЛЕ градиента. 0 - эффект полностью скрыт, 1 - полностью виден.
  maskOpacityStart?: number;
  // Прозрачность маски в КОНЦЕ градиента. 0 - эффект полностью скрыт, 1 - полностью виден.
  maskOpacityEnd?: number;
}

const Glass: React.FC<GlassProps> = ({
  className,
  backgroundOpacity = 0.02,
  blurRadius = "0.625rem",
  glareOpacity = 0.2,
  glareDuration = "3.5s",
  glareDelay = "0.5s",
  maskStart = "20%",
  maskEnd = "80%",
  maskOpacityStart = 0.5,
  maskOpacityEnd = 1,
}) => {
  const style = {
    "--glass-background-opacity": backgroundOpacity,
    "--glass-blur-radius": blurRadius,
    "--glass-glare-opacity": glareOpacity,
    "--glass-glare-duration": glareDuration,
    "--glass-glare-delay": glareDelay,
    "--glass-mask-start": maskStart,
    "--glass-mask-end": maskEnd,
    "--glass-mask-opacity-start": maskOpacityStart,
    "--glass-mask-opacity-end": maskOpacityEnd,
  } as React.CSSProperties;

  return (
    <div className={clsx(styles.glass, className)} style={style}>
      <div className={styles.background} />
      <div className={styles.glare} />
    </div>
  );
};

export default Glass;

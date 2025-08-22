"use client";

import React, { ElementType, ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from "./Button.module.scss";
import Glass from "./Glass"; // Импортируем наш новый компонент

// Общие пропсы для всех вариантов
interface BaseButtonProps {
  variant?: "primary" | "secondary" | "outline" | "glass";
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
}

// Пропсы для полиморфного компонента
type PolymorphicButtonProps<T extends ElementType> = BaseButtonProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof BaseButtonProps> & {
    as?: T;
    href?: string;
    ref?: React.Ref<T>; // ref теперь обычный пропс
  };

// Тип для компонента
type ButtonComponent = <T extends ElementType = "button">(
  props: PolymorphicButtonProps<T>
) => React.ReactElement | null;

const Button: ButtonComponent = ({
  as: Component = "button",
  variant = "primary",
  className,
  children,
  icon,
  iconPosition = "left",
  disabled,
  href,
  ref, // ref теперь обычный пропс
  ...props
}) => {
  const buttonClasses = clsx(
    styles.button,
    styles[variant],
    { [styles.__disabled]: disabled },
    className
  );

  const content = (
    <>
      {variant === "glass" && <Glass />}
      {icon && iconPosition === "left" && (
        <span className={styles.icon}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className={styles.icon}>{icon}</span>
      )}
    </>
  );

  if (href) {
    const { type, ...linkProps } = props; // Извлекаем type, чтобы не передавать его в Link
    return (
      <Link
        href={href}
        className={buttonClasses}
        ref={ref as React.Ref<HTMLAnchorElement>} // Приводим тип ref для Link
        {...(linkProps as Omit<
          React.ComponentPropsWithoutRef<"a">,
          "href" | "className"
        >)}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
          }
          const userOnClick = props.onClick as
            | React.MouseEventHandler<HTMLAnchorElement>
            | undefined;
          if (userOnClick) {
            userOnClick(e);
          }
        }}
        aria-disabled={disabled}
      >
        {content}
      </Link>
    );
  }

  return (
    <Component
      className={buttonClasses}
      ref={ref} // Передаем ref напрямую
      disabled={disabled}
      {...props}
    >
      {content}
    </Component>
  );
};

export default Button;

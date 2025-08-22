import Link from "next/link";
import styles from "./Dropdown.module.scss";

interface DropdownProps {
  items: { href: string; label: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  return (
    <ul className={styles.dropdown}>
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;

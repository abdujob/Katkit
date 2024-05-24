import React from "react";
import Link from "next/link";
import styles from "./styles/navbar.module.css";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "#", label: "Acceuil" },
  { href: "#", label: "Themes" },
  { href: "#", label: "A propos" },
  { href: "#", label: "Contact" },
  { href: "/connexion", label: "Se connecter" },
  { href: "/inscription", label: "S'inscrire" },
];

const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {navItems.map((item) => (
          <li key={item.href} className={styles.li}>
            <Link href={item.href} className={styles.a} passHref>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

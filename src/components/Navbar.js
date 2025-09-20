import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>Mon Portfolio</h2>
      <div className={styles.links}>
        <Link href="/">Accueil</Link>
        <Link href="/about">À propos</Link>
        <Link href="/projects">Projets</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

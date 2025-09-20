import styles from "../styles/ProjectCard.module.css";

export default function ProjectCard({ title, link }) {
  return (
    <a href={link} target="_blank" className={styles.card}>
      <h3>{title}</h3>
    </a>
  );
}

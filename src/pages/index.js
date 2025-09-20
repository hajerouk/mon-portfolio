import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/profile.jpg"
          alt="Ma photo"
          width={200}
          height={200}
          className={styles.rounded}
        />
      </motion.div>
      <h1 className={styles.title}>Bienvenue sur mon Portfolio</h1>
      <p className={styles.subtitle}>Développeur Web Full Stack en devenir 🚀</p>
    </div>
  );
}

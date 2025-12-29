"use client";

import styles from "./ProjectList.module.css";

export function ProjectList() {
  return (
    <div className={styles.list}>
      <div className={styles.card}>
        <h3>Galeria de Fotos</h3>
        <p>Projeto em React focado em organização e visual.</p>

        <a
          href="https://github.com/BrunoVenuto/galeria-de-fotos"
          target="_blank"
        >
          Ver no GitHub
        </a>
      </div>

      <div className={styles.card}>
        <h3>Minha História</h3>
        <p>Site institucional contando minha trajetória.</p>

        <a
          href="https://github.com/BrunoVenuto/Minha-Historia-ate-a-PPMG"
          target="_blank"
        >
          Ver no GitHub
        </a>
      </div>
    </div>
  );
}

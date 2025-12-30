"use client";

import styles from "./ProjectList.module.css";

export function ProjectList() {
  return (
    <div className={styles.list}>
      {/* Projeto 1 */}
      <div className={styles.card}>
        <h3>Sistema Financeiro</h3>
        <p>Aplicação em React para controle financeiro.</p>

        <div className={styles.links}>
          <a
            href="https://sistema-finan-8pot.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Site
          </a>
        </div>
      </div>

      {/* Projeto 2 */}
      <div className={styles.card}>
        <h3>Minha História</h3>
        <p>Site institucional contando minha trajetória.</p>

        <div className={styles.links}>
          <a
            href="https://minha-historia-ate-a-ppmg.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Site
          </a>
        </div>
      </div>
    </div>
  );
}

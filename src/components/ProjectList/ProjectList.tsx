"use client";

import styles from "./ProjectList.module.css";

export function ProjectList() {
  return (
    <div className={styles.list}>
      {/* Projeto 1 */}
      <div className={styles.card}>
        <h3>Site Advogado Fictício</h3>
        <p>Aplicação em Nextjs com com layout focado em conversão, 
          CTA animado e formulário em modal integrado ao Supabase, 
          além de um painel administrativo protegido para gestão de leads
        </p>

        <div className={styles.links}>
          <a
            href="https://advogado-criminal-painel-admin-pwo3.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Site
          </a>
        </div>
      </div>

      {/* Projeto 2 */}
      <div className={styles.card}>
        <h3>Landing Page para Escritório de Advocacia</h3>
        <p>Projeto fictício focado em conversão, aplicando copywriting,
    funil de vendas e UX estratégico para geração de leads.</p>

        <div className={styles.links}>
          <a
            href="https://site-advocacia-nextjs.vercel.app/"
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

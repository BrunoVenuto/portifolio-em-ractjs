"use client";

import styles from "./CTA.module.css";

type CTAProps = {
  onOpen: () => void;
};

export function CTA({ onOpen }: CTAProps) {
  return (
    <section className={styles.cta}>
      <h2>Vamos tirar seu projeto do papel?</h2>
      <p>
        Me conte sua ideia e receba uma proposta personalizada.
      </p>

      <button onClick={onOpen}>
        Solicitar orçamento
      </button>
    </section>
  );
}

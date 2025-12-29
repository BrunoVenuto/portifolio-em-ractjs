import Image from "next/image";
import styles from "./InfoArea.module.css";
import { WhatsappButton } from "../WhatsappButton/WhatsappButton"

export const InfoArea = () => {
  return (
    <section className={styles.infoArea}>
      <div className={styles.container}>

        <div className={styles.text}>
          <h1 className={styles.title}>
            Olá, eu sou o Bruno.
          </h1>

          <p className={styles.subtitle}>
            Sou desenvolvedor Front-End, focado em criar interfaces modernas,
            responsivas e intuitivas.
            Trabalho com React, Next.js, HTML, CSS e JavaScript
            para transformar ideias em experiências reais.
          </p>

          <WhatsappButton />
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/images/eu.jpeg"
            alt="Imagem principal"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 550px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}

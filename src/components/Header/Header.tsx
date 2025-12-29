"use client";

import styles from "./Header.module.css";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

type HeaderProps = {
  onOpenProjects: () => void;
  onOpenContact: () => void;
};

export const Header = ({ onOpenProjects, onOpenContact }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleProjectsClick() {
    onOpenProjects();
    setMenuOpen(false); // fecha o menu no mobile
  }

  function handleContactClick() {
    onOpenContact();
    setMenuOpen(false); // fecha o menu no mobile
  }

  return (
    <header className={styles.Header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h3>{`{ Bruno Dev }`}</h3>
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <ul>
            <li onClick={handleProjectsClick}>Projetos</li>
            <li onClick={handleContactClick}>Contato</li>
          </ul>
        </nav>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
};

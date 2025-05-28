import React from 'react';
import styles from './index.module.css';
import Link from '@docusaurus/Link';

export default function HomePage() {
  return (

    <div className={styles.pageContainer}>
       <aside className={styles.sidebar}>
        <nav>
          <ul>
            <li>
              <Link to="/introducao">Introdução</Link>
            </li>
            <li>
              <Link to="/funcionalidades">Funcionalidades</Link>
            </li>
            <li>
             <Link to="/tecnologias">Tecnologias</Link>
            </li>
            <li>
               <Link to="/utilizacao">Utilização</Link>
            </li>
            <li>
              <Link to="/equipa">Equipa</Link>
            </li>
          </ul>
        </nav>
      </aside>
      {/* Header */}
      <header className={styles.header}>
        <h2>Gestão de Consultas</h2>
      </header>

      {/* Conteúdo principal */}
      <main className={styles.mainContent}>
        <div className={styles.topSection}>
          <h1 className={styles.mainTitle}>gestão de consultas</h1>
          <p className={styles.description}>Aplicação para marcação e gestão de consultas médicas</p>
        </div>

        <div className={styles.gridSection}>
          <div className={styles.card1}>
            <p className={styles.cardTitle}><br /></p>
            <img
              src="/img/imagem1.png"
              alt="Placeholder"
              className={styles.image}
            />
          </div>

          <div className={styles.card2}>
            <p className={styles.cardTitle}>missão</p>
            <p className={styles.cardText}>Facilitar o acesso à saúde através de uma plataforma intuitiva e eficiente para marcação e gestão de consultas médicas promovendo uma comunicação ágil entre pacientes e profissionais de saúde.</p>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <a href="https://github.com/o_teu_utilizador" target="_blank" rel="noopener noreferrer">
          Ver no GitHub
        </a>
      </footer>
    </div>
  );
}

import React from 'react';
import styles from './index.module.css';
import Link from '@docusaurus/Link';

export default function HomePage() {
  return (
    <div className={styles.pageContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h3>Menu</h3>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/introducao" className={styles.navLink}>
                <span className={styles.linkIcon}>📖</span> Introdução
              </Link>
            </li>
            <li>
              <Link to="/funcionalidades" className={styles.navLink}>
                <span className={styles.linkIcon}>⚙️</span> Funcionalidades
              </Link>
            </li>
            <li>
              <Link to="/tecnologias" className={styles.navLink}>
                <span className={styles.linkIcon}>💻</span> Tecnologias
              </Link>
            </li>
            <li>
              <Link to="/utilizacao" className={styles.navLink}>
                <span className={styles.linkIcon}>📋</span> Utilização
              </Link>
            </li>
            <li>
              <Link to="/equipa" className={styles.navLink}>
                <span className={styles.linkIcon}>👥</span> Equipa
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      
      <header className={styles.header}>
  <div className={styles.headerContent}>
    <div className={styles.logoContainer}>
      <img 
        src="/img/logo.png" 
        alt="Logo Gestão de Consultas" 
        className={styles.logo}
      />
    </div>
    <div className={styles.headerText}>
      <h1>Gestão de Consultas</h1>
      <p className={styles.headerSubtitle}>Sistema de gestão médica</p>
    </div>
  </div>
</header>
      <main className={styles.mainContent}>
        <div className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Gestão de Consultas Médicas</h1>
          <p className={styles.heroDescription}>
            Solução completa para marcação e gestão de consultas médicas,
            promovendo eficiência e melhor experiência para pacientes e profissionais.
          </p>
          <Link to="/utilizacao" className={styles.ctaButton}>
            Começar a usar →
          </Link>
        </div>

        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.cardImageContainer}>
              <img
                src="/img/imagem1.png"
                alt="Interface do sistema"
                className={styles.featureImage}
              />
            </div>
          </div>

          <div className={`${styles.featureCard} ${styles.highlightCard}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Nossa Missão</h3>
              <p className={styles.cardText}>
                Facilitar o acesso à saúde através de uma plataforma intuitiva e eficiente 
                para marcação e gestão de consultas médicas, promovendo uma comunicação 
                ágil entre pacientes e profissionais de saúde.
              </p>
              <div className={styles.cardStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>Focado na saúde</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Disponibilidade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© {new Date().getFullYear()} Gestão de Consultas. Todos os direitos reservados.</p>
          <a 
            href="https://github.com/rodft2/tp3-site-adc" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            <span className={styles.githubIcon}>📁</span> Ver no GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

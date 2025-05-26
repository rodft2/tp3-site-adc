import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
export default function Home() {
  return (
    <Layout title="Gestão de Consultas" description="Aplicação web para marcação de consultas médicas">
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Gestão de Consultas Médicas</h1>
        <p>Bem-vindo à nossa aplicação web para marcação e gestão de consultas.</p>
        <p>Explore as funcionalidades e saiba mais no menu lateral.</p>
        <Link to="/introducao">
          <button style={{ padding: '1rem', marginTop: '1rem' }}>Começar</button>
        </Link>
      </div>
    </Layout>
  );
}
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'My Website',
  description: 'Website description',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Barre de navigation */}
        <nav style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          height: '60px',
          backgroundColor: '#fff', // Fond blanc
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          boxShadow: '0px 4px 2px -2px gray', // Ajoute une ombre pour l'effet de profondeur
          zIndex: 1000,
        }}>
          <a href="/" style={linkStyle}>Home</a>
          <a href="/faq" style={linkStyle}>FAQ</a>
          <a href="/contact" style={linkStyle}>Nous contacter</a>
        </nav>

        {/* Contenu de la page */}
        <div style={{ paddingTop: '70px' }}> {/* Ajoute un espace en haut pour la barre */}
          {children}
        </div>
      </body>
    </html>
  );
}

// Style des liens avec texte vert
const linkStyle = {
  color: '#4CAF50', // Vert
  textDecoration: 'none',
  fontSize: '18px',
  padding: '0 15px',
  fontWeight: 'bold',
};

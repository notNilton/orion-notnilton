import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global-style.css';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('Elemento root não encontrado no DOM.');
}
import { createRoot } from '@wordpress/element';
import App from './App';


window.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('bdpcgs-dashboard'));
  root.render(<App />);
});